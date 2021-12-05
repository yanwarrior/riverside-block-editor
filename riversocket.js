const fs = require('fs');
const execFile = require("child_process").execFile;



exports.runPython = function (file) {

  
}

exports.createPythonFile = function (socket) {
  socket.on("createPythonFile", function (data) {
    fs.writeFile(`exec_${data.id}.py`, data.code, function(err) {
      if (err) {
        console.log(err);
      } else {
        
        // const child = execFile("python", [`exec_${data.id}.py`], {
        //   detached: true,
        //   maxBuffer: 10 * 1024 * 1024 * 1024
        // });
        
        // child.stdout.on("data", data=>{
        //   socket.emit("log", data.toString());
        //   console.log(data.toString());
        // });

        // child.stderr.on("data", data=>{
        //   socket.emit("log", data.toString());
        // });

        // child.on("exit", code=>{
        //   socket.emit("log", "Child exited with code " + code);
        // });
        // console.log("File written successfully\n");
        // console.log("The written has the following contents:");
      }
      socket.emit("log", "The file was saved!");
    });
  });
};


exports.createCodeFile = function (socket) {
  socket.on("create_code_file", function (data) {
    fs.writeFile(`/projects/exec_${data.room}.py`, data.content, function(err) {
      let payload = {
        content: `/projects/exec_${data.room}.py`,
        room: data.room,
      }
      socket.in(data.room).emit("running", payload);
    });
  })
}


exports.nsp = function (socket) {

  socket.on("nsp", (namespace) => {
    // RSCB receive namespace and
    // RSCB build directory with namespace
    var dir = `./projects/${namespace}`;
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
      // RSCB send success notif to RSP
      socket.emit("nspsuccess", "Success creating namespace");
    } else {
      // RSCB send success notif to RSP
      socket.emit("nspsuccess", "Your namespace is already. Happy coding!");
    }
    socket.emit("nspsuccess", "Your namespace is already. Happy coding!");
  });
}


exports.connectRoom = function (socket) {
  socket.on("connect_room", function (room) {
    socket.join(room);
  });
}


