// When the user scrolls down, adjust the navbar's transparency
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.padding = "10px 0"; // Adjust padding when scrolled
      navbar.style.backgroundColor = "rgba(152, 115, 172, 0.8)"; // Add transparency (0.8 opacity)
      document.getElementById("logo").style.fontSize = "25px"; // Shrink logo size when scrolled
    } else {
      navbar.style.padding = "20px 0"; // Restore original padding
      navbar.style.backgroundColor = "#9873AC"; // Solid color when at the top
      document.getElementById("logo").style.fontSize = "35px"; // Restore original logo size
    }
  }
  