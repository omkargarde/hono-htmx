// db.ts
import { drizzle, type DrizzleD1Database } from 'drizzle-orm/d1';

// This is how we declare the global environment interface for Cloudflare Workers
interface Env {
	DB: D1Database;
}

export let db: DrizzleD1Database;

export function createDbClient(env: Env) {
	db = drizzle(env.DB);
}
