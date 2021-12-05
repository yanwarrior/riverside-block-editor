var blocklyArea = document.getElementById("blocklyArea");
var blocklyDiv = document.getElementById("blocklyDiv");
var aOpenSerial = document.getElementById("aOpenSerial");
var aCloseSerial = document.getElementById("aCloseSerial");
var offcanvasWebSerial = document.getElementById("offcanvasWebSerial");
var textareaOffcanvasWebSerial = document.getElementById("textareaOffcanvasWebSerial");
var modalSuccess = document.getElementById("modalSuccess");
var modalWarning = document.getElementById("modalWarning");
var modalError = document.getElementById("modalError");

var linkPairing = document.getElementById("link_pairing");
var modalPairing = new bootstrap.Modal(document.getElementById('modal_pairing'));
var btnPairNow = document.getElementById("btn_pair_now");
var inputRoomName = document.getElementById("input_room_name");
var btnRun = document.getElementById("btn_run");
var offcanvasConsole = new bootstrap.Offcanvas(document.getElementById("offcanvas_console"));
var linkConsole = document.getElementById("link_console");
var textareaConsole = document.getElementById("textarea_console");
var linkSerialCom = document.getElementById("link_serial_com");
var textareaSerial = document.getElementById("textarea_serial");
var linkSaveProject = document.getElementById("link_save_project");
var modalSaveProject = new bootstrap.Modal(document.getElementById("modal_save_project"));
var inputProjectName = document.getElementById("input_project_name");
var btnSaveProject = document.getElementById("btn_save_project");
var linkOpenProject = document.getElementById("link_open_project");
var modalOpenProject = new bootstrap.Modal(document.getElementById("modal_open_project"));
var inputOpenProject = document.getElementById('input_open_project');
var linkFilename = document.getElementById("link_filename");

var serialIsOpen = false;

Blockly.Themes.Darker = Blockly.Theme.defineTheme('darker', {
  'base': Blockly.Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': '#212529',
    'toolboxBackgroundColour': '#212529',
    'toolboxForegroundColour': '#fff',
    'flyoutBackgroundColour': '#393E46',
    'flyoutForegroundColour': '#ccc',
    'flyoutOpacity': 2,
    'scrollbarColour': '#113CFC',
    'insertionMarkerColour': '#113CFC',
    'insertionMarkerOpacity': 0.7,
    'scrollbarOpacity': 0.4,
    'cursorColour': '#fff',
    'blackBackground': '#333',
    "family": "Georgia, serif",
    "weight": "bold",
    "size": 15
  }
});



class CustomCategory extends Blockly.ToolboxCategory {
  /**
   * Constructor for a custom category.
   * @override
   */
  constructor(categoryDef, toolbox, opt_parent) {
    super(categoryDef, toolbox, opt_parent);
  }

  addColourBorder_(colour){
    this.rowDiv_.style.backgroundColor = colour;
  }

  setSelected(isSelected){
    // We do not store the label span on the category, so use getElementsByClassName.
    var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
    if (isSelected) {
      // Change the background color of the div to white.
      this.rowDiv_.style.backgroundColor = 'white';
      // Set the colour of the text to the colour of the category.
      labelDom.style.color = this.colour_;
      this.iconDom_.style.color = this.colour_;
    } else {
      // Set the background back to the original colour.
      this.rowDiv_.style.backgroundColor = this.colour_;
      // Set the text back to white.
      labelDom.style.color = 'white';
      this.iconDom_.style.color = 'white';
    }
    // This is used for accessibility purposes.
    Blockly.utils.aria.setState(/** @type {!Element} */ (this.htmlDiv_),
        Blockly.utils.aria.State.SELECTED, isSelected);
 }
}

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory, true
);



var blocklyWorkspace = Blockly.inject(
  'blocklyDiv', {
    media: '/blockly/media/',
    toolbox: document.getElementById("toolbox"),
    scroll: true,
    theme: Blockly.Themes.Darker,
    grid:
         {spacing: 10,
          length: 1,
          colour: '#293B5F',
          snap: true},
          zoom:
          {controls: true,
           wheel: true,
           startScale: 1,
           maxScale: 3,
           minScale: 0.3,
           scaleSpeed: 1.2,
           pinch: true},
     trashcan: true,
  }
);
Blockly.Python.init(blocklyWorkspace);

var toolbox = Blockly.getMainWorkspace().getToolbox();
toolbox.getToolboxItems()[0];
console.log(toolbox);

var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(blocklyWorkspace);
};

window.addEventListener('resize', onresize, false);
onresize();

Blockly.svgResize(blocklyWorkspace);

function onFirstComment(event) {
  
  if (event.type == Blockly.Events.BLOCK_CHANGE &&
      event.element == 'comment' &&
      !event.oldValue && event.newValue) {
    alert('Congratulations on creating your first comment!')
    workspace.removeChangeListener(onFirstComment);
  }
}
blocklyWorkspace.addChangeListener(onFirstComment);




window.onload = function () {
  var xml_text = localStorage.getItem("project");
  if (xml_text) {
    var xml = Blockly.Xml.textToDom(xml_text);
    Blockly.Xml.domToWorkspace(xml, blocklyWorkspace);
  }
};


window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  if (window.confirm("Do you really want to leave? Your project will be stored in the current memory!")) {
    var xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);
    var xml_text = Blockly.Xml.domToText(xml);
    localStorage.setItem("project", xml_text);
  }
});


// socket.on("log", function (data) {
//   textareaOffcanvasWebSerial.value += "\n" + data.content;
// });

// socket.on("room", function (data) {
//   new bootstrap.Modal(modalSuccess).show();
// })


linkSerialCom.addEventListener('click', async () => {
  if ("serial" in navigator && !serialIsOpen) {
    offcanvasConsole.show();
    textareaConsole.scrollTop = textareaConsole.scrollHeight;
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    serialIsOpen = true;

    while (port.readable) {
    
      try {
        const textDecoder = new TextDecoderStream();
        const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
        const reader = textDecoder.readable.getReader();

        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            // Allow the serial port to be closed later.
            reader.releaseLock();
            break;
          }
          if (value) {
            textareaSerial.value += value;
          }
        }

        const textEncoder = new TextEncoderStream();
        const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

        reader.cancel();
        await readableStreamClosed.catch(() => { 
          /* Ignore the error */ 
        });

        await port.close();
      } catch (error) {
        // TODO: Handle non-fatal read error.
      }
    }
  } else {
    // Todo
  } 
});

// Link Pairing
linkPairing.addEventListener("click", function () {
  modalPairing.show();
});

// Pair now
btnPairNow.addEventListener("click", function () {
  console.log(inputRoomName.value);
  localStorage.setItem('room', inputRoomName.value);
  socket.emit("pair", {room: inputRoomName.value, content: ''});
  modalPairing.hide(); 
});

// Run 
btnRun.addEventListener("click", function () {

  var code = "import sys\n";

  code += Blockly.Python.workspaceToCode(blocklyWorkspace);
  code += "\n\nimport time\ntime.sleep(10)";
  var xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);
  var xml_text = Blockly.Xml.domToText(xml);

  // document.getElementById('textareaModalLog').value = "";
  // new bootstrap.Modal(document.getElementById('modalLog')).show();

  socket.emit('run', {
    content: code,
    room: localStorage.getItem('room')
  });
});

socket.on("stdout", function (data) {
  console.log(data.content);
  textareaConsole.value += data.content;
  offcanvasConsole.show();
  textareaConsole.scrollTop = textareaConsole.scrollHeight;
});


linkConsole.addEventListener("click", function () {
  offcanvasConsole.show();
});


linkSaveProject.addEventListener("click", function () {
  inputProjectName.value = "";
  modalSaveProject.show();
});


btnSaveProject.addEventListener("click", function () {
  var xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);
  var xml_text = Blockly.Xml.domToText(xml);
  var aElem = document.createElement('a');
  aElem.setAttribute('href','data:application/xhtml+xml;charset=utf-8, ' + encodeURIComponent(xml_text));
  aElem.setAttribute('download', `${inputProjectName.value}.xml`);
  document.body.appendChild(aElem);
  aElem.click();
  document.body.removeChild(aElem);
  linkFilename.innerHTML = inputProjectName.value;
  localStorage.setItem(inputProjectName.value, xml_text);
  inputProjectName.value = "";
  modalSaveProject.hide();
});

linkOpenProject.addEventListener("click", function () {
  modalOpenProject.show();
});


inputOpenProject.addEventListener('change', function (evt) {
  let files = evt.target.files; // FileList object

  // use the 1st file from the list
  let f = files[0];
  var fullPath = evt.target.value;
  var filename = "";
  if (fullPath) {
    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    linkFilename.innerHTML = filename;
  }

  let reader = new FileReader();

  reader.onload = (function(theFile) {
    return function(e) {
      Blockly.mainWorkspace.clear();
      localStorage.setItem("project", e.target.result);
      localStorage.setItem(filename, e.target.result);
      var xml = Blockly.Xml.textToDom(e.target.result);
      Blockly.Xml.domToWorkspace(blocklyWorkspace, xml);
      modalOpenProject.hide();
    };
  })(f);

  // Read in the image file as a data URL.
  reader.readAsText(f);
}, false);






