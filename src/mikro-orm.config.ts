import "reflect-metadata";
import { defineConfig } from "@mikro-orm/postgresql";
import { Migrator } from "@mikro-orm/migrations";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
import { ChildRow } from "./entities/child-row.entity";
import { ParentRow } from "./entities/parent-row.entity";

export default defineConfig({
  host: process.env.PGHOST ?? "127.0.0.1",
  port: Number(process.env.PGPORT ?? "7802"),
  user: process.env.PGUSER ?? "user",
  password: process.env.PGPASSWORD ?? "password",
  dbName: process.env.PGDATABASE ?? "snapshot_repro",
  entities: [ParentRow, ChildRow],
  metadataProvider: TsMorphMetadataProvider,
  extensions: [Migrator],
  migrations: {
    path: "dist/migrations",
    pathTs: "src/migrations",
    snapshot: true,
    fileName: (timestamp, name) => `migration${timestamp}${name ? `-${name}` : ""}`,
  },
});
