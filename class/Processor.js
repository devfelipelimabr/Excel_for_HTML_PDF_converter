//Data processor

class Processor {
  static Process(data) {
    let a = data.split("\r\n");
    var rows = [];
    a.forEach((row) => {
      let arr = row.split(",");
      rows.push(arr);
    });
    return rows;
  }
}

module.exports = Processor;
