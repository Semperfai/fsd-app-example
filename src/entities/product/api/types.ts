export type ProductDto = {
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
  videoPresentationSrc: VideoPresentationSrc
}

export interface VideoPresentationSrc {
  src: {
    src: string
    type: string
  }
  tracks?: {
    default?: boolean
    src?: string
    kind?: string
    label?: string
    srcLang?: string
  }[]
}

