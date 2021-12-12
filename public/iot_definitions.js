Blockly.Blocks['iot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://avatars.githubusercontent.com/u/9865736?s=280&v=4", 30, 35, { alt: "*", flipRtl: "FALSE" }))
        .appendField("talk with")
        .appendField(new Blockly.FieldVariable("machine"), "machine")
        .appendField("using")
        .appendField(new Blockly.FieldTextInput("machine ip"), "machine ip");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://avatars.githubusercontent.com/u/9865736?s=280&v=4", 30, 35, { alt: "*", flipRtl: "FALSE" }))
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "state")
        .appendField("led from")
        .appendField(new Blockly.FieldVariable("machine"), "machine");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://avatars.githubusercontent.com/u/9865736?s=280&v=4", 30, 35, { alt: "*", flipRtl: "FALSE" }))
        .appendField("play")
        .appendField(new Blockly.FieldVariable("tone"), "tone")
        .appendField(new Blockly.FieldDropdown([["do","1"], ["re","2"], ["mi","3"], ["fa","4"], ["sol","5"], ["la","6"], ["si","7"], ["doo","8"]]), "note")
        .appendField("from")
        .appendField(new Blockly.FieldVariable("machine"), "machine");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://avatars.githubusercontent.com/u/9865736?s=280&v=4", 30, 35, { alt: "*", flipRtl: "FALSE" }))
        .appendField("info")
        .appendField(new Blockly.FieldVariable("temperature"), "temperature")
        .appendField("from")
        .appendField(new Blockly.FieldVariable("machine"), "machine");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_celsius'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://avatars.githubusercontent.com/u/9865736?s=280&v=4", 30, 35, { alt: "*", flipRtl: "FALSE" }))
        .appendField("get")
        .appendField(new Blockly.FieldVariable("celsius"), "celsius")
        .appendField("from")
        .appendField(new Blockly.FieldVariable("temperature"), "temperature");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['iot_fahrenheit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://avatars.githubusercontent.com/u/9865736?s=280&v=4", 30, 35, { alt: "*", flipRtl: "FALSE" }))
        .appendField("get")
        .appendField(new Blockly.FieldVariable("fahrenheit"), "fahrenheit")
        .appendField("from")
        .appendField(new Blockly.FieldVariable("temperature"), "temperature");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};