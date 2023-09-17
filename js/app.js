localStorage.setItem('version', 'v4.90.0')
  localStorage.setItem('size', '(3.2 MB)')
function create() {
    pname = document.getElementById('pname').value;
    fname = document.getElementById('fname').value;
    lang = 'aio'
    
    localStorage.removeItem('method')
    
    if (pname == '' || fname == '') {
      document.getElementById('error').innerHTML = '<br> ❗ Please fill all the fields'
    }
    else if (lang == 'aio') {
    localStorage.removeItem('method')
    localStorage.setItem('pname',pname)
    localStorage.setItem('fname',fname+'.html')
    localStorage.setItem('lang',lang)
    localStorage.setItem('ed','yes')
    swal({
      title: "Creating Project",
      text: "Please wait while we are creating your project.",
      imageUrl: 'https://svmassembly.tk/files/tick.gif'
    });
      setTimeout(() => {
        swal({
          title: "Project Created",
          text: "Done!",
          imageUrl: 'https://svmassembly.tk/files/tick.gif'
        });
        setTimeout(() => {
          window.location.replace('codeaio.html')
        }, 200);
      }, 700);
    }
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
      localStorage.removeItem('verified')
      localStorage.removeItem('method')
      localStorage.removeItem('database')
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