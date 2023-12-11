export function up(knex) {

    return (
        knex.schema.createTable('ocorrencias', table => {
            table.integer('codOcorrencia').unsigned().primary().index();
            table.integer('codDP').unsigned().references('delegacias.codDP');
            table.integer('codIBGE').unsigned().references('municipios.codIBGE');
            table.string('ano', 4).notNullable();
            table.string('mes', 2).notNullable();
            table.string('ocorrencia', 100).notNullable();
            table.integer('quantidade').notNullable();
        }).then(console.log("Tabela ocorrencias criada."))
    )
}


export function down(knex) {
    return knex.schema.dropTable('ocorrencias');
}