import * as fs from 'fs';
const csvFilePath = '../../../node-postgres/data/DP.csv';

export async function seed(knex) {
  await knex('delegacias').del()
  console.log("Inserindo dados na tabela delegacia.")
  await fs.promises.readFile(csvFilePath, 'utf-8')
    .then(data => {
      const rows = data.split('\n').map(row => row.split(',')).slice(1)

      const seeds = rows.map(row => {
        if (row[0] && row[1] && row[2]) {
          return knex('delegacias').insert({
            codDP: Number(row[0]),
            nome: String(row[1]),
            endereco: String(row[2])
          });
        }
      });

      return Promise.all(seeds);

    })
}
