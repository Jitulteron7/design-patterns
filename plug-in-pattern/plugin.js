class CalculatorAdv {
  currentValue = 0;

  setValue(value) {
    this.currentValue = value;
    console.log(this.currentValue);
  }

  core = {
    plus: (currentVal, addend) => currentVal + addend,
    minus: (currentVal, subtrahend) => currentVal - subtrahend,
  };

  plugins = {};

  _press(buttonName, newVal) {
    const func = this.core[buttonName] || this.plugins[buttonName];
    this.setValue(func(this.currentValue, newVal));
  }

  register(plugin) {
    const { name, exec } = plugin;
    this.plugins[name] = exec;
  }
}

// Our Plugin
const squaredPlugin = {
  name: "squared",
  exec: function (currentValue) {
    return currentValue * currentValue;
  },
};
const cal = new CalculatorAdv();
cal.register(squaredPlugin);

// Using the calculator
cal.setValue(3); // => 3
cal._press("plus", 2); // => 5
cal._press("squared"); // => 25
cal._press("squared"); // => 625
cal.core.plus(10, 10);
