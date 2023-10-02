import knex from "knex";

const { schema } = knex;

await schema.dropTableIfExists("user");
await schema.dropTableIfExists("job");
await schema.dropTableIfExists("company");

await schema.createTable("company", (table) => {
  table.text("id").notNullable().primary();
  table.text("name").notNullable();
  table.text("description");
});

await schema.createTable("job", (table) => {
  table.text("id").notNullable().primary();
  table.text("companyId").notNullable().references("id").inTable("company");
  table.text("title").notNullable();
  table.text("description");
  table.text("createdAt").notNullable();
});

await schema.createTable("user", (table) => {
  table.text("id").notNullable().primary();
  table.text("companyId").notNullable().references("id").inTable("company");
  table.text("email").notNullable();
  table.text("password").notNullable();
});
