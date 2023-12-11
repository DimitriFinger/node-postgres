export function up(knex) {

    return (
        knex.schema.createTable('responsavel', table => {
            table.integer('codDP').unsigned().references('delegacias.codDP').index();
            table.string('nome', 150).notNullable();
        })
    )
}


export function down(knex) {
    return knex.schema.dropTable('responsavel');
}