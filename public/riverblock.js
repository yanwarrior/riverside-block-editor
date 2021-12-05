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
var divDropZone = document.getElementById("div_drop_zone");
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

CustomConstantsProvider = function() {
  // Set up all of the constants from the base provider.
  CustomConstantsProvider.superClass_.constructor.call(this);

  // Override a few properties.
  /**
   * The width of the notch used for previous and next connections.
   * @type {number}
   * @override
   */
  this.NOTCH_WIDTH = 20;

  /**
   * The height of the notch used for previous and next connections.
   * @type {number}
   * @override
   */
  this.NOTCH_HEIGHT = 10;

  /**
   * Rounded corner radius.
   * @type {number}
   * @override
   */
  this.CORNER_RADIUS = 2;
  /**
   * The height of the puzzle tab used for input and output connections.
   * @type {number}
   * @override
   */
  this.TAB_HEIGHT = 8;
};


CustomRenderer = function(name) {
  CustomRenderer.superClass_.constructor.call(this, name);
};
Blockly.utils.object.inherits(CustomRenderer, Blockly.blockRendering.Renderer);

Blockly.blockRendering.register('custom_renderer', CustomRenderer);

var blocklyWorkspace = Blockly.inject(
  'blocklyDiv', {
    media: '/blockly/media/',
    toolbox: document.getElementById("toolbox"),
    scroll: true,
    theme: Blockly.Themes.Darker,
    renderer: 'custom_renderer',
    grid:
         {spacing: 15,
          length: 4,
          colour: '#293B5F',
          snap: true},
          zoom:
          {controls: true,
           wheel: true,
           startScale: 1.0,
           maxScale: 3,
           minScale: 0.3,
           scaleSpeed: 1.2,
           pinch: true},
     trashcan: true,
  }
);
Blockly.Python.init(blocklyWorkspace);


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
          if (value && done) {
            textareaSerial.value = value;
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
  inputProjectName.value = "";
  modalSaveProject.hide();
});

linkOpenProject.addEventListener("click", function () {
  modalOpenProject.show();
});

divDropZone.addEventListener('dragover', function(e) {
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
});

divDropZone.addEventListener('drop', function(e) {
  e.stopPropagation();
  e.preventDefault();
  var files = e.dataTransfer.files; // Array of all files

  for (var i=0, file; file=files[i]; i++) {
    var reader = new FileReader();
    reader.onload = function(e2) {
        // finished reading file data.
        let xml_text = e2.target.result;
        var xml = Blockly.Xml.textToDom(xml_text);
        Blockly.Xml.domToWorkspace(xml, blocklyWorkspace);
        localStorage.setItem("project", xml_text);
        
        modalOpenProject.hide();
    }
    reader.readAsText(file); 
  }
});






