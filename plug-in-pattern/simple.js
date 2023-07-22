class Calculator {
  curVal = 0;

  setVal(newVal) {
    this.curVal = newVal;
    console.log("value set!!");
  }

  getVal() {
    return this.curVal;
  }

  add(val) {
    this.setVal(this.curVal + val);
  }

  sub(val) {
    this.setVal(this.curVal - val);
  }

  //plugin
  register(plugin) {
    const { name, exec } = plugin;
    this[name] = exec;
  }
}

const cal = new Calculator();

cal.setVal(10);
console.log(cal.getVal());
cal.add(10);
console.log(cal.getVal());
cal.sub(10);
console.log(cal.getVal());
// exec is called directly and finally test plug is done
// cal will have strucure like this
// Calculator { curVal: 10, test: undefined }
// const testPlug = {
//   name: "test",
//   exec: (function () {
//     console.log("executed");
//   })(),
// };
// cal.register(testPlug);
// console.log(cal)

//error throw
//cal.multiple(10);
//error function does not allow this operator
const pluginMultiple = {
  name: "multiple",
  exec: function (val) {
    this.setVal(this.curVal * val);
  },
};

cal.register(pluginMultiple);

cal.multiple(10);
console.log(cal.getVal());

//attack
const pluginAttackVal = {
  name: "valChange",
  exec: function (val) {
    this.curVal = val;
  },
};

cal.register(pluginAttackVal);
cal.valChange(9);
console.log(cal.getVal());
cal.add(10);
console.log(cal.getVal());
// function change
const pluginAttackFunc = {
  name: "funcChange",
  exec: function (val) {
    this.add = function (val) {
      console.log("add function corrupted");
    };
  },
};

cal.register(pluginAttackFunc);
cal.funcChange();
cal.add(10);
console.log(cal.getVal());
