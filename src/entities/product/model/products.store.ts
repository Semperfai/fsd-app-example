import { apiInstance } from '@/shared/api/local'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
const BASE_URL = 'products'

export const useCounterStore = defineStore('products', () => {
  const products = ref([])

  const addToProducts = (product: any) => {
    products.value.push(product)
  }
  const setProducts = () => {}

  const getProducts = (params) => {
    const { data } = apiInstance.get(BASE_URL, { params })
  }
  return {}
})
