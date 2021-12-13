Blockly.Python['iot'] = function(block) {
  var variable_machine = Blockly.Python.variableDB_.getName(block.getFieldValue('machine'), Blockly.Variables.NAME_TYPE);
  var text_machine_ip = block.getFieldValue('machine ip');
  // TODO: Assemble Python into code variable.
  var code = `
${variable_machine} = '${text_machine_ip}'
print('setup ${variable_machine}:', '${text_machine_ip}', flush=True)\n
`
  return code;
};

Blockly.Python['iot_led'] = function(block) {
  var dropdown_state = block.getFieldValue('state');
  var variable_machine = Blockly.Python.variableDB_.getName(block.getFieldValue('machine'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `
r = requests.get(f'http://{${variable_machine}}/builtin/led/${dropdown_state}')
print(r.text, flush=True)
time.sleep(1)
  `;
  return code;
};

Blockly.Python['iot_beep'] = function(block) {
  var dropdown_state = block.getFieldValue('state');
  var variable_beep = Blockly.Python.variableDB_.getName(block.getFieldValue('beep'), Blockly.Variables.NAME_TYPE);
  var variable_machine = Blockly.Python.variableDB_.getName(block.getFieldValue('machine'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `
${variable_beep} = requests.get(f'http://{${variable_machine}}/voices/beep/${dropdown_state}')
print(${variable_beep}.text, flush=True)
time.sleep(2)
`;
  return code;
};

Blockly.Python['iot_tone'] = function(block) {
  var variable_tone = Blockly.Python.variableDB_.getName(block.getFieldValue('tone'), Blockly.Variables.NAME_TYPE);
  var dropdown_note = block.getFieldValue('note');
  var variable_machine = Blockly.Python.variableDB_.getName(block.getFieldValue('machine'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `
${variable_tone} = requests.get(f'http://{${variable_machine}}/voices/tone', params={'tone': '${dropdown_note}'})
print(${variable_tone}.text, flush=True)
time.sleep(1)
`;
  return code;
};

Blockly.Python['iot_temperature'] = function(block) {
  var variable_temperature = Blockly.Python.variableDB_.getName(block.getFieldValue('temperature'), Blockly.Variables.NAME_TYPE);
  var variable_machine = Blockly.Python.variableDB_.getName(block.getFieldValue('machine'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `
${variable_temperature} = requests.get(f'http://{${variable_machine}}/sensors/lm35', params={'pin': 'A0'})
print('Call system temperature!', flush=True)
time.sleep(1)
`;
  return code;
};


Blockly.Python['iot_celsius'] = function(block) {
  var variable_celsius = Blockly.Python.variableDB_.getName(block.getFieldValue('celsius'), Blockly.Variables.NAME_TYPE);
  var variable_temperature = Blockly.Python.variableDB_.getName(block.getFieldValue('temperature'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `
${variable_celsius} = float(${variable_temperature}.text)
print(${variable_celsius}, " C", flush=True)
time.sleep(1)
`;
  return code;
};

Blockly.Python['iot_fahrenheit'] = function(block) {
  var variable_fahrenheit = Blockly.Python.variableDB_.getName(block.getFieldValue('fahrenheit'), Blockly.Variables.NAME_TYPE);
  var variable_temperature = Blockly.Python.variableDB_.getName(block.getFieldValue('temperature'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = `
${variable_fahrenheit} = (float(${variable_temperature}.text) * 9/5) + 32
print(${variable_fahrenheit}, " F", flush=True)
`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};