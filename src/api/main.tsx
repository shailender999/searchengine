import axios, { AxiosResponse } from 'axios';
import { ProductEntity } from '../Interfaces/ProductEntityInterface';
import { TrendingEntity } from '../Interfaces/TrendingEntityInterface';

const fakeApiUrl = 'https://fakestoreapi.com/products';

export const getTrendingData = (): Promise<TrendingEntity[]> => {
    const promise = new Promise<TrendingEntity[]>((resolve, reject) => {
        try {
            axios.get<TrendingEntity[]>(fakeApiUrl).then(response =>
                resolve(mapTrendingDataList(response))
            );
        } catch (ex) {
            reject(ex);
        }
    });
    return promise;
}
const mapTrendingDataList = ({ data }: AxiosResponse<any[]>): TrendingEntity[] => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    const filtered = shuffled.slice(0, 5);
    return filtered.map(item => ({
        id: item.id,
        title: item.title,
        image: item.image,
    }))
};
export const getSearchedData = (): Promise<ProductEntity[]> => {
    const promise = new Promise<ProductEntity[]>((resolve, reject) => {
        try {
            axios.get<ProductEntity[]>(fakeApiUrl).then(response =>
                resolve(mapProductDataList(response))
            );
        } catch (ex) {
            reject(ex);
        }
    });
    return promise;
}
const mapProductDataList = ({ data }: AxiosResponse<any[]>): ProductEntity[] => {
    return data.map(item => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        rating: item.rating.rate,
        starcount: item.rating.count,
        wishlist: false,
    }))
};