function replaceName() {
    let yourname = prompt("Hello ARMY, may I know your name?", "")
    document.getElementById("yourname").innerHTML = yourname 
} 
replaceName();

function formValidation(){
    let nameInput = document.getElementById('name-input').value;
    if(nameInput == null || nameInput == ""){
        alert("Field cannot be blank");
    } else{
    console.log(nameInput);
    }
}