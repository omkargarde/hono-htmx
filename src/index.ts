/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { drizzle } from 'drizzle-orm/d1';
import { Hono } from 'hono';

interface Env {
	DB: D1Database;
}

const app = new Hono<{ Bindings: Env }>();

app.get('/', async (c) => {
	const db = drizzle(c.env.DB);
});

export default app;

