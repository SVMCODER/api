
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
    Swal.fire({
      title: "Creating...",
      showConfirmButton: false
    })
      setTimeout(() => {
        Swal.fire({
          title: "Created",
          showConfirmButton: false
        })
        setTimeout(() => {
          window.location.replace('codeaio.html')
        }, 200);
      }, 700);
    }
}

