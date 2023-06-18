import type { AxiosPromise } from 'axios'
import { type ProductDto } from './types'
import { apiInstance } from '@/shared/api/local'

const BASE_URL = 'products'

export const getProductsList = (params: any): AxiosPromise<ProductDto[]> => {
    return apiInstance.get(BASE_URL, { params })
  }

export type GetProductByIdParams = {
  productId: number
}

export const getProductById = ({
  productId,
  ...params
}: GetProductByIdParams): AxiosPromise<ProductDto> => {
  return apiInstance.get(`${BASE_URL}/${productId}`, { params })
}
