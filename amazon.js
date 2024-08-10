document.addEventListener("DOMContentLoaded", function() {
    var images = [ "hero_image.jpg", "hero_image3.jpg", "hero_image4.jpg", "hero_image5.jpg", ]; // Array of image URLs
    var currentIndex = 0;
    var imageElement = document.getElementById("image");
  
    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
    }
  
    setInterval(changeImage, 3000); // Change image every 3 seconds
  });
  
  let seclast = document.querySelector("seclast")
  let container = document.querySelector("container");

  container.after(seclast);

  //    // Trigger a click event on page load
  //    window.onload = function() {
  //     // Find the sign-in button and trigger a click event
  //     var signInButton = document.getElementById("signInButton");
  //     if (signInButton) {
  //         signInButton.click();
  //     }
  // };




  