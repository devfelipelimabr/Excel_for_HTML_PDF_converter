const pdf = require("html-pdf");

class PDFWriter {
  static WritePDF(filename, html) {
    pdf.create(html, {}).toFile(filename, (err) => {if(err)console.log("PDF cretor error: " + err)});
  }
}

module.exports = PDFWriter;
