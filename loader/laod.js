// Function to create the loading screen with a random image and apply effects
function showLoadingScreen() {
  // Array of image URLs
  const imageUrls = [
    "https://raw.githubusercontent.com/musaalif6969/shellshock.io-Script/main/img/intro-d.png",
    "https://raw.githubusercontent.com/musaalif6969/shellshock.io-Script/main/img/intro.png",
  ];

  // Randomly select an image from the array
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const selectedImageUrl = imageUrls[randomIndex];

  // Create a div element for the loading screen
  const loadingDiv = document.createElement("div");
  loadingDiv.style.position = "fixed";
  loadingDiv.style.top = "0";
  loadingDiv.style.left = "0";
  loadingDiv.style.width = "100%";
  loadingDiv.style.height = "100%";
  loadingDiv.style.backgroundImage = `url(${selectedImageUrl})`;
  loadingDiv.style.backgroundRepeat = "no-repeat";
  loadingDiv.style.backgroundSize = "cover";
  loadingDiv.style.opacity = "1";
  loadingDiv.style.zIndex = "9999";
  loadingDiv.style.transition = "opacity 0.8s, filter 1.2s";

  // Append the loading screen to the body
  document.body.appendChild(loadingDiv);

  // Function to apply blur and glow effects after 3.2 seconds
  function applyEffects() {
    loadingDiv.style.filter = "blur(8px) drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))";
  }

  // Function to fade out the loading screen after 4 seconds
  function fadeOutLoadingScreen() {
    loadingDiv.style.opacity = "0";
    setTimeout(() => {
      // Remove the loading screen from the body once it's faded out
      document.body.removeChild(loadingDiv);
    }, 800); // 800ms matches the duration of the opacity transition
  }

  // Apply effects after 3.2 seconds
  setTimeout(applyEffects, 3200);

  // Fade out the loading screen after 4 seconds
  setTimeout(fadeOutLoadingScreen, 4000);
}

// Call the function to show the loading screen with a random image and apply effects
showLoadingScreen();
