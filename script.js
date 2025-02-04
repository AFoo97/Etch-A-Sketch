document.addEventListener('DOMContentLoaded', () => {
    // Get grid container
    const gridContainer = document.getElementById('grid');
  
    // Create 16 x 16 grid
    for (let i = 0; i < 16 * 16; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gridContainer.appendChild(cell);
    }
  
    // Add hover effect for cell color change
    gridContainer.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('cell')) {
        event.target.style.backgroundColor = '#333';
      }
    });
  });