import type { Opt } from "@mikro-orm/core";
import { Entity, PrimaryKey, Property } from "@mikro-orm/decorators/legacy";
import { ulid } from "ulid";

@Entity({ abstract: true })
export abstract class BaseEntity {
  @PrimaryKey({ type: "varchar", length: 26, columnType: 'varchar(26) collate "C"' })
  id: string = ulid();

  @Property()
  createdAt: Opt<Date> = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Opt<Date> = new Date();
}
