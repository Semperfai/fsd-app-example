import { type Product , type ProductId  } from '../model/types';
import { type  ProductDto } from '../api/types';

export const mapProduct = (dto: ProductDto):Product =>{
    return {
        id: dto.id as ProductId,
        price: dto.price,
        oldPrice: dto.price,
        label: dto.name,
        popular: dto.popular,
        discount: dto.discountPercentage,
        raiting: dto.starRating,
        inStock: dto.inStock,
        description: dto.description,
        reviewes: dto.reviewes,
        images: dto.imgUrl,
        videoPresentationSrc: dto.videoPresentationSrc
    }
}