document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid');
    const resetButton = document.getElementById('reset-button');
  
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
        gridContainer.appendChild(cell);
      }
  
      // Add hover effect to change cell color
      gridContainer.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('cell')) {
          event.target.style.backgroundColor = '#333';
        }
      });
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

