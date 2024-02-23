let username;

// getElementById e textContent

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Oops, ainda não programaram isso =P`;
}