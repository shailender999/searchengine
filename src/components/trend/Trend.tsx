import { useEffect, useState } from 'react';
import { getTrendingData } from '../../api/main';
import { TrendingEntity } from '../../Interfaces/TrendingEntityInterface';
import './trend.scss';
import TrendShimmer from './Shimmer/TrendShimmer';
import TrendContainer from './TrendContainer/TrendContainer';

const Trend: React.FC<{search:string, visible: boolean}> = ({search, visible}) => {
    const [trendingData, setTrendingData] = useState<TrendingEntity[]>([])
    const [fetchingData, setFetchingData] = useState(true)
    useEffect(() => {
        const fetchAndSetTrendingData = async () => {
            const trendingDataCollection = await getTrendingData();
            setTrendingData(trendingDataCollection);
            setFetchingData(false);
        }
        fetchAndSetTrendingData();
    }, [search])
    return ( 
        <div className="trendContainer row" style={{visibility: visible ? 'visible' : 'hidden'}}>
            {
                fetchingData ? <TrendShimmer /> : <TrendContainer trendingdata={trendingData} />
            }
        </div>
     );
}

export default Trend;