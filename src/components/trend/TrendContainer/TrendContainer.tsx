import { TrendingEntity } from "../../../Interfaces/TrendingData";
import './trendContainer.scss';

interface Props {
    trendingdata : TrendingEntity[]
}
function TrendContainer({ trendingdata } : Props) {
    return ( 
        <div className='trending-container container-fluid'>
            <h5>Latest Trends</h5>
            <div className="row">
            {
                trendingdata.map((item) => (
                    <div className='trend-item col-2'>
                        <img src={item.image} className="trend-image" />
                        <p className="trend-title">{item.title.substring(0,12)}</p>
                    </div>

                ))
            }
            </div>
        </div>
    )
}

export default TrendContainer;