// In production this server modules and mocks
// should not pass inside the main bundle
export { db as __serverDatabase } from './serverDb'
export { startDatabaseMigration as __serverStartDatabaseMigration } from './migrationDb'
export { default as productsMock } from './__mocks__/products.json'