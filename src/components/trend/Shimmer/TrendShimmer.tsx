import 'shimmer-css/shimmer.css';
import './trendShimmer.scss';

function TrendShimmer() {
    return ( 
        <div className='shimmer-container'>
            <h5 className='py-3'>Latest Trends</h5>
            <div className="shimmer-wrapper">
                <div className="shimmer-circle shimmer-circle-md shimmer-animate"></div>
                <div className="shimmer-circle shimmer-circle-md shimmer-animate"></div>
                <div className="shimmer-circle shimmer-circle-md shimmer-animate"></div>
                <div className="shimmer-circle shimmer-circle-md shimmer-animate"></div>
                <div className="shimmer-circle shimmer-circle-md shimmer-animate"></div>
            </div>
            <h5 className='py-2'>Popular Suggestions</h5>
            <div className="shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"></div>
            <div className="shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"></div>
            <div className="shimmer-line shimmer-line-br shimmer-line-full shimmer-animate"></div>
        </div>
     );
}

export default TrendShimmer;