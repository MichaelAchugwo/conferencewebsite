  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAnRKzhSpD_7Gu2j718rf0-YOaB41LelMg",
    authDomain: "conference-websi-1689457676650.firebaseapp.com",
    projectId: "conference-websi-1689457676650",
    storageBucket: "conference-websi-1689457676650.appspot.com",
    messagingSenderId: "1067926405374",
    appId: "1:1067926405374:web:3edfb713725fa302ea65af",
    measurementId: "G-MSTP16BHGQ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();


let register = document.getElementById("register");

function insertUserData(fullName, emailAddress, phoneNumber, houseAddress, companyName){ 
    var usersRef = database.ref("Users");
    var newUserRef = usersRef.push();
    newUserRef.set({
      full_name: fullName,
      email: emailAddress,
      phone: phoneNumber,
      address: houseAddress,
      company: companyName});
    
    console.log("Data inserted successfully!");
};

function createNewNode(nodeName, data) {
  var database = firebase.database();
  var nodeRef = database.ref(nodeName);

  // Use the set() method to create the new node with data
  nodeRef.set(data, function(error) {
    if (error) {
      console.error("Error creating new node:", error);
    } else {
      console.log("New node created successfully!");
    }
  });
}

var newNodeName = fullName;
var newData = {
  product1: {
    name: "New Product 1",
    price: 49.99
  },
  product2: {
    name: "New Product 2",
    price: 59.99
  }
};

createNewNode(newNodeName, newData);


register.addEventListener('click', insertUserData(fullName, emailAddress, phoneNumber, houseAddress, companyName));
  
//   register.innerText = "Saveing....";
//   register.setAttribute("disabled", true);
//   let res = await database.from("Users").insert({
//     full_name: fullName,
//     email: emailAddress,
//     phone: phoneNumber,
//     address: houseAddress,
//     company: companyName
//   });
//   if (res) {
//     alert("Student Add Successfully");
//     register.innerText = "Save";
//     register.setAttribute("disabled", false);
//     fullName= "";
//     emailAddress= "";
//     phoneNumber= "";
//     houseAddress = "";
//     companyName = "";

//   } else {
//     alert("Student Not Add Successfully");
//     register.innerText = "Save";
//     register.setAttribute("disabled", false);
//   }
// });
