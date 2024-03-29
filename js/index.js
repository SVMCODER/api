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

// Function to check if a username already exists in the database
async function checkUsernameExists(username) {
  const snapshot = await firebase.database().ref("usernames").child(username).once("value");
  return snapshot.exists();
}

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    // User is signed in
    const user = userCredential.user;
    console.log("User logged in:", user);
    window.location.replace("home.html");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Login error:", errorCode, errorMessage);

    if (errorCode === "auth/user-not-found") {
      const usernameInput = await Swal.fire({
        title: "What's your name?",
        input: "text",
        showCancelButton: false,
        confirmButtonText: "Continue",
        showLoaderOnConfirm: true,
        preConfirm: async (username) => {
          // Check if the username already exists
          const exists = await checkUsernameExists(username);
          

          try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            console.log("User signed up:", user);
            await user.updateProfile({
              displayName: username
            });

            // Store the username in the Firebase database for future checks
            await firebase.database().ref("usernames").child(username).set(true);

            return username;
          } catch (error) {
            console.error("Sign up error:", error);
            Swal.showValidationMessage(`Sign up failed: ${error.message}`);
            return false;
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      });

      if (usernameInput.isConfirmed) {
        const username = usernameInput.value;
        window.location.replace("home.html");
      }
    } else {
      Swal.fire({
        title: "Invalid Details",
        showConfirmButton: false
      });
    }
  }
}
  
