const Reader = require("./class/Reader");
const Writer = require("./class/Writer");
const Processor = require("./class/Processor");
const Table = require("./class/Table");
const HtmlParser = require("./class/HtmlParser");

const reader = new Reader();
const writer = new Writer()

async function main() {
  const data = await reader.Read("./users.csv");
  const processedData = Processor.Process(data);

  const users = new Table(processedData);

  let html = await HtmlParser.Parse(users);

  writer.Write("generatedHtmlTable.html",html)
}

main();
