export function up(knex) {

    return (
        knex.schema.createTable('delegacia', table => {
            table.integer('codDP').notNullable().primary().unique().index();
            table.string('nome', 100).notNullable();
            table.string('endereço', 255).notNullable();
        })
    )
}


export function down(knex) {
    return knex.schema.dropTable('users');
}