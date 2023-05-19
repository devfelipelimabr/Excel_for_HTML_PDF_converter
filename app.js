const Reader = require("./Reader");

let leitor = new Reader();

async function main() {
  let data = await leitor.Read("./users.csv");
  console.log(data);
}

main();
