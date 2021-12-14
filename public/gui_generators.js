Blockly.Python['gui_app'] = function(block) {
  var variable_gui = Blockly.Python.variableDB_.getName(block.getFieldValue('gui'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `
${variable_gui} = sg
`;
  return code;
};


Blockly.Python['gui_rows_layout'] = function(block) {
  var variable_layout = Blockly.Python.variableDB_.getName(block.getFieldValue('layout'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = `
${variable_layout} = [
  ${statements_name?statements_name:"[]"}
]
`;
  return code;
};


Blockly.Python['gui_cols'] = function(block) {
  var statements_cols = Blockly.Python.statementToCode(block, 'cols');
  // TODO: Assemble Python into code variable.
  var code = `[${statements_cols}],`;
  return code;
};

Blockly.Python['gui_window'] = function(block) {
  var variable_window = Blockly.Python.variableDB_.getName(block.getFieldValue('window'), Blockly.Variables.NAME_TYPE);
  var variable_gui = Blockly.Python.variableDB_.getName(block.getFieldValue('gui'), Blockly.Variables.NAME_TYPE);
  var variable_layout = Blockly.Python.variableDB_.getName(block.getFieldValue('layout'), Blockly.Variables.NAME_TYPE);
  var text_title = block.getFieldValue('title');
  // TODO: Assemble Python into code variable.
  var code = `${variable_window} = ${variable_gui}.Window("${text_title}", ${variable_layout})\n`;
  return code;
};


Blockly.Python['gui_button'] = function(block) {
  var variable_gui = Blockly.Python.variableDB_.getName(block.getFieldValue('gui'), Blockly.Variables.NAME_TYPE);
  var text_ok = block.getFieldValue('ok');
  var text_tooltip = block.getFieldValue('tooltip');
  var number_sizex = block.getFieldValue('sizex');
  var number_sizey = block.getFieldValue('sizey');
  var colour_colors = block.getFieldValue('colors');
  var checkbox_expandx = block.getFieldValue('expandx') == 'TRUE';
  var checkbox_expandy = block.getFieldValue('expandy') == 'TRUE';
  // TODO: Assemble Python into code variable.
  checkbox_expandx = checkbox_expandx?"True":"False";
  checkbox_expandy = checkbox_expandy?"True":"False";
  var code = `${variable_gui}.Button("${text_ok}", tooltip="${text_tooltip}", size=(${number_sizex}, ${number_sizey}), button_color="${colour_colors}", expand_x=${checkbox_expandx}, expand_y=${checkbox_expandy}),`;
  return code;
};


Blockly.Python['gui_event_value'] = function(block) {
  var variable_event = Blockly.Python.variableDB_.getName(block.getFieldValue('event'), Blockly.Variables.NAME_TYPE);
  var variable_values = Blockly.Python.variableDB_.getName(block.getFieldValue('values'), Blockly.Variables.NAME_TYPE);
  var variable_window = Blockly.Python.variableDB_.getName(block.getFieldValue('window'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `${variable_event}, ${variable_values} = ${variable_window}.read()\n`;
  return code;
};

Blockly.Python['get_values'] = function(block) {
  var variable_values = Blockly.Python.variableDB_.getName(block.getFieldValue('values'), Blockly.Variables.NAME_TYPE);
  var text_key = block.getFieldValue('key');
  // TODO: Assemble Python into code variable.
  var code = `${variable_values}.get('${text_key}', "")`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gui_exit'] = function(block) {
  var variable_gui = Blockly.Python.variableDB_.getName(block.getFieldValue('gui'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `${variable_gui}.WIN_CLOSED`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gui_window_close'] = function(block) {
  var variable_window = Blockly.Python.variableDB_.getName(block.getFieldValue('window'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `${variable_window}.close()\n`;
  return code;
};


// Blockly.Python['utils_threading'] = function(block) {
//   var value_function = Blockly.Python.valueToCode(block, 'function', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = `_thread.start_new_thread(${value_function}, (,))\n`;
//   return code;
// };

Blockly.Python['utils_threading'] = function(block) {
  var statements_function = Blockly.Python.statementToCode(block, 'function');
  // TODO: Assemble JavaScript into code variable.
  var statements = statements_function?statements_function.split("\n"):[];
  var code = "";
  var vars = [];
  if (statements.length > 0) {
    if (statements.length > 1) { statements.pop() }
    statements.forEach(function (value, index, array) {
      var x = `_th_${index}`;
      code += `${x} = threading.Thread(target=${statements[index].replace(/\s/g, "").replace("()", "")})\n${x}.start()\n`;
    });
  }
  
  return code;
};