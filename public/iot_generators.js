Blockly.Python['iot_machine'] = function(block) {
  var variable_iot_machine = Blockly.Python.variableDB_.getName('iot_machine',
      Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var text_ip = block.getFieldValue('ip');
  // TODO: Assemble Python into code variable.
  var code = `${variable_iot_machine} = '${text_ip}'\n`;
  return code;
};

Blockly.Python['iot_led'] = function(block) {
  var variable_iot_led = Blockly.Python.variableDB_.getName('iot_led',
      Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var variable_iot_machine = Blockly.Python.variableDB_.getName('iot_machine',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var dropdown_state = block.getFieldValue('state');
  // TODO: Assemble Python into code variable.
  var code = `${variable_iot_led} = requests.get(f'http://{${variable_iot_machine}}/led/${dropdown_state}')\n`;
      code += `print(${variable_iot_led}.text, flush=True)\n`; 
      code += `time.sleep(0.5)\n\n`;
  return code;
};

Blockly.Python['iot_beep'] = function(block) {
  var variable_iot_beep = Blockly.Python.variableDB_.getName('iot_beep',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var variable_iot_machine = Blockly.Python.variableDB_.getName('iot_machine',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var dropdown_state = block.getFieldValue('state');
  // TODO: Assemble Python into code variable.
  var code = `${variable_iot_beep} = requests.get(f'http://{${variable_iot_machine}}/beep/${dropdown_state}')\n`;
      code += `print(${variable_iot_beep}.text, flush=True)\n`; 
      code += `time.sleep(0.5)\n\n`;
  return code;
};

Blockly.Python['iot_tone'] = function(block) {
  var variable_iot_tone = Blockly.Python.variableDB_.getName('iot_tone',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var variable_iot_machine = Blockly.Python.variableDB_.getName('iot_machine',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var dropdown_state = block.getFieldValue('state');
  var number_duration = block.getFieldValue('duration');
  // TODO: Assemble Python into code variable.
  var duration = number_duration / 1000;
  var params = `{"tone": ${dropdown_state}, "duration": ${number_duration}}`
  var code = `${variable_iot_tone} = requests.get(f'http://{${variable_iot_machine}}/tone', params=${params})\n`;
      code += `print(${variable_iot_tone}.text, flush=True)\n`; 
      code += `time.sleep(${duration})\n\n`;
  return code;
};

Blockly.Python['iot_temperature'] = function(block) {
  var variable_iot_temperature = Blockly.Python.variableDB_.getName('iot_temperature',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var variable_iot_machine = Blockly.Python.variableDB_.getName('iot_machine',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var variable_celsius = Blockly.Python.variableDB_.getName(block.getFieldValue('celsius'), Blockly.Variables.NAME_TYPE);
  var variable_fahrenheit = Blockly.Python.variableDB_.getName(block.getFieldValue('fahrenheit'), Blockly.Variables.NAME_TYPE);
  var checkbox_standard = block.getFieldValue('standard') == 'TRUE';
  var standardURL = `f'http://{${variable_iot_machine}}/lm35907x'`;

  if (!checkbox_standard) {
    standardURL = `f'http://{${variable_iot_machine}}/lm35'`;
  }
  
  // TODO: Assemble Python into code variable.
  var params = `{"pin": "A0"}`
  var code = `${variable_iot_temperature} = requests.get(${standardURL}, params=${params})\n`;
      code += `${variable_celsius} = float(${variable_iot_temperature}.text)\n`; 
      code += `${variable_fahrenheit} = (${variable_celsius} * (9/5)) + 32\n`; 
      code += `print(${variable_celsius}, "celsius", flush=True)\n`; 
      code += `print(${variable_fahrenheit}, "fahrenheit", flush=True)\n`;
      code += `time.sleep(0.5)\n\n`;
  return code;
};


Blockly.Python['robot_move'] = function(block) {
  var iot_robot_move = Blockly.Python.variableDB_.getName('iot_robot_move',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var variable_iot_machine = Blockly.Python.variableDB_.getName('iot_machine',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);

  var dropdown_state = block.getFieldValue('state');
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble Python into code variable.
  var code = `${iot_robot_move} = requests.get(f'http://{${variable_iot_machine}}/robot/${dropdown_direction}')\n`;
      code += `print(${iot_robot_move}.text, flush=True)\n`; 
      code += `time.sleep(${dropdown_state})\n\n`;
      code += `${iot_robot_move} = requests.get(f'http://{${variable_iot_machine}}/robot/stop')\n`;
      code += `print(${iot_robot_move}.text, flush=True)\n`; 
      code += `time.sleep(1.5)\n\n`;
  return code;
};


Blockly.Python['robot_rotate'] = function(block) {
  var iot_robot_rotate = Blockly.Python.variableDB_.getName('iot_robot_rotate',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var variable_iot_machine = Blockly.Python.variableDB_.getName('iot_machine',
    Blockly.Names.DEVELOPER_VARIABLE_TYPE);
  var dropdown_state = block.getFieldValue('state');
  var dropdown_direction = block.getFieldValue('direction');

  // TODO: Assemble Python into code variable.
  var code = `${iot_robot_rotate} = requests.get(f'http://{${variable_iot_machine}}/robot/${dropdown_direction}')\n`;
      code += `print(${iot_robot_rotate}.text, flush=True)\n`; 
      code += `time.sleep(${dropdown_state})\n\n`;
      code += `${iot_robot_rotate} = requests.get(f'http://{${variable_iot_machine}}/robot/stop')\n`;
      code += `print(${iot_robot_rotate}.text, flush=True)\n`; 
      code += `time.sleep(1.5)\n\n`;
  return code;
};


// Blockly.Python['robot_lamp'] = function(block) {
//   var iot_robot_lamp = Blockly.Python.variableDB_.getName('iot_robot_lamp',
//     Blockly.Names.DEVELOPER_VARIABLE_TYPE);
//   var variable_iot_machine = Blockly.Python.variableDB_.getName('iot_machine',
//     Blockly.Names.DEVELOPER_VARIABLE_TYPE);
//   var dropdown_color = block.getFieldValue('color');
//   TODO: Assemble Python into code variable.
//   var code = `${iot_robot_lamp} = requests.get(f'http://{${variable_iot_machine}}/robot/led/${dropdown_color}')\n`;
//       code += `print(${iot_robot_lamp}.text, flush=True)\n`; 
//       code += `time.sleep(1)\n`;
//   return code;
// };

