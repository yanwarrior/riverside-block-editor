Blockly.Blocks['thingspeak'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://thingspeak.com/assets/thingspeak_logo_white-ef4990033a96773df16f2a98e7d72e06f1f497d026145ebbcce1aa9d974e9015.png", 100, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("set")
        .appendField(new Blockly.FieldVariable("thingspeak"), "thingspeak")
        .appendField("key")
        .appendField(new Blockly.FieldTextInput("key"), "key");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['thingspeak_update'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField(new Blockly.FieldImage("https://thingspeak.com/assets/thingspeak_logo_white-ef4990033a96773df16f2a98e7d72e06f1f497d026145ebbcce1aa9d974e9015.png", 100, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("update")
        .appendField(new Blockly.FieldVariable("thingspeak"), "thingspeak")
        .appendField("with value");
    this.appendDummyInput()
        .appendField("and delay until")
        .appendField(new Blockly.FieldNumber(3, 3, 10), "seconds")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mailtrap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://assets.mailtrap.io/packs/assets/landing/logo-10f83f473022ef53d82e.svg", 100, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldVariable("mailtrap"), "mailtrap")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("smtp.mailtrap.io"), "smtp")
        .appendField(new Blockly.FieldTextInput("2525"), "port");
    this.appendDummyInput()
        .appendField("using")
        .appendField(new Blockly.FieldTextInput("username"), "username")
        .appendField(new Blockly.FieldTextInput("password"), "password");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mailtrap_sent'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://assets.mailtrap.io/packs/assets/landing/logo-10f83f473022ef53d82e.svg", 100, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("send me email with message");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ifttt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/IFTTT_Logo.svg/1280px-IFTTT_Logo.svg.png", 100, 45, { alt: "*", flipRtl: "FALSE" }))
        .appendField("set")
        .appendField(new Blockly.FieldVariable("ifttt"), "ifttt")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("key"), "key")
        .appendField("&")
        .appendField(new Blockly.FieldTextInput("event"), "event");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ifttt_send'] = {
  init: function() {
    this.appendValueInput("iftt_send")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/IFTTT_Logo.svg/1280px-IFTTT_Logo.svg.png", 100, 45, { alt: "*", flipRtl: "FALSE" }))
        .appendField("send")
        .appendField(new Blockly.FieldVariable("ifttt"), "ifttt")
        .appendField("with value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};