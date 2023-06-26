import { type VideoPresentationSrc } from './../api/types';
export type ProductId = Brand<Id, 'ProductId'>

export type Product = {
  id: ProductId
  price: Penny
  oldPrice: Penny
  label: string
  popular: boolean
  discount: number
  raiting: number
  inStock: boolean
  description: string
  reviewes: number
  images: Url[]
  videoPresentationSrc: VideoPresentationSrc
}
