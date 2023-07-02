localStorage.setItem('version', 'v1.00.0')
localStorage.setItem('size', '(10.2 MB)')
document.getElementById('info').innerHTML = localStorage.getItem('info')
document.getElementById('info2').innerHTML = `
<input type="text" name="" id='name' value='${localStorage.getItem('name')}' placeholder='Your name'> <br> <br>
<input type="number" name="" id='admno' minlength='4' maxlength='4 'value='${localStorage.getItem('admno')}' placeholder='Admission Number'> <br><br>
<input type="text" name="" id='frname' value='${localStorage.getItem('frname')}' placeholder="Father's Name"> <br> <br>
<input type="text" name="" id='mrname' value='${localStorage.getItem('mrname')}' placeholder="Mother's Name"> 
`
function save() {
  uname = document.getElementById('name').value;
  admno = document.getElementById('admno').value;
  frname = document.getElementById('frname').value;
  mrname = document.getElementById('mrname').value;
  if (uname == '' || admno == '' || frname == '' || mrname == '') {
    swal("Invalid", "Please check the following:\n1. Cannot be empty\n2. Admission Number must have atleast 4 characters", "warning");
  }
  else {
    localStorage.setItem('name',uname)
    localStorage.setItem('admno',admno)
    localStorage.setItem('frname',frname)
    localStorage.setItem('mrname',mrname)
    swal("Saved!", "Data updated successfully", "success");
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
          imageUrl: 'files/tick.gif'
        });
      }
      });
  }
function apanel() {
  if(localStorage.getItem('badge') == 'Admin' || localStorage.getItem('badge') == 'Developer') {
    window.location.replace('admin.html')
  }
  else {
    swal("Error", "You are not an Admin or Developer!", "error");
  }
}
