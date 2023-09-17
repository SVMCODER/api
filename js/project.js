localStorage.setItem('version', 'v4.90.0')
  localStorage.setItem('size', '(3.2 MB)')
document.getElementById('project').innerHTML = localStorage.getItem('project').replace('null', ``)
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
  
  