Blockly.Blocks['thingspeak_write'] = {
  init: function() {
    this.appendValueInput("thingspeak_write")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://thingspeak.com/assets/thingspeak_logo_white-ef4990033a96773df16f2a98e7d72e06f1f497d026145ebbcce1aa9d974e9015.png", 100, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("set")
        .appendField(new Blockly.FieldVariable("thingspeak"), "thingspeak")
        .appendField("use")
        .appendField(new Blockly.FieldTextInput("key"), "key")
        .appendField("to write");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mailtrap_send'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://assets.mailtrap.io/packs/assets/landing/logo-10f83f473022ef53d82e.svg", 100, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("set")
        .appendField(new Blockly.FieldVariable("mailtrap"), "mailtrap");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("username")
        .appendField(new Blockly.FieldTextInput("username"), "username");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("password")
        .appendField(new Blockly.FieldTextInput("password"), "password");
    this.appendValueInput("message")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("message");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['ifttt_send'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/IFTTT_Logo.svg/1280px-IFTTT_Logo.svg.png", 100, 45, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("set")
        .appendField(new Blockly.FieldVariable("ifttt"), "ifttt");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("key")
        .appendField(new Blockly.FieldTextInput("key"), "key");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("event")
        .appendField(new Blockly.FieldTextInput("event"), "event");
    this.appendValueInput("data")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("send data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("IFTTT Webhook Technology for IoT");
 this.setHelpUrl("https://platform.ifttt.com/docs");
  }
};


Blockly.Blocks['win_beep'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
          .appendField("windows beep with frequency")
          .appendField(new Blockly.FieldNumber(100, 100, 1000), "frequency")
          .appendField("& duration is")
          .appendField(new Blockly.FieldNumber(100, 100, 1000), "duration")
          .appendField("milliseconds");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };