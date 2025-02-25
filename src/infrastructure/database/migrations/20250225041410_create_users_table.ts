import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('fullName', 100).notNullable();
    table.string('email', 60).notNullable().unique();
    table.string('password', 200).notNullable();
    table.timestamp('createdAt', { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp('updatedAt', { useTz: true }).nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}

