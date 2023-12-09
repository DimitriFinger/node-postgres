export function up(knex) {

    return (
        knex.schema.createTable('responsavel', table => {
            table.integer('codDP').unsigned().references('delegacias.codDP');
            table.string('nome', 100).notNullable();
        })
    )
}


export function down(knex) {
    return knex.schema.dropTable('responsavel');
}