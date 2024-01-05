Blockly.Blocks["uno_mpr121_read_check"] = {
  init: function() {
    this.jsonInit({
      "message0": 'touchpad các ký tự đã nhấn = %1',
      args0: [
        { type: "input_value", name: "VALUE", check: "String" }
      ],
      "output": null,
      "colour": "#e63022",
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Python["uno_mpr121_read_check"] = function(block) {
  Blockly.Python.definitions_["import_mpr121"] = "from mpr121 import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, SoftI2C";
  Blockly.Python.definitions_["init_mpr121"] = "mpr = MPR121(SoftI2C(scl=Pin(SCL_PIN), sda=Pin(SDA_PIN)))";

  var cbFunctionName = Blockly.Python.provideFunction_(
    'mpr121_scan_task',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      Blockly.Python.INDENT + 'while True:',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'mpr.scan(True)',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'await asleep_ms(100)'
    ]);

  Blockly.Python.definitions_['task_mpr131'] = 'create_task(' + cbFunctionName + '())';
  // TODO: Assemble Python into code variable.
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var code ="mpr.read() == " + value;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["uno_mpr121_read"] = {
  init: function() {
    this.jsonInit({
      "message0": 'touchpad đọc các ký tự được nhấn',
      "output": null,
      "colour": "#e63022",
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Python["uno_mpr121_read"] = function(block) {
  Blockly.Python.definitions_["import_mpr121"] = "from mpr121 import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, SoftI2C";
  Blockly.Python.definitions_["init_mpr121"] = "mpr = MPR121(SoftI2C(scl=Pin(SCL_PIN), sda=Pin(SDA_PIN)))";

  var cbFunctionName = Blockly.Python.provideFunction_(
    'mpr121_scan_task',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      Blockly.Python.INDENT + 'while True:',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'mpr.scan(True)',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'await asleep_ms(100)'
    ]);

  Blockly.Python.definitions_['task_mpr131'] = 'create_task(' + cbFunctionName + '())';
  // TODO: Assemble Python into code variable.
  var code ="mpr.read()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mpr121_clear'] = {
  init: function () {
    this.jsonInit({
      colour: "#e63022",
      nextStatement: null,
      tooltip: "touchpad xóa các kí tự đã nhập",
      message0: "touchpad xóa các kí tự đã nhập",
      previousStatement: null,
      args0: [],
      helpUrl: "",
    });
  },
};

Blockly.Python['uno_mpr121_clear'] = function(block) {
  Blockly.Python.definitions_["import_mpr121"] = "from mpr121 import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, SoftI2C";
  Blockly.Python.definitions_["init_mpr121"] = "mpr = MPR121(SoftI2C(scl=Pin(SCL_PIN), sda=Pin(SDA_PIN)))";

  var cbFunctionName = Blockly.Python.provideFunction_(
    'mpr121_scan_task',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      Blockly.Python.INDENT + 'while True:',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'mpr.scan(True)',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'await asleep_ms(100)'
    ]);

  Blockly.Python.definitions_['task_mpr131'] = 'create_task(' + cbFunctionName + '())';
  // TODO: Assemble Python into code variable.
  var code ="mpr.clear()\n";
  return code;
};

Blockly.Blocks["uno_mpr121_scan"] = {
  init: function() {
    this.jsonInit({
      "message0": 'touchpad đọc phím đang được nhập',
      "output": null,
      "colour": "#e63022",
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Python["uno_mpr121_scan"] = function(block) {
  Blockly.Python.definitions_["import_mpr121"] = "from mpr121 import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, SoftI2C";
  Blockly.Python.definitions_["init_mpr121"] = "mpr = MPR121(SoftI2C(scl=Pin(SCL_PIN), sda=Pin(SDA_PIN)))";

  var cbFunctionName = Blockly.Python.provideFunction_(
    'mpr121_scan_task',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      Blockly.Python.INDENT + 'while True:',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'mpr.scan(True)',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'await asleep_ms(100)'
    ]);

  Blockly.Python.definitions_['task_mpr131'] = 'create_task(' + cbFunctionName + '())';
  // TODO: Assemble Python into code variable.
  var code ="mpr.scan()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['uno_mpr121_check'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "touchpad_istouch",
        "message0": 'phím %1 touchpad được nhấn',
        "args0": [
          {
            "type": "field_dropdown",
            "name": "KEY",
            "options": [
              [
                "0",
                "0"
              ],
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "*",
                "10"
              ],
              [
                "#",
                "11"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": "#e63022",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['uno_mpr121_check'] = function(block) {
  Blockly.Python.definitions_["import_mpr121"] = "from mpr121 import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, SoftI2C";
  Blockly.Python.definitions_["init_mpr121"] = "mpr = MPR121(SoftI2C(scl=Pin(SCL_PIN), sda=Pin(SDA_PIN)))";

  var cbFunctionName = Blockly.Python.provideFunction_(
    'mpr121_scan_task',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      Blockly.Python.INDENT + 'while True:',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'mpr.scan(True)',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'await asleep_ms(100)'
    ]);

  Blockly.Python.definitions_['task_mpr131'] = 'create_task(' + cbFunctionName + '())';
  // TODO: Assemble Python into code variable.
  var key = block.getFieldValue('KEY');
  var code = 'mpr.is_touched(' + key + ')';
  return [code, Blockly.Python.ORDER_NONE];
};