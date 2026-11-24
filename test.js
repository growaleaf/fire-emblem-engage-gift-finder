const UNITS = require("./data.js");

let pass = 0;
let fail = 0;

function assert(cond, msg) {
  if (cond) {
    pass++;
  } else {
    fail++;
    console.error("FAIL: " + msg);
  }
}

function findUnit(name) {
  return UNITS.find((u) => u.name === name);
}

assert(UNITS.length === 28, `unit count should be 28, got ${UNITS.length}`);

const alcryst = findUnit("Alcryst");
assert(!!alcryst, "Alcryst should exist");
assert(alcryst.loves.includes("Spirit Gem"), "Alcryst loves Spirit Gem");
assert(alcryst.likes.includes("Yogurt"), "Alcryst likes Yogurt");

const amber = findUnit("Amber");
assert(!!amber, "Amber should exist");
assert(amber.loves.includes("Yogurt"), "Amber loves Yogurt");
assert(amber.loves.includes("Spirit Gem"), "Amber loves Spirit Gem");
assert(amber.dislikes.includes("Cute Apron"), "Amber dislikes Cute Apron");

const yunaka = findUnit("Yunaka");
assert(!!yunaka, "Yunaka should exist");

for (const u of UNITS) {
  assert(typeof u.name === "string" && u.name.length > 0, `unit has a name: ${JSON.stringify(u)}`);
  assert(Array.isArray(u.loves) && Array.isArray(u.likes) && Array.isArray(u.dislikes),
    `unit ${u.name} has loves/likes/dislikes arrays`);
}

console.log(`${pass} passed, ${fail} failed`);
process.exit(fail > 0 ? 1 : 0);
