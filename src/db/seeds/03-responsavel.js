import * as fs from 'fs';
import reader from 'xlsx'

const xlsxFilePath = '../../../node-postgres/data/ResponsavelDP.xlsx';

export async function seed(knex) {
  await knex('responsavel').del()

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
    console.log(row)
    return knex('responsavel').insert({
      codDP: row.codDP,
      nome: row.delegado,
    });

  });


  return Promise.all(seeds);
}
