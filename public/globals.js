var linkPairing = document.getElementById("link_pairing");
var modalPairing = new bootstrap.Modal(document.getElementById('modal_pairing'));
var btnPairNow = document.getElementById("btn_pair_now");
var inputRoomName = document.getElementById("input_room_name");
var btnRun = document.getElementById("btn_run");
var offcanvasConsole = new bootstrap.Offcanvas(document.getElementById("offcanvas_console"));
var linkConsole = document.getElementById("link_console");
var textareaConsole = document.getElementById("textarea_console");
var linkSaveProject = document.getElementById("link_save_project");
var modalSaveProject = new bootstrap.Modal(document.getElementById("modal_save_project"));
var inputProjectName = document.getElementById("input_project_name");
var btnSaveProject = document.getElementById("btn_save_project");
var linkOpenProject = document.getElementById("link_open_project");
var modalOpenProject = new bootstrap.Modal(document.getElementById("modal_open_project"));
var inputOpenProject = document.getElementById('input_open_project');
var linkFilename = document.getElementById("link_filename");
var linkNewProject = document.getElementById('link_new_project');
var modalWelcome = new bootstrap.Modal(document.getElementById('modal_welcome'));
var textareaPython = document.getElementById("textarea_python");

var global_statements_import = [
  "try:",
  "  import os",
  "  import time",
  "  import sys",
  "  import requests",
  "except Exception as e:",
  "  print('system checking...', flush=True)",
  "  os.system('pip install requests')",
  "\n\n"
];

var global_statements_end = [
  "time.sleep(2)",
]



