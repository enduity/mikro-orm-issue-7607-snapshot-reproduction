import type { Rel } from "@mikro-orm/core";
import { Entity, ManyToOne, Property } from "@mikro-orm/decorators/legacy";
import { BaseEntity } from "./base.entity";
import { ParentRow } from "./parent-row.entity";

@Entity()
export class ChildRow extends BaseEntity {
  @Property({ unique: true })
  sortKey!: number;

  @Property()
  meta!: Record<string, unknown>;

  @ManyToOne({ entity: () => ParentRow, index: true, nullable: true })
  parent?: Rel<ParentRow>;
}
