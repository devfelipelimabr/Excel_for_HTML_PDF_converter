const fs = require("fs");

class Writer {
  constructor() {
    this.writer = fs.writeFileSync;
  }

  Write(filepath, content, typeEncode = "utf-8") {
    try {
      this.writer(filepath, content, typeEncode);
      return true;
    } catch (error) {
      console.error(`Erro ao escrever o arquivo: ${error}`);
      return false;
    }
  }
}

module.exports = Writer;
