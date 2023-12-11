import * as fs from 'fs';
const csvFilePath = '../../../node-postgres/data/Municipio.csv';

export async function seed(knex) {
  await knex('municipios').del()

  await fs.promises.readFile(csvFilePath, 'utf-8')
    .then(data => {
      const rows = data.split('\n').map(row => row.split(',')).slice(1)

      const seeds = rows.map(row => {
        if (row[0] && row[1] && row[2]) {
          return knex('municipios').insert({
            codIBGE: Number(row[0]), // Replace with the correct index based on your CSV structure
            municipio: String(row[1]),
            regiao: String(row[2])
          });
        }
      });

      return Promise.all(seeds);

    })
}
