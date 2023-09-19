function login() {
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;
  admno = document.getElementById('admno').value;
  frname = document.getElementById('frname').value;
  mrname = document.getElementById('mrname').value;
  //UPDATES 
  localStorage.setItem('av', 'yes')
  localStorage.setItem('version', 'v4.90.0')
  localStorage.setItem('size', '(3.2 MB)')
  if (username.length > 16) {
    swal("Error", "Username cannot be greater than 16 digits", "error");
  }
  else if (password.length > 8 || password.length < 8) {
    swal("Error", "Password cannot be less or greater than 8 digits", "error");
  }
  else if (admno.length > 4 || admno.length < 4) {
    swal("Error", "Admission Number cannot be greater than 4 digits", "error");
  }
  else if (frname.length == 0) {
    swal("Error", "Father's Name cannot be empty", "error");
  }
  else if (mrname.length == 0) {
    swal("Error", "Mother's Name cannot be empty", "error");
  }
  else if (username == 'Shaurya' && password == 'uioplol!') {
    swal({
      title: "Welcome Founder Shaurya Tripathi",
      text: "Dear Founder Shaurya Tripathi, Please wait while the server connects to the database api",
      imageUrl: "/files/shaurya.png"
    });
    localStorage.setItem('name', "Shaurya Tripathi")
    localStorage.setItem('role', "Founder")
    localStorage.setItem('badge', "Developer")
    localStorage.setItem('loggedin', 'yes')
    localStorage.setItem('admno', '3672')
    localStorage.setItem('frname', "Mr. Ramanand Tripathi")
    localStorage.setItem('mrname', "Mrs. Kiran Tripathi")
    localStorage.setItem('verified',true)
    localStorage.setItem('info', `
    <h3>Profile</h3>
      <img src="svmassembly.tk/files/shaurya.png" alt="">
    <h3 class='verified'>
    <img src=/files/hammer.gif'>
    <img src=/files/verified.gif'>
    ${localStorage.getItem('name')}
    </h3>
    <h4 class='verified'>
    <img src=/files/crown.gif'>
    ${localStorage.getItem('role')}</h4>
    <h4 class='verified'>
    <img src=/files/html.gif'>
    ${localStorage.getItem('badge')}
    </h4>
    <button class="bx bx-log-out red" onclick="logout()"> Logout</button>
    <button class="bx bx-cog" onclick="apanel()"> Admin Panel</button>
    `)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
  else if (username == 'Rohit' && password == 'rs15bug!') {
    swal({
      title: "Welcome Rohit Srivastava",
      text: "Dear Rohit, Please wait while we log you in.",
      imageUrl: "/files/rohit.png"
    });
    localStorage.setItem('name', "Rohit Srivastava")
    localStorage.setItem('role', "Onwer")
    localStorage.setItem('badge', "Admin")
    localStorage.setItem('loggedin', 'yes')
    localStorage.setItem('admno', admno)
    localStorage.setItem('frname', frname)
    localStorage.setItem('mrname', mrname)
    localStorage.setItem('verified',true)
    localStorage.setItem('info',
    `
    <h3>Profile</h3>
      <img src="svmassembly.tk/files/rohit.jpg" alt="">
    <h3 class='verified'>
    <img src=/files/verified.gif'>
    ${localStorage.getItem('name')}
    </h3>
    <h4 class='verified'>
    <img src=/files/hammer.gif'>
    ${localStorage.getItem('role')}</h4>
    <h4 class='verified'>
    <img src=/files/crown.gif'>
    ${localStorage.getItem('badge')}
    </h4>
    <button class="bx bx-log-out red" onclick="logout()"> Logout</button>
    <button class="bx bx-cog" onclick="apanel()"> Admin Panel</button>
    `)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
  else if (username == 'Lakshmi' && password == 'svmchub0') {
    swal({
      title: "Welcome Lakshmi Mam",
      text: "Dear Teacher, Please wait while we log you in.",
      imageUrl: "/files/logoo.png"
    });
    localStorage.setItem('name', "Lakshmi")
    localStorage.setItem('role', "Teacher")
    localStorage.setItem('badge', "Admin")
    localStorage.setItem('loggedin', 'yes')
    localStorage.setItem('admno', '0000')
    localStorage.setItem('frname', " ")
    localStorage.setItem('mrname', " ")
    localStorage.setItem('verified',true)
    localStorage.setItem('info',
    `
    <h3>Profile</h3>
      <img src="svmassembly.tk/files/profile.gif" alt="">
    <h3 class='verified'>
    <img src=/files/verified.gif'>
    ${localStorage.getItem('name')}
    </h3>
    <h4 class='verified'>
    <img src=/files/teacher.gif'>
    ${localStorage.getItem('role')}</h4>
    <h4 class='verified'>
    <img src=/files/hammer.gif'>
    ${localStorage.getItem('badge')}</h4>
    <button class="bx bx-log-out red" onclick="logout()"> Logout</button>
    <button class="bx bx-cog" onclick="apanel()"> Admin Panel</button>
    `)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
  else {
    swal({
      title: "Welcome "+username,
      text: "Dear "+username+", Please wait while we are logging you in.",
      imageUrl: "/files/student.gif"
    });
    localStorage.setItem('name', username)
    localStorage.setItem('role', 'User')
    localStorage.setItem('badge','Student')
    localStorage.setItem('loggedin','yes')
    localStorage.setItem('admno', admno)
    localStorage.setItem('frname', frname)
    localStorage.setItem('mrname', mrname)
    localStorage.setItem('verified', false)
    localStorage.setItem('info',`
    <h3>Profile</h3>
      <img src="svmassembly.tk/files/profile.gif" alt="">
    <h3 class='verified'>
    ${localStorage.getItem('name')}
    </h3>
    <h4 class='verified'>
    <img src="svmassembly.tk/files/student.gif" alt="">
     ${localStorage.getItem('role')}</h4>
    <h4 class='verified'>
    <img src="svmassembly.tk/files/id-badge.gif" alt="">
    ${localStorage.getItem('badge')}
    </h4>
    <button class="bx bx-log-out red" onclick="logout()"> Logout</button>
    `)
    setTimeout(() => {
      window.location.replace('home.html')
    }, 1400);
  }
}
if(localStorage.getItem('loggedin') == 'yes') {
  window.location.replace('home.html')
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
        imageUrl: "/files/tick.gif"
      });
    }
    });
}
