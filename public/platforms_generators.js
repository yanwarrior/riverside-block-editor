Blockly.Python['thingspeak_write'] = function(block) {
  var variable_thingspeak = Blockly.Python.variableDB_.getName(block.getFieldValue('thingspeak'), Blockly.Variables.NAME_TYPE);
  var text_key = block.getFieldValue('key');
  var value_thingspeak_write = Blockly.Python.valueToCode(block, 'thingspeak_write', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `
${variable_thingspeak} = requests.get('${thingspeakBaseURL}/update', data={'key': '${text_key}', 'field1': ${value_thingspeak_write?value_thingspeak_write:0}})
print("Write data thingspeak ", ${variable_thingspeak}.status_code, flush=True)
time.sleep(4)
`;
  return code;
};  


Blockly.Python['mailtrap_send'] = function(block) {
  var variable_mailtrap = Blockly.Python.variableDB_.getName(block.getFieldValue('mailtrap'), Blockly.Variables.NAME_TYPE);
  var text_username = block.getFieldValue('username');
  var text_password = block.getFieldValue('password');
  var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `
sender = "Private Person <iot@riverside.iot>"
receiver = "Me <${text_username}@students.iot>"

message = f"""\
Subject: Hi ${text_username}@students.iot
To: {receiver}
From: {sender}

{${value_message}}"""

with smtplib.SMTP("smtp.mailtrap.io", 2525) as server:
  server.login("${text_username}", "${text_password}")
  server.sendmail(sender, receiver, message)
  print("Send email...", flush=True)
  time.sleep(2)
`;
  return code;
};


Blockly.Python['ifttt_send'] = function(block) {
  var variable_ifttt = Blockly.Python.variableDB_.getName(block.getFieldValue('ifttt'), Blockly.Variables.NAME_TYPE);
  var text_key = block.getFieldValue('key');
  var text_event = block.getFieldValue('event');
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `
${variable_ifttt} = requests.post('${iftttBaseURL}/trigger/${text_event}/with/key/${text_key}', data={'value1': ${value_data?value_data:0}})  
print("IFTTT Notification send...", ${variable_ifttt}.text, flush=True)
time.sleep(3)
`
  return code;
};