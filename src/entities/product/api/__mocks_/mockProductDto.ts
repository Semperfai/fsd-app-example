import { type ProductDto } from '../types'
import { productsMock } from '@/shared/lib/server'

export function mockProductDto(initialProps: Partial<ProductDto>): ProductDto {
  return {
    ...productsMock[0],
    ...initialProps
  }
}
