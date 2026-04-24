import { Migration } from '@mikro-orm/migrations';

export class Migration20260424063553 extends Migration {

  override up(): void | Promise<void> {
    this.addSql(`create table "parent_row" ("id" varchar(26) collate "C" not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "sort_key" int not null, "meta" jsonb not null, primary key ("id"));`);
    this.addSql(`alter table "parent_row" add constraint "parent_row_sort_key_unique" unique ("sort_key");`);

    this.addSql(`create table "child_row" ("id" varchar(26) collate "C" not null, "created_at" timestamptz not null, "updated_at" timestamptz not null, "sort_key" int not null, "meta" jsonb not null, "parent_id" varchar(26) collate "C" null, primary key ("id"));`);
    this.addSql(`alter table "child_row" add constraint "child_row_sort_key_unique" unique ("sort_key");`);
    this.addSql(`create index "child_row_parent_id_index" on "child_row" ("parent_id");`);

    this.addSql(`alter table "child_row" add constraint "child_row_parent_id_foreign" foreign key ("parent_id") references "parent_row" ("id") on delete set null;`);
  }

}
