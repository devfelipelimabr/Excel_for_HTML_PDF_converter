const Reader = require("./class/Reader");
const Processor = require("./class/Processor")

let leitor = new Reader();

async function main() {
  let data = await leitor.Read("./users.csv");
  let processedData = Processor.Process(data)
  console.log(processedData)
}

main();

