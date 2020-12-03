const deasync = require("deasync");
const util = require("util");

it("runs forever", () => {
  deasync(
    util.callbackify(() => new Promise((resolve) => setTimeout(resolve, 3000)))
  )();
});
