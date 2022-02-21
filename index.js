let element = document.getElementById("display");

console.log(element);

let Singleton = (() => {
  let instance;

  function makeInstance() {
    let obj = new Object({
      animal1: "dog",
      animal2: "cat",
      animal3: "fish",
    });
    return obj;
  }

  return {
    getInstance: () => {
      if (!instance) instance = makeInstance();

      return instance;
    },
  };
})();

function run() {
  let inst1 = Singleton.getInstance();
  let inst2 = Singleton.getInstance();

  console.log(
    `Is Instance 1 equal to Instance 2? ${inst1 === inst2 ? "Yes" : "No"}`
  );

  element.innerText = `Instance 1: ${JSON.stringify(
    inst1
  )} Instance 2: ${JSON.stringify(
    inst2
  )} \n Is Instance 1 equal to Instance 2? ${inst1 === inst2 ? "Yes" : "No"}`;

  inst1.animal1 = "plane";
  inst1.animal2 = "computer";

  console.table(inst1);
  console.table(inst2);
}

run();
