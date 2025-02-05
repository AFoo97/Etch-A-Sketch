document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid');
    const resetButton = document.getElementById('reset-button');
  
    // Function to generate a random RGB color
    function getRandomColor() {
      const r = Math.floor(Math.random() * 256); // Random red value (0-255)
      const g = Math.floor(Math.random() * 256); // Random green value (0-255)
      const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    // Function to darken a color by 10%
    function darkenColor(color) {
      // Extract RGB values from the color string
      const [r, g, b] = color.match(/\d+/g).map(Number);
  
      // Darken each channel by 10%
      const newR = Math.max(0, r - 25.5); // 10% of 255 is 25.5
      const newG = Math.max(0, g - 25.5);
      const newB = Math.max(0, b - 25.5);
  
      return `rgb(${newR}, ${newG}, ${newB})`;
    }
  
    // Function to create a grid
    function createGrid(squaresPerSide) {
        // Clear the existing grid
        gridContainer.innerHTML = '';
  
        // Set the grid template columns and rows
        gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
    
        // Create the grid cells
        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
  
        // Track the number of interactions and the current color
        let interactionCount = 0;
        let currentColor = '';
  
        // Add hover effect to change cell color
        cell.addEventListener('mouseover', () => {
          if (interactionCount === 0) {
            // First interaction: assign a random color
            currentColor = getRandomColor();
            cell.style.backgroundColor = currentColor;
          } else if (interactionCount < 10) {
            // Subsequent interactions: darken the color by 10%
            currentColor = darkenColor(currentColor);
            cell.style.backgroundColor = currentColor;
          }
          interactionCount++;
        });
  
        gridContainer.appendChild(cell);
      }
    }
  
    // Initial grid creation (16x16)
    createGrid(16);
  
    // Button click event to change grid size
    resetButton.addEventListener('click', () => {
      let userInput = prompt('Enter the number of squares per side (max 100):');
  
      // Validate user input
      const squaresPerSide = parseInt(userInput);
      if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
      }
  
      // Create a new grid with the user's input
      createGrid(squaresPerSide);
    });
});

