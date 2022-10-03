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
      cheese: 400,
    },
    salt: 100,
    sugar: "no",
  };

  function freezeFunction(objForFreezing) {
    Object.freeze(objForFreezing);

    const objValuesArray = Object.values(objForFreezing);

    for (let key in objValuesArray) {
      Object.freeze(objValuesArray[key]);
    }
  }

  freezeFunction(objForFreezing);

  objForFreezing.milkProduct.cheese = 300;
  objForFreezing.sugar = "2 spoons";
}();
