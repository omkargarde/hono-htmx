import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	dialect: 'sqlite',
	out: './drizzle',
	schema: './src/db/schema.ts',
	driver: 'd1-http',
	dbCredentials: {
		accountId: process.env.account_id!,
		databaseId: process.env.database_id!,
		token: process.env.token!,
	},
});
