function visible(){
    document.getElementById('hidden').style.visibility = "visible";
    document.getElementById('hidden').style.position = "static";
}

function hide(){
    document.getElementById('hidden').style.visibility = "hidden";
    document.getElementById('hidden').style.position = "absolute";
}
// const fname = document.getElementById("fname");
// const lname = document.getElementById('lname');
// const email = document.getElementById('email');
// const address = document.getElementById('address');
// const city = document.getElementById('city');
// const postal = document.getElementById('postalcode');
// const question = document.getElementById('question');
// const comment = document.getElementById('comment');
// const order = document.getElementById('order-problem');
// const form = document.getElementById('WEB222-form');
// const errors = document.getElementById('errors');
// const errorMessage = [];

// function validateForm(){
//     clearErrors();
//     return validateNames() && validateEmail() && validateAddress() && validateCity() && validateStreet() && validatePC() && validateOrderNo();
// }

// function clearErrors(){
//     errors.innerHTML = "";
//     errorMessage = [];
// }

// function displayErrors(){
//     errors.innerHTML = errorMessage.join('<br>')
// }

// function validateNames() {
//     var valid = true;

//     if (fname.value[0] == 0 || !fname.value){
//         errorMessage.push('First name is required');
//         valid = false;
//     }
//     if (lname.value[0] == 0 || !lname.value){
//         errorMessage.push('Last name is required');
//         valid = false;
//     }
//     if (lname.value) {
//         errorMessage.push('Username must start with a letter!');
//         valid = false;
//     }
//     return valid;
// }

// function validateEmail() {
//     return true;
// }

// function validateAddress() {
//     return true;
// }

// function validateCity() {
//     return true;
// }

// function validateStreet() {
//     return true;
//  }

//  function validatePC() {
//     return true;
//  }
 
//  function validateOrderNo(){
//     return true;
//  }
