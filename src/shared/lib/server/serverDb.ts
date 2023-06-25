import { factory, nullable, oneOf, persist, primaryKey } from '@mswjs/data'
import { config } from '../config'
export const db = factory({
  user: {
    id: primaryKey(Number),
    email: String,
    password: String
  },
  cart: {
    id: primaryKey(Number),
    user: oneOf('user'),
    version: Number,
    itemsProductId: (): number[] => [],
    itemsProductQuantity: (): number[] => []
  },
  product: {
    id: primaryKey(Number),
    categoryId: Number,
    popular: Boolean,
    name: String,
    description: nullable(String),
    starRating: Number,
    price: Number,
    discountPercentage: Number,
    reviewes: Number,
    imgUrl: (): string[] => [],
    videoPresentationSrc: {
      src: {
        src: String,
        type: String
      },
      tracks: Array
    }
  }
})

persist(db, {
  storage: config.API_STORAGE_MODE === 'local' ? localStorage : sessionStorage
})
