export function up(knex) {

    return (
        knex.schema.createTable('responsavel', table => {
            table.integer('codDP').notNullable().unsigned().primary().unique().index();
            table.string('nome', 100).notNullable();
            table.string('endereço', 255).notNullable();
        })
    )
}


export function down(knex) {
    return knex.schema.dropTable('responsavel');
}