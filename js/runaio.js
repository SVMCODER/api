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

function saveaio() {
  pname = localStorage.getItem('pname')
  fname = localStorage.getItem('fname')
  code = localStorage.getItem('codeaio')
  if (code.length != 0) {
    pcountj = Number(localStorage.getItem('pcount'))
ad = pcountj+1
localStorage.setItem('pcount',ad)
    localStorage.setItem('database', localStorage.getItem('database')+`\n--------------\nProject Name: ${pname}\nFile Name: ${fname}\nCode: ${code = localStorage.getItem('codeaio')}\n`.replace('null',''))
    var firebaseConfig = {
      apiKey: "AIzaSyCOA_2bf_b1o1nXSHZO5Re5DjSD66Pa6MY",
      authDomain: "https://raona0-default-rtdb.firebaseio.com",
      projectId: "raona0",
      storageBucket: "raona0.appspot.com",
      messagingSenderId: "797719983777",
      appId: "1:797719983777:web:d7ffca1316891b51ec62e0"
    };
    // JavaScript
    firebase.initializeApp(firebaseConfig);
    
        // Get a reference to the Firebase database
        const database = firebase.database();
        // Push data to Firebase
        const projectRef = database.ref('projects');
        const newProjectRef = projectRef.push();
        newProjectRef.set({
          code: code,
          fname: fname,
          pname: pname,
          name: localStorage.getItem('uid')
        })
          Swal.fire({
            title: "Saved",
            icon: "success",
            showConfirmButton: false
          })
      
      
      
  }
  else {
  Swal.fire({
    title: "File is empty",
    icon: "warning",
    showConfirmButton: false,
  })
}
}
function closep() {

  localStorage.removeItem('ed')
  localStorage.removeItem('pname')
  localStorage.removeItem('fname')
window.location.replace('config.html') 
}

