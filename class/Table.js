//Constructor table

class Table {
  constructor(arr) {
    this.header = arr[0];
    arr.shift();
    this.rows = arr;
    this.totalColumns = arr[0].length
    this.totalRows = arr.length
  }

}

module.exports = Table;
