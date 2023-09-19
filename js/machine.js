function createmachine() {
    machine_name = document.getElementById('mname').value 
    proxy = document.getElementById('proxy').value
    if (machine_name.length < 1) {
        swal({
            title: "Please enter the name",
            text: "",
            imageUrl: ''
          });
    }
    else if (proxy) {
        swal({
            title: "Creating Machine",
            text: "Please wait...",
            imageUrl: 'files/loading.gif'
          });
          localStorage.setItem('commands', '0')
          localStorage.setItem('history', '<h3>History</h3>')
          localStorage.setItem('proxy', proxy)
          localStorage.setItem('mname', machine_name)
          setTimeout(() => {
            swal({
                title: "Done",
                text: "Please wait...",
                imageUrl: 'files/loading.gif'
              });
            window.location.replace('machine-area.html')
          }, 200);
    }
    else {
        swal({
            title: "Select Proxy",
            text: "",
            imageUrl: ''
          });
    }
}
