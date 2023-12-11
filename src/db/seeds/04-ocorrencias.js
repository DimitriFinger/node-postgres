import reader from 'xlsx'

const xlsxFilePath = '../../../node-postgres/data/ocorrencias.xlsx';

export async function seed(knex) {
  await knex('ocorrencias').del()

  const dataFile = reader.readFile(xlsxFilePath)

  let data = []

  const sheets = dataFile.SheetNames
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(
      dataFile.Sheets[dataFile.SheetNames[i]])
    temp.forEach((res) => {
      data.push(res)
    })
  }
  const seeds = data.map(row => {
    return knex('ocorrencias').insert({
      codOcorrencia: row.idRegistro,
      codDP: row.codDP,
      codIBGE: row.codIBGE,
      ano: row.ano,
      mes: row.mes,
      ocorrencia: row.ocorrencia,
      quantidade: row.qtde

    });

  });

  // idRegistro: 98891,
  // codDP: 109,
  // codIBGE: 3305406,
  // ano: 2020,
  // mes: 5,
  // ocorrencia: 'lesao_corp_dolosa',
  // qtde: 4



  return Promise.all(seeds);
}
