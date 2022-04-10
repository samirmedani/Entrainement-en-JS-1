
document.getElementById("btn").addEventListener("click", input);



function input(e) {
    const firstname = document.getElementById("firstname").value; 
    const name = document.getElementById("name").value; 
    const mail = document.getElementById("mail").value; 
    const message = document.getElementById("message").value; 
    console.log(firstname, name, mail, message);
}



