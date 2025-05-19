document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".icon-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'pressed' class from all buttons
      buttons.forEach(btn => btn.classList.remove("pressed"));

      // Add 'pressed' class to the clicked button
      button.classList.add("pressed");
    });
  });
});
function setActiveButton(buttonId) {
    // Reset all buttons
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Set the clicked one as active
    const button = document.getElementById(buttonId);
    button.classList.add('active');

    // Clear the container
    buttonContainer.innerHTML = "";

    // Show home projects only when home is active
    if (buttonId === "homeButton") {
        renderImportantProjects();
    } else {
        // You can load other content based on buttonId here
    }
}
if (buttonId === "homeButton") {
    renderImportantProjects();
} else if (buttonId === "statsButton") {
    // Show stats content
} else if (buttonId === "profileButton") {
    // Show profile content
} else if (buttonId === "teamButton") {
    // Show team content
}