"use strict";

void function () {
  const objForFreezing = {
    fruits: {
      banana: 3,
      apple: 5,
      dragonFruit: 2,
    },
    vegetables: {
      cucumber: 3,
      tomato: 4,
      potato: 8,
    },
    milkProduct: {
      milk: 500,
      yogurt: 300,
      cheese: {
        one: 1,
        two: 2,
        three: 3,
      }
    },
    salt: 100,
    sugar: "no",
  };

  function freezeFunction(objForFreezing) {
    // Object.freeze(objForFreezing);

    const objValuesArray = Object.values(objForFreezing);

    step2(objValuesArray)

  function step2 (objValuesArray) {

      let values = null;

    for (let key in objValuesArray) {
      const abc = Object.values(objValuesArray[key]);

      for (let key2 in abc) {

        if (typeof abc[key2] === "object") {
          console.log("it is object")
        }
      }


    }

  }


  }

  freezeFunction(objForFreezing);

  // objForFreezing.milkProduct.cheese = 300;
  // objForFreezing.sugar = "2 spoons";
}();
