// Function to handle the class toggle based on screen width
function handleResize() {
  const element = document.querySelector(".col-12.col-md-8");
  if (window.innerWidth < 768) {
    // Bootstrap's "md" breakpoint is 768px
    element.classList.remove("overflow-auto");
  } else {
    element.classList.add("overflow-auto");
  }
}

// Add event listener for window resize
window.addEventListener("resize", handleResize);

// Initial check on page load
handleResize();
