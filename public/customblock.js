/**
 * IMPORTANT UPDATE BLOCKLY NAMED IS CHANGE
 */
// console.log('before', Blockly.JavaScript.variableDB_.getName);
// const workspaceCode = Blockly.JavaScript.workspaceToCode(this.workspace);
// console.log('after', Blockly.JavaScript.variableDB_.variableMap_);

Blockly.Blocks['printx'] = {
  init: function() {
    this.appendValueInput("printx")
        .setCheck(null)
        .appendField("printx");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['printx'] = function(block) {
  var value_printx = Blockly.Python.valueToCode(block, 'printx', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `print(${value_printx})\n`;
  code += `sys.stdout.flush()\n`;
  return code;
};

Blockly.Blocks['open_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Open time");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['open_time'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import time\n';
  return code;
};

Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Time sleep")
        .appendField(new Blockly.FieldNumber(1, 1, 60, 1), "second")
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['time_sleep'] = function(block) {
  var number_second = block.getFieldValue('second');
  // TODO: Assemble Python into code variable.
  var code = `time.sleep(${number_second})\n`;
  return code;
};



// DICTIONARY
Blockly.Blocks['key_value'] = {
  init: function() {
    this.appendValueInput("key")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Key:");
    this.appendValueInput("value")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Value:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dict'] = {
  init: function() {
    this.appendStatementInput("dict")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("create dictionary");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_value_dict'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("get value from")
        .appendField(new Blockly.FieldVariable("item"), "NAME")
        .appendField("with key");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['key_value'] = function(block) {
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_key}: ${value_value},`;
  return code;
};

Blockly.Python['dict'] = function(block) {
  var statements_dict = Blockly.Python.statementToCode(block, 'dict');
  // TODO: Assemble Python into code variable.
  var code = `{${statements_dict}}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_value_dict'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.get(${value_name}, None)`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// REQUESTS
Blockly.Blocks['import_requests'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import requests");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['request_post'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("requests post");
    this.appendValueInput("url")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("url");
    this.appendValueInput("data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("data");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_response_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get response text from")
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_status_code'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get status code from")
        .appendField(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['import_requests'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import requests\n';
  return code;
};

Blockly.Python['request_post'] = function(block) {
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `requests.get(${value_url}, params=${value_data})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_response_text'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.text`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_status_code'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.status_code`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
// ./REQUESTS


// MACHINE COMMUNICATION AND ACTION
Blockly.Blocks['led_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("led on");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['led_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("led off");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['led_blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("led blink");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['temperature'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("get temperature");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['celcius_to_fahrenheit'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("from");
    this.appendDummyInput()
        .appendField("to fahreinheit");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['machine_communication'] = {
  init: function() {
    this.appendValueInput("ip")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("machine number");
    this.appendValueInput("action")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("and action");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['talk_with_machine'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("talk with machine to");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['command_machine'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("command the machine");
    this.appendValueInput("ip")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("to");
    this.appendValueInput("data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("with");
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_machine_answer'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("get machine answer from")
        .appendField(new Blockly.FieldVariable("machine"), "var");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


// ./MACHINE COMMUNICATION & ACTION

Blockly.Python['led_on'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '"/builtin/led/on"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['led_off'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '"/builtin/led/off"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['led_blink'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '"/builtin/led/onoff"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['temperature'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '"/sensors/lm35"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['celcius_to_fahrenheit'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `(int(${value_name})× 9/5) + 32`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['open_machine'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("open machine");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['machine_communication'] = function(block) {
  var value_ip = Blockly.Python.valueToCode(block, 'ip', Blockly.Python.ORDER_ATOMIC);
  var value_action = Blockly.Python.valueToCode(block, 'action', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `'http://' + ${value_ip} + ${value_action}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['talk_with_machine'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `machinest.get(${value_name})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['command_machine'] = function(block) {
  var value_ip = Blockly.Python.valueToCode(block, 'ip', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `machinest.get(${value_ip}, params=${value_data})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_machine_answer'] = function(block) {
  var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `${variable_var}.text`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['open_machine'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import requests as machinest\n';
  return code;
};

Blockly.Blocks['data_convert'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("convert");
    this.appendDummyInput()
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["int","int"], ["str","str"], ["float","float"]]), "types");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Python['data_convert'] = function(block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var dropdown_types = block.getFieldValue('types');
  var code = `${dropdown_types}(${value_value})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['thingspeak_action'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("thingspeak write");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Python['thingspeak_action'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '"/thingspeak/write"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

