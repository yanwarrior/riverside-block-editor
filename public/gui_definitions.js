Blockly.Blocks['gui_app'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldVariable("gui"), "gui")
        .appendField("app");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['gui_rows_layout'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create rows as")
        .appendField(new Blockly.FieldVariable("layout"), "layout");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
}
};


Blockly.Blocks['gui_cols'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("create columns");
    this.appendStatementInput("cols")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['gui_window'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("set")
        .appendField(new Blockly.FieldVariable("window"), "window")
        .appendField("from")
        .appendField(new Blockly.FieldVariable("gui"), "gui")
        .appendField("using")
        .appendField(new Blockly.FieldVariable("layout"), "layout");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("title")
        .appendField(new Blockly.FieldTextInput("My RiverSide App"), "title");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['gui_button'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(new Blockly.FieldImage("https://icons.iconarchive.com/icons/paomedia/small-n-flat/128/window-system-icon.png", 100, 40, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("create BUTTON from")
        .appendField(new Blockly.FieldVariable("gui"), "gui");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("title")
        .appendField(new Blockly.FieldTextInput("ok"), "ok")
        .appendField("tooltip")
        .appendField(new Blockly.FieldTextInput("..."), "tooltip");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("size x")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "sizex")
        .appendField("size y")
        .appendField(new Blockly.FieldNumber(0, 0, 100), "sizey");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("color")
        .appendField(new Blockly.FieldColour("#ff0000"), "colors");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("expand x")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "expandx")
        .appendField("y")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "expandy");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_event_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("read")
        .appendField(new Blockly.FieldVariable("event"), "event")
        .appendField("and")
        .appendField(new Blockly.FieldVariable("values"), "values")
        .appendField("from")
        .appendField(new Blockly.FieldVariable("window"), "window");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_values'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get")
        .appendField(new Blockly.FieldVariable("values"), "values")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("key"), "key");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_exit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("exit")
        .appendField(new Blockly.FieldVariable("gui"), "gui");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['gui_window_close'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldVariable("window"), "window")
        .appendField("close");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['utils_threading'] = {
  init: function() {
    this.appendStatementInput("function")
        .setCheck(null)
        .appendField("run thread with function");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};