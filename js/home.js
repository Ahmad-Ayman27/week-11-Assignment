const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
const button = document.querySelector("button")
if (currentUser){
    document.querySelector("p").innerHTML = "welcome "+currentUser.name
}
button.addEventListener("click",function(){
    window.location.href = "index.html";

})
