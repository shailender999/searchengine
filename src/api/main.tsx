import axios, { AxiosResponse } from 'axios';
import { TrendingEntity } from '../Interfaces/TrendingData';

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