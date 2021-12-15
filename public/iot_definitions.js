Blockly.Blocks['iot_machine'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://icons.iconarchive.com/icons/artua/wall-e/128/eve-icon.png", 49, 49, { alt: "*", flipRtl: "FALSE" }))
        .appendField("machine start with")
        .appendField(new Blockly.FieldTextInput("ip"), "ip");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  getDeveloperVariables: function() {
    return ['iot_led', 'iot_machine', 'iot_beep', 'iot_tone', 'iot_temperature'];
  }
};

Blockly.Blocks['iot_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://icons.iconarchive.com/icons/artua/wall-e/128/eve-icon.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("lamp")
        .appendField(new Blockly.FieldDropdown([[{"src":"https://icons.iconarchive.com/icons/graphicloads/100-flat-2/128/switch-icon.png","width":20,"height":20,"alt":"On"},"on"], [{"src":"https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/128/Switch-icon.png","width":20,"height":20,"alt":"Off"},"off"]]), "state");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  getDeveloperVariables: function() {
    return ['iot_led', 'iot_machine', 'iot_beep', 'iot_tone', 'iot_temperature'];
  }
};

Blockly.Blocks['iot_beep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://icons.iconarchive.com/icons/artua/wall-e/128/eve-icon.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("beep")
        .appendField(new Blockly.FieldDropdown([[{"src":"https://icons.iconarchive.com/icons/graphicloads/100-flat-2/128/switch-icon.png","width":20,"height":20,"alt":"On"},"on"], [{"src":"https://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/128/Switch-icon.png","width":20,"height":20,"alt":"Off"},"off"]]), "state");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  getDeveloperVariables: function() {
    return ['iot_led', 'iot_machine', 'iot_beep', 'iot_tone', 'iot_temperature'];
  }
};

Blockly.Blocks['iot_tone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://icons.iconarchive.com/icons/artua/wall-e/128/eve-icon.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("play melody")
        .appendField(new Blockly.FieldDropdown([
          [{"src":"https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/128/Number-1-icon.png","width":20,"height":20,"alt":"Do"},"1"], 
          [{"src":"https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/128/Number-2-icon.png","width":20,"height":20,"alt":"Re"},"2"], 
          [{"src":"https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/128/Number-3-icon.png","width":20,"height":20,"alt":"Mi"},"3"], 
          [{"src":"https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/128/Number-4-icon.png","width":20,"height":20,"alt":"Fa"},"4"], 
          [{"src":"https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/128/Number-5-icon.png","width":20,"height":20,"alt":"Sol"},"5"], 
          [{"src":"https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/128/Number-6-icon.png","width":20,"height":20,"alt":"La"},"6"], 
          [{"src":"https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/128/Number-7-icon.png","width":20,"height":20,"alt":"Si"},"7"], 
          [{"src":"https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/128/Number-8-icon.png","width":20,"height":20,"alt":"Doo"},"8"]]), "state")
        .appendField("with duration")
        .appendField(new Blockly.FieldNumber(200, 100, 1000), "duration")
        .appendField("milliseconds ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  getDeveloperVariables: function() {
    return ['iot_led', 'iot_machine', 'iot_beep', 'iot_tone', 'iot_temperature'];
  }
};

Blockly.Blocks['iot_temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://icons.iconarchive.com/icons/artua/wall-e/128/eve-icon.png", 40, 40, { alt: "*", flipRtl: "FALSE" }))
        .appendField("read temperature in")
        .appendField(new Blockly.FieldVariable("celsius"), "celsius")
        .appendField("&")
        .appendField(new Blockly.FieldVariable("fahrenheit"), "fahrenheit")
        .appendField("using lm35 standard model")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "standard");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  },
  getDeveloperVariables: function() {
    return ['iot_led', 'iot_machine', 'iot_beep', 'iot_tone', 'iot_temperature'];
  }
};




