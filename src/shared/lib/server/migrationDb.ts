import { config } from '@/shared/lib'
import productsMock from './__mocks__/products.json'
import { db } from './serverDb'

export function startDatabaseMigration() {
  const users = db.user.getAll()
  // Data already exists by persist(db)
  if (users.length > 0) {
    return
  }
  // create test user
  const user = db.user.create({
    id: 1,
    email: config.API_USER_EMAIL,
    password: config.API_USER_PASSWORD,
  })

  productsMock.forEach((row) => db.product.create(row))

  db.cart.create({
    id: 1,
    user,
    version: 0,
    itemsProductId: [],
    itemsProductQuantity: [],
  })
}