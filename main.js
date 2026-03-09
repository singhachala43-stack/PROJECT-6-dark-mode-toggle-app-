const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}
else{
localStorage.setItem("theme","light");
}

});

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
}