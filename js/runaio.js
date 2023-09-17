var editor = CodeMirror.fromTextArea(document.getElementById("codeaio"), {
  mode: "htmlmixed",
  theme: "dracula",
  lineNumbers: true,
  extraKeys: {
    "Ctrl-Space": "autocomplete",
    "Ctrl-S": function(cm) {
      alert("Save");
    }
  },
  autoCloseBrackets: true,
  matchBrackets: true,
  showTrailingSpace: true
});

function runaio() {
  window.location.replace('ophtml.html')
}
editor.on("change", function () {
  localStorage.setItem('method','new')
  var code = editor.getValue();
  localStorage.setItem("codeaio", code);
});

var codeaio = localStorage.getItem("codeaio");
if (codeaio) {
    if (localStorage.getItem('method') == 'new') {
      editor.setValue(codeaio);
    }

}
function logout() {
swal({
      title: "Are you sure?",
      text: "You will be logged out and all your projects will be deleted!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Logout',
      cancelButtonText: "Cancel",
      closeOnConfirm: false,
      closeOnCancel: false
  },
  function(isConfirm){
  if (isConfirm){
    localStorage.removeItem('ed')
    localStorage.removeItem('loggedin')
    localStorage.removeItem('name')
    localStorage.removeItem('project')
    localStorage.removeItem('badge')
    localStorage.removeItem('role')
    localStorage.removeItem('database')
    localStorage.removeItem('verified')
    localStorage.removeItem('method')
    localStorage.removeItem('av')
      localStorage.removeItem('version')
      localStorage.removeItem('size')
      localStorage.removeItem('pcount')
    swal("Logging Out", "Please wait", "success");
    setTimeout(() => {
      window.location.replace('index.html')
    }, 1400);
  } else {
    swal({
      title: "Ah! You're safe",
      text: "Your projects are safe",
      imageUrl: 'https://svmassembly.tk/files/tick.gif'
    });
  }
  });
}
function checkforupdates() {
  var version = localStorage.getItem('version')
  if (localStorage.getItem('av') == 'yes') {
    swal({
      title: "Update Available",
      text: "Version "+version+" is available to install",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Install '+localStorage.getItem('size'),
      cancelButtonText: "Later",
      closeOnConfirm: false,
      closeOnCancel: false
    },
  function(isConfirm) {
  if (isConfirm){
    localStorage.setItem('av','no')
    swal({
      title: "Installing",
      text: "Please wait",
      imageUrl: 'https://svmassembly.tk/files/loading.gif'
    });
    setTimeout(() => {
      swal({
        title: "Installed",
        text: "Version "+version+" is successfully installed!",
        imageUrl: 'https://svmassembly.tk/files/tick.gif'
      });
      setTimeout(() => {
        window.location.replace('update-history.html')
      }, 2300);
    }, 2000);
  } 
  else {
    swal({
      title: "Sure",
      text: "You can update it later on.",
      imageUrl: 'https://svmassembly.tk/files/tick.gif'
    });
  }
}
    );
  }
  else {
    swal({
      title: "Already installed",
      text: "Version "+version+" and it's assets are already installed!",
      imageUrl: 'https://svmassembly.tk/files/tick.gif'
    });
  }
}
function saveaio() {
  pname = localStorage.getItem('pname')
  fname = localStorage.getItem('fname')
  code = localStorage.getItem('codeaio')
  if (code.length != 0) {
    pcountj = Number(localStorage.getItem('pcount'))
ad = pcountj+1
localStorage.setItem('pcount',ad)
    localStorage.setItem('database', localStorage.getItem('database')+`\n--------------\nProject Name: ${pname}\nFile Name: ${fname}\nCode: ${code = localStorage.getItem('codeaio')}\n`.replace('null',''))
    localStorage.setItem('project',localStorage.getItem('project')+`
    <div class='container'>
    <img src='https://svmassembly.tk/files/folder.gif'>
    <h3>${pname}</h3>
    <h4 class='bx bx-file fname'>File Name ${fname}</h4>
    <textarea readonly>${code}</textarea>
      </div>
    <br>
    `.replace('null',''))
    swal("Saved "+ pname, "Your project "+pname+" was saved successfully!", "success");
  }
  else {
    swal("Error saving "+pname, `Your project ${pname} was not successfully saved!\n
    Reason: ${fname} is empty\n
    Time: ${Date().replace('GMT+0530 (India Standard Time)','')}
    
    `, "warning");
  }
}
function closep() {
  swal({
    title: "Are you sure?",
    text: "Your work will be gone forever.",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: '#DD6B55',
    confirmButtonText: 'Delete',
    cancelButtonText: "Cancel",
    closeOnConfirm: false,
    closeOnCancel: false
},
function(isConfirm){
if (isConfirm) {
  swal("Deleting", "Please wait", "success");
  localStorage.removeItem('ed')
  localStorage.removeItem('pname')
  localStorage.removeItem('fname')
  setTimeout(() => {
    window.location.replace('config.html')
  }, 1400);
} else {
  swal("Cancelled", "You project is safe!", "success");
}
});
}
localStorage.setItem('version', 'v4.90.0')
  localStorage.setItem('size', '(3.2 MB)')