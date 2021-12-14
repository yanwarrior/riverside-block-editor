var blocklyArea = document.getElementById("blocklyArea");
var blocklyDiv = document.getElementById("blocklyDiv");
var aOpenSerial = document.getElementById("aOpenSerial");
var aCloseSerial = document.getElementById("aCloseSerial");
var offcanvasWebSerial = document.getElementById("offcanvasWebSerial");
var textareaOffcanvasWebSerial = document.getElementById("textareaOffcanvasWebSerial");
var modalSuccess = document.getElementById("modalSuccess");
var modalWarning = document.getElementById("modalWarning");
var modalError = document.getElementById("modalError");



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

// CustomRenderer = function(name) {
//   CustomRenderer.superClass_.constructor.call(this, name);
// };
// Blockly.utils.object.inherits(CustomRenderer,
//     Blockly.blockRendering.Renderer);

// CustomRenderer.prototype.makeConstants_ = function() {
//   return new CustomConstantsProvider();
// };
// Blockly.blockRendering.register('custom_renderer', CustomRenderer);


// CustomConstantsProvider = function() {
//   // Set up all of the constants from the base provider.
//   CustomConstantsProvider.superClass_.constructor.call(this);

//   // Override a few properties.
//   /**
//    * The width of the notch used for previous and next connections.
//    * @type {number}
//    * @override
//    */
//   // this.NOTCH_WIDTH = 20;
  

//   /**
//    * The height of the notch used for previous and next connections.
//    * @type {number}
//    * @override
//    */
//   this.NOTCH_HEIGHT = 4;

//   /**
//    * Rounded corner radius.
//    * @type {number}
//    * @override
//    */
//   this.CORNER_RADIUS = 7;

//   // this.BETWEEN_STATEMENT_PADDING_Y = 10;
//   /**
//    * The height of the puzzle tab used for input and output connections.
//    * @type {number}
//    * @override
//    */
//   // this.TAB_HEIGHT = 8;
// };
// Blockly.utils.object.inherits(CustomConstantsProvider,
//     Blockly.blockRendering.ConstantProvider);

// /**
//  * @override
//  */
// CustomConstantsProvider.prototype.init = function() {
//   CustomConstantsProvider.superClass_.init.call(this);
//   // Add calls to create shape objects for the new connection shapes.
//   this.RECT_PREV_NEXT = this.makeRectangularPreviousConn();
//   this.RECT_INPUT_OUTPUT = this.makeRectangularInputConn();
// };

// /**
//  * @override
//  */
// CustomConstantsProvider.prototype.shapeFor = function(connection) {
//   var checks = connection.getCheck();
//   switch (connection.type) {
//     case Blockly.INPUT_VALUE:
//     case Blockly.OUTPUT_VALUE:
//       // Includes doesn't work in IE.
//       if (checks && checks.indexOf('Number') != -1) {
//         return this.RECT_INPUT_OUTPUT;
//       }
//       if (checks && checks.indexOf('String') != -1) {
//         return this.RECT_INPUT_OUTPUT;
//       }
//       return this.PUZZLE_TAB;
//     case Blockly.PREVIOUS_STATEMENT:
//     case Blockly.NEXT_STATEMENT:
//       return this.NOTCH;
//     default:
//       throw Error('Unknown type');
//   }
// };

// /**
//  * Return a rectangular notch for use with previous and next connections.
//  */
// CustomConstantsProvider.prototype.makeRectangularPreviousConn = function() {
//   var width = this.NOTCH_WIDTH;
//   var height = this.NOTCH_HEIGHT;

//   /**
//    * Since previous and next connections share the same shape
//    * you can define a function to generate the path for both.
//    */
//   function makeMainPath(dir) {
//     return Blockly.utils.svgPaths.line(
//         [
//           Blockly.utils.svgPaths.point(0, height),
//           Blockly.utils.svgPaths.point(dir * width, 0),
//           Blockly.utils.svgPaths.point(0, -height)
//         ]);
//   }
//   var pathLeft = makeMainPath(1);
//   var pathRight = makeMainPath(-1);

//   return {
//     width: width,
//     height: height,
//     pathLeft: pathLeft,
//     pathRight: pathRight
//   };
// };

// /**
//  * Return a rectangular puzzle tab for use with input and output connections.
//  */
// CustomConstantsProvider.prototype.makeRectangularInputConn = function() {
//   var width = this.TAB_WIDTH;
//   var height = this.TAB_HEIGHT;

//   /**
//    * Since input and output connections share the same shape you can
//    * define a function to generate the path for both.
//    */
//   function makeMainPath(up) {
//     return Blockly.utils.svgPaths.line(
//         [
//           Blockly.utils.svgPaths.point(-width, 0),
//           Blockly.utils.svgPaths.point(0, -1 * up * height),
//           Blockly.utils.svgPaths.point(width, 0)
//         ]);
//   }

//   var pathUp = makeMainPath(1);
//   var pathDown = makeMainPath(-1);

//   return {
//     width: width,
//     height: height,
//     pathDown: pathDown,
//     pathUp: pathUp
//   };
// };

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
    // renderer: 'custom_renderer',
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


// Real live Python code
blocklyWorkspace.addChangeListener(function (event) {
  var code = global_statements_import.join("\n") + "\n";

  code += Blockly.Python.workspaceToCode(blocklyWorkspace);
  code += "\n" + global_statements_end.join("\n");
  textareaPython.value = "";
  textareaPython.value = code;
});

window.onload = function () {
  try {
    var xml_text = localStorage.getItem("project");
    var room = localStorage.getItem("room");
    if (xml_text) {
      var xml = Blockly.Xml.textToDom(xml_text);
      Blockly.Xml.domToWorkspace(xml, blocklyWorkspace);
    } 

    if (room) {
      socket.emit("pair", {room, content: ''});
    }
  } catch(err)  {
    localStorage.setItem("project", "");
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


// Link Pairing
linkPairing.addEventListener("click", function () {
  modalPairing.show();
});

// Pair now
btnPairNow.addEventListener("click", function () {
  console.log(inputRoomName.value);
  localStorage.setItem('room', inputRoomName.value);
  roomName = inputRoomName.value;
  linkRoomName.innerHTML = roomName;
  socket.emit("pair", {room: inputRoomName.value, content: ''});
  modalPairing.hide(); 
});

// Run 
btnRun.addEventListener("click", function () {

  var code = global_statements_import.join("\n") + "\n";

  code += Blockly.Python.workspaceToCode(blocklyWorkspace);
  var xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);
  var xml_text = Blockly.Xml.domToText(xml);

  code += "\n" + global_statements_end.join("\n");

  // document.getElementById('textareaModalLog').value = "";
  // new bootstrap.Modal(document.getElementById('modalLog')).show();
  console.log(code);
  socket.emit('run', {
    content: code,
    room: localStorage.getItem('room')
  });
});

socket.on("stdout", function (data) {
  textareaConsole.value += `[${data?data.room:'NOROOM'}] ${data.content}`;
  offcanvasConsole.show();
  textareaConsole.scrollTop = textareaConsole.scrollHeight;
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


linkNewProject.addEventListener('click', function () {
  Blockly.mainWorkspace.clear();
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





// socket.on("log", function (data) {
//   textareaOffcanvasWebSerial.value += "\n" + data.content;
// });

// socket.on("room", function (data) {
//   new bootstrap.Modal(modalSuccess).show();
// })


// linkSerialCom.addEventListener('click', async () => {
//   if ("serial" in navigator && !serialIsOpen) {
//     offcanvasConsole.show();
//     textareaConsole.scrollTop = textareaConsole.scrollHeight;
//     const port = await navigator.serial.requestPort();
//     await port.open({ baudRate: 115200 });
//     serialIsOpen = true;

//     while (port.readable) {
    
//       try {
//         const textDecoder = new TextDecoderStream();
//         const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
//         const reader = textDecoder.readable.getReader();

//         while (true) {
//           const { value, done } = await reader.read();
//           if (done) {
//             // Allow the serial port to be closed later.
//             reader.releaseLock();
//             break;
//           }
//           if (value) {
//             textareaSerial.value += value;
//           }
//         }

//         const textEncoder = new TextEncoderStream();
//         const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

//         reader.cancel();
//         await readableStreamClosed.catch(() => { 
//           /* Ignore the error */ 
//         });

//         await port.close();
//       } catch (error) {
//         // TODO: Handle non-fatal read error.
//       }
//     }
//   } else {
//     // Todo
//   } 
// });


