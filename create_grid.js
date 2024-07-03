document.addEventListener("DOMContentLoaded", function () {
  const grid_container = document.getElementById("grid_container");
  let isMouseDown = false; // Flag to track mouse state

  const grid_button = document.createElement("button");
  grid_button.innerHTML = "Create Grid";
  grid_button.className = "grid_button";
  document.body.appendChild(grid_button);

  grid_button.onclick = function () {
    let size = prompt("Enter the number of rows and columns(<=64):");
    if (size > 64) {
      alert("Size should be less than 64");
      size = 16;
    }
    if (size) {
      grid_container.innerHTML = "";
      for (let i = 0; i < size; i++) {
        const grid_row = document.createElement("div");
        grid_row.className = "grid_row";
        for (let j = 0; j < size; j++) {
          const grid_cell = document.createElement("div");
          grid_cell.className = "grid_cell";
          grid_cell.innerHTML = " ";
          // Attach click event listener to each cell
          grid_cell.addEventListener("click", function (e) {
            e.target.style.backgroundColor = "black"; // Change color on click
          });
          grid_row.appendChild(grid_cell);
        }
        grid_container.appendChild(grid_row);
      }
    }
  };

  if (grid_container) {
    for (let i = 0; i < 16; i++) {
      const grid_row = document.createElement("div");
      grid_row.className = "grid_row";
      for (let j = 0; j < 16; j++) {
        const grid_cell = document.createElement("div");
        grid_cell.className = "grid_cell";
        grid_cell.innerHTML = " ";
        // Attach event listeners to each cell
        grid_cell.addEventListener("mouseover", function (e) {
          if (isMouseDown) {
            // Only change color if mouse is down
            e.target.style.backgroundColor = "black";
          }
        });
        // Attach click event listener to each cell
        grid_cell.addEventListener("click", function (e) {
          e.target.style.backgroundColor = "black"; // Change color on click
        });
        grid_row.appendChild(grid_cell);
      }
      grid_container.appendChild(grid_row);
    }

    // Set isMouseDown to true when mouse is pressed down
    grid_container.addEventListener("mousedown", function (e) {
      isMouseDown = true;
      // Prevent default behavior to avoid selecting text on drag
      e.preventDefault();
    });

    // Set isMouseDown to false when mouse is released
    document.addEventListener("mouseup", function () {
      isMouseDown = false;
    });
  }
});
