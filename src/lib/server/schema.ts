import { pgTable, bigint, varchar, boolean, text } from "drizzle-orm/pg-core";

export const user = pgTable("auth_user", {
	id: varchar("id", {
		length: 15 // change this when using custom user ids
	}).primaryKey(),
  email: varchar("email", {
    length: 255
  }).unique(),
	// other user attributes
});

export const session = pgTable("user_session", {
	id: varchar("id", {
		length: 128
	}).primaryKey(),
	userId: varchar("user_id", {
		length: 15
	})
		.notNull()
		.references(() => user.id),
	activeExpires: bigint("active_expires", {
		mode: "number"
	}).notNull(),
	idleExpires: bigint("idle_expires", {
		mode: "number"
	}).notNull()
});

export const key = pgTable("user_key", {
	id: varchar("id", {
		length: 255
	}).primaryKey(),
	userId: varchar("user_id", {
		length: 15
	})
		.notNull()
		.references(() => user.id),
	hashedPassword: varchar("hashed_password", {
		length: 255
	})
});

export const place = pgTable("place", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	city: text("city"),
	area: text("area"),
	road: text("road"),
});