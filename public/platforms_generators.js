Blockly.Python['thingspeak'] = function(block) {
  var variable_thingspeak = Blockly.Python.variableDB_.getName(block.getFieldValue('thingspeak'), Blockly.Variables.NAME_TYPE);
  var text_key = block.getFieldValue('key');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['thingspeak_update'] = function(block) {
  var variable_thingspeak = Blockly.Python.variableDB_.getName(block.getFieldValue('thingspeak'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var number_seconds = block.getFieldValue('seconds');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['mailtrap'] = function(block) {
  var variable_mailtrap = Blockly.Python.variableDB_.getName(block.getFieldValue('mailtrap'), Blockly.Variables.NAME_TYPE);
  var text_smtp = block.getFieldValue('smtp');
  var text_port = block.getFieldValue('port');
  var text_username = block.getFieldValue('username');
  var text_password = block.getFieldValue('password');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['mailtrap_sent'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['ifttt'] = function(block) {
  var variable_ifttt = Blockly.Python.variableDB_.getName(block.getFieldValue('ifttt'), Blockly.Variables.NAME_TYPE);
  var text_key = block.getFieldValue('key');
  var text_event = block.getFieldValue('event');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['ifttt_send'] = function(block) {
  var variable_ifttt = Blockly.Python.variableDB_.getName(block.getFieldValue('ifttt'), Blockly.Variables.NAME_TYPE);
  var value_iftt_send = Blockly.Python.valueToCode(block, 'iftt_send', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};