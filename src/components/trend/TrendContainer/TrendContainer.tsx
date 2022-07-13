import { TrendingEntity } from "../../../Interfaces/TrendingEntityInterface";
import './trendContainer.scss';

interface Props {
    trendingdata : TrendingEntity[]
}
function TrendContainer({ trendingdata } : Props) {
    return ( 
        <div className='trending-container container-fluid'>
            <h6 className="mt-3">Latest Trends</h6>
            <div className="row my-2">
            {
                trendingdata.map((item) => (
                    <div className='trend-item col-2 m-auto'>
                        <img src={item.image} className="trend-image" />
                        <p className="trend-title">{item.title.substring(0,12)}</p>
                    </div>

                ))
            }
            </div>
            <h6 className="mt-2 trend-suggestion-heading">Popular suggestions</h6>
            <div className="row">
            {
                    trendingdata.map((item) => (
                    <div className="col-12 small">
                        <p className="trend-suggestion-title">{ item.title }</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default TrendContainer;