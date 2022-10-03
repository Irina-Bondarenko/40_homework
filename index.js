"use strict";

void (function () {
  let user = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3,
        },
      },
    },
  };

  function freezeFunction(objForFreezing) {

    for (let key in objForFreezing) {
      if (typeof objForFreezing[key] === "object") {
        Object.freeze(objForFreezing[key]);
        return freezeFunction(objForFreezing[key]);
      }
    }
  }

  freezeFunction(user);

  // user.data = 300;
  // user.data.d = 300;
  // user.data.d.d1 = 300;
  // user.data.d.c2 = "2 spoons";
})();
