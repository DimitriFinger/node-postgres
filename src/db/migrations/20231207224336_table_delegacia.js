export function up(knex) {
    return (
        knex.schema.createTable('delegacias', table => {
            table.integer('codDP').unsigned().primary().index();
            table.string('nome', 100).notNullable();
            table.string('endereco', 255).notNullable();
        }).then(console.log("Tabela delegacias criada."))
    )
}


export function down(knex) {
    return knex.schema.dropTable('delegacias');
}