const commenterName = document.getElementById("commenterName");
const commenterEmail = document.getElementById("commenterEmail");
const commenterComment = document.getElementById("commenterComment");

function submitData(){
    if(!(commenterName.value)){
        alert("Name Cannot be empty!");
        return;
    }

    if(!(commenterEmail.value)){
        alert("Email Cannot be empty!");
        return;
    }

    if(!(commenterComment.value)){
        alert("Comment Cannot be empty!");
        return;
    }

    alert("Your Comment Successfully added!");

    commenterName.value = "";
    commenterEmail.value = "";
    commenterComment.value = "";
}
