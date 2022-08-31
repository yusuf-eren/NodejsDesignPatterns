const obj = {
  name: "Yusuf",
  age: 20,
  city: "Istanbul",
  country: "TR",
};

const makeReactive = (obj, observer) => {
  return new Proxy(obj, {
    set(target, key, value) {
      observer({
        [key]: value,
      });
      return (target[key] = value);
    },
  });
};

const reactive = makeReactive(obj, (res) => console.log(res));
reactive.color = "Green";
reactive.age = 21;
