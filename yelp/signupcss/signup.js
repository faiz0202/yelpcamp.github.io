
function validateForm(){
    let x = document.forms["form"]["username"]
    if (x ==""){
        alert("name cannot be empty");
        return false;
    }
    let y = document.forms["form"]["password"]
    if (y ==""){
        alert("password cannot be empty");
        return false;
    }
    
}