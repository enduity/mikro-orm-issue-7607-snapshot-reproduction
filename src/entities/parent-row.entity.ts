import { Collection } from "@mikro-orm/core";
import { Entity, OneToMany, Property } from "@mikro-orm/decorators/legacy";
import { BaseEntity } from "./base.entity";
import { ChildRow } from "./child-row.entity";

@Entity()
export class ParentRow extends BaseEntity {
  @Property({ unique: true })
  sortKey!: number;

  @Property()
  meta!: Record<string, unknown>;

  @OneToMany(() => ChildRow, child => child.parent)
  children = new Collection<ChildRow>(this);
}
