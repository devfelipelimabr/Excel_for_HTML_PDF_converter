//Data processor

class Processor {
  static Process(data) {
    let rawRows = data.split("\r\n");
    let rows = [];
    rawRows.forEach((row) => {
      let arr = row.split(",");
      rows.push(arr);
    });
    return rows;
  }
}

module.exports = Processor;
