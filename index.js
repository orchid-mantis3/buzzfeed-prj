
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.padding = "10px 0"; 
    navbar.style.backgroundColor = "rgba(152, 115, 172, 0.8)"; 
    document.getElementById("logo").style.fontSize = "25px"; 
  } else {
    navbar.style.padding = "20px 0"; 
    navbar.style.backgroundColor = "#9873AC"; 
    document.getElementById("logo").style.fontSize = "35px"; 
  }
}
