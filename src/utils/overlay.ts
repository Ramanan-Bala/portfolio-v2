import { animate } from "framer-motion";
import { random } from "./functions";
// Cell class definition
class Cell {
  DOM = {
    el: null,
  };
  row = 0;
  column = 0;

  constructor(row: number, column: number) {
    let div = document.createElement("div");
    div.classList.add("cell");
    div.style.setProperty("willChange", "opacity, transform");
    this.DOM.el = div;
    this.row = row;
    this.column = column;
  }
}

// Overlay class definition
export class Overlay {
  DOM = {
    el: null,
  };
  // cells array
  cells = [];
  // options
  options = {
    // Number of cell rows
    rows: 10,
    // Number of cell columns
    columns: 10,
  };

  // Constructor accepts a DOM element representing the overlay
  constructor(DOM_el, customOptions) {
    this.DOM.el = DOM_el;

    // Merge default options with provided options
    this.options = Object.assign({}, this.options, customOptions);

    // Set the value of the CSS variable
    this.DOM.el.style.setProperty("--columns", this.options.columns);

    // Create an array of all cells
    this.cells = new Array(this.options.rows);
    for (let i = 0; i < this.options.rows; ++i) {
      this.cells[i] = new Array(this.options.columns);
    }

    // Fill the array with values
    for (let i = 0; i < this.options.rows; ++i) {
      for (let j = 0; j < this.options.columns; ++j) {
        const cell = new Cell(i, j);
        this.cells[i][j] = cell;
        this.DOM.el.appendChild(cell.DOM.el);
      }
    }
  }

  // Show the overlay and animate the cells in
  show(customConfig = {}) {
    // Default animation configuration
    const defaultConfig: any = {
      // Specify the cell's transform origin
      transformOrigin: "50% 50%",
      // Duration for each cell animation
      duration: 0.5,
      // Ease for each cell animation
      ease: "none",
      // Stagger object
      stagger: {
        grid: [this.options.rows, this.options.columns],
        from: 0,
        each: 0.05,
        ease: "none",
      },
    };
    const config = Object.assign({}, defaultConfig, customConfig);

    animate(this.DOM.el, { opacity: 1 }, { duration: 0.5 });

    const animationConfig = {
      scale: [0, 1.03],
      opacity: [0, 1],
      transformOrigin: config.transformOrigin,
    };

    animate(".cell", animationConfig, {
      duration: config.duration,
      ease: config.ease,
      delay: (index) => 0.03 * (this.cells.flat()[index].row + random(0, 5)),
    });
  }
  // Hide the overlay and animate the cells out
  hide(customConfig = {}) {
    // Default animation configuration
    const defaultConfig: any = {
      transformOrigin: "50% 50%",
      // Duration for each cell animation
      duration: 0.5,
      // Ease for each cell animation
      ease: "none",
      // Stagger object
      stagger: {
        grid: [this.options.rows, this.options.columns],
        from: 0,
        each: 0.05,
        ease: "none",
      },
      delay: 0,
    };
    const config = Object.assign({}, defaultConfig, customConfig);
    const animationConfig = {
      scale: 0,
      opacity: 0,
      transformOrigin: config.transformOrigin,
    };

    animate(".cell", animationConfig, {
      duration: config.duration,
      ease: config.ease,
      delay: (index) => 0.03 * (this.cells.flat()[index].row + random(0, 5)),
    });
  }
}
