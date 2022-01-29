// BEM OBJECT
var bem = {
  // Initial properties, placeholders
  result: "",
  blockInput: "",
  elementInput: "",
  modifierInput: "",

  // method for the block class
  block: function (input) {
    this.blockInput = input;
    if (input) {
      this.result = this.blockInput;
    } else {
      this.result = "";
    }
    return this;
  },

  // method for the element class
  element: function (input) {
    this.elementInput = input;
    if (input) {
      this.result = "__" + this.elementInput;
    } else {
      this.result = "";
    }

    return this;
  },
  // method for the modifier class
  modifier: function (input) {
    this.modifierInput = input;
    if (input) {
      this.result = "--" + this.modifierInput;
    } else {
      this.result = "";
    }
    return this;
  },

  // method to build a fully qualified class
  build: function () {
    if (this.block(this.blockInput).result === "") {
      return (this.result = "block is required!");
    } else {
      this.result =
        this.block(this.blockInput).result +
        this.element(this.elementInput).result +
        this.modifier(this.modifierInput).result;
    }
    return this;
  },
};

// Sample run
bem.block("card").element("list").modifier("active").build();
console.log(bem.result);
