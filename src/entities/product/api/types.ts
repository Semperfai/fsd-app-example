export type ProductDto = Partial<{
  id: number
  price: number
  name: string
  popular: boolean
  discountPercentage: number
  starRating: number
  inStock: boolean
  description: string
  reviewes: number
  imgUrl: string[]
  videoPresentationUrls: Record<string, string>
}>
