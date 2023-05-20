//Gerador de CSV
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

class CSVGenerator {
  constructor(filename) {
    this.filename = filename;
    this.data = [];
  }

  addRow(rowData) {
    this.data.push(rowData);
  }

  generateCSV() {
    const csvWriter = createCsvWriter({
      path: this.filename,
      header: this.getHeader(),
    });

    return csvWriter
      .writeRecords(this.data)
      .then(() => console.log("Arquivo CSV gerado com sucesso."))
      .catch((err) => console.error("Erro ao gerar o arquivo CSV:", err));
  }

  getHeader() {
    return [
      { id: "Nome", title: "Nome" },
      { id: "Cidade", title: "Cidade" },
      { id: "Sexo", title: "Sexo" },
      { id: "Escolaridade", title: "Escolaridade" },
    ];
  }
}

module.exports = CSVGenerator;

{
  // Exemplo de uso da classe

  // Cria uma instância do gerador CSV
  const csvGenerator = new CSVGenerator("dados.csv");

  // Adicionalinhas de dados aleatórios
  const cities = [
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Salvador",
    "Recife",
    "Fortaleza",
    "Brasília",
    "Curitiba",
    "Porto Alegre",
    "Manaus",
  ];
  const genders = ["Masculino", "Feminino"];
  const educationLevels = ["Ensino Fundamental","Ensino Médio", "Ensino Superior"];

  for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    const randomEducationLevel =
      educationLevels[Math.floor(Math.random() * educationLevels.length)];

    csvGenerator.addRow({
      Nome: `Pessoa ${i + 1}`,
      Cidade: cities[randomIndex],
      Sexo: randomGender,
      Escolaridade: randomEducationLevel,
    });
  }

  // Gera o arquivo CSV
  csvGenerator.generateCSV();
}
