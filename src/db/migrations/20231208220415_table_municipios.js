export function up(knex) {

    return (
        knex.schema.createTable('municipios', table => {
            table.integer('codIBGE').notNullable().primary().unique().index();
            table.string('municipio', 100).notNullable();
            table.string('região', 25).notNullable();
        })
    )
}


export function down(knex) {
    return knex.schema.dropTable('municipios');
}