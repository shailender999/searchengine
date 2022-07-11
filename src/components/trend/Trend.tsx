import { useEffect, useState } from 'react';
import { getTrendingData } from '../../api/main';
import { TrendingEntity } from '../../Interfaces/TrendingData';
import './trend.scss';
import TrendShimmer from './Shimmer/TrendShimmer';
import TrendContainer from './TrendContainer/TrendContainer';
const Trend: React.FC<{search:string}> = ({search}) => {
    const [trendingData, setTrendingData] = useState<TrendingEntity[]>([])
    const [fetchingData, setFetchingData] = useState(true)
    useEffect(() => {
        const fetchAndSetTrendingData = async () => {
            const trendingDataCollection = await getTrendingData();
            setTrendingData(trendingDataCollection);
            setFetchingData(false);
        }
        //if (search.length > 0) {
        fetchAndSetTrendingData();   
        //}
    },[search])
    return ( 
        <div className="trendContainer">
            {
                fetchingData ? <TrendShimmer /> : <TrendContainer trendingdata={trendingData} />
            }
        </div>
     );
}

export default Trend;