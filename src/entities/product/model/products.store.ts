import { type ProductDto } from './../api/types'
import { defineStore } from 'pinia'
import { getProductsList, getProductById } from '../api/productApi'
import { type GetProductByIdParams } from '../api/productApi'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const isProductLoading = ref<boolean>(false)
  const productsList = ref<ProductDto[]>([])

  async function getProductListAsync(params: any) {
    isProductLoading.value = true
    try {
      const { data } = await getProductsList(params)
      productsList.value = [...productsList.value, ...data]
    } finally {
      isProductLoading.value = false
    }
  }

  async function getProductByIdAsync({ productId, ...params }: GetProductByIdParams) {
    isProductLoading.value = true
    try {
      const { data } = await getProductById({ productId, ...params })
      return data
    } finally {
      isProductLoading.value = false
    }
  }

  return {
    getProductListAsync,
    getProductByIdAsync,
    productsList
  }
})
