const myObj = { x: "x", y: "y" };

// Use existing object, simply set value as is given
const proxy = new Proxy(myObj, {
  set: (obj, prop, value) => {
    obj[prop] = value;
    return true;
  },
});


