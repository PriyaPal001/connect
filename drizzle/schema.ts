import { pgTable, foreignKey, pgEnum, varchar, bigint, unique, text } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"
export const keyStatus = pgEnum("key_status", ['expired', 'invalid', 'valid', 'default'])
export const keyType = pgEnum("key_type", ['stream_xchacha20', 'secretstream', 'secretbox', 'kdf', 'generichash', 'shorthash', 'auth', 'hmacsha256', 'hmacsha512', 'aead-det', 'aead-ietf'])
export const factorStatus = pgEnum("factor_status", ['verified', 'unverified'])
export const factorType = pgEnum("factor_type", ['webauthn', 'totp'])
export const aalLevel = pgEnum("aal_level", ['aal3', 'aal2', 'aal1'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['plain', 's256'])


export const userKey = pgTable("user_key", {
	id: varchar("id", { length: 255 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 15 }).notNull().references(() => authUser.id),
	hashedPassword: varchar("hashed_password", { length: 255 }),
});

export const userSession = pgTable("user_session", {
	id: varchar("id", { length: 128 }).primaryKey().notNull(),
	userId: varchar("user_id", { length: 15 }).notNull().references(() => authUser.id),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
});

export const authUser = pgTable("auth_user", {
	id: varchar("id", { length: 15 }).primaryKey().notNull(),
	email: varchar("email", { length: 255 }),
},
(table) => {
	return {
		authUserEmailUnique: unique("auth_user_email_unique").on(table.email),
	}
});

export const place = pgTable("place", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	city: text("city"),
	area: text("area"),
	road: text("road"),
});