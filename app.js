// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const phonenumber = documet.getElementById("phonenumber");
// const email = document.getElementById("email");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     validateInputs();
// })

// function validateInputs(){
//     const name = name.valu.trim();
//     const phonenumber = phonenumber.valu.trim();
//     const email = email.valu.trim();
// if(name===" "){
//     seterror(name,"user name is require")
// }
// else{
//     setsucces(name)
// }

// if(email===" "){
//     seterror(email,"user email is require")
// }
// else if(!validateEmail(email)){
//     seterror(email,"enter a valid email")
// }
// else{
//     setsucces(email)
// }

// if(phonenumber===" "){
//     seterror(phonenumber,"user number is require")
// }
// else if(phonenumber.length==10){
//     seterror(phonenumber,"enter ten numbers")
// }
// else if(phonenumber===NaN){
//     seterror(phonenumber,"enter a number")
// }
// else{
//     setsucces(phonenumber)
// }
// }


// function seterror(element,message){
//     const inputGroup = element.parentElement;
//     const errerElement = inputGroup.queryselector(".error")
    
//     errorElement.innerText = message;
//     inputGroup.classList.add("error")
//     inputGroup.classList.remove("success")
// }

// function setsucces(element){
//     const inputGroup = element.parentElement;
//     const errerElement = inputGroup.queryselector(".error")
    
//     errorElement.innerText = " ";
//     inputGroup.classList.add("success")
//     inputGroup.classList.remove("error")
// }

// const validateEmail = (email) => {
//     return String(email)
//     .toLowerCase()
//     .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
// };


