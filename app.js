const Reader = require("./class/Reader");
const Processor = require("./class/Processor");
const Table = require("./class/Table");
const HtmlParser = require("./class/HtmlParser");

const reader = new Reader();

async function main() {
  const data = await reader.Read("./users.csv");
  const processedData = Processor.Process(data);

  const users = new Table(processedData);

let html = await HtmlParser.Parse(users)

console.log(html)

}

main();
