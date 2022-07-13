
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    star: number | string,
    starcount?: number
}
function Rating({ star, starcount }: Props) {
    const ratingContent = () => {
        let result = []
        for (let i = 0; i < star; i++) {
            result.push(<FontAwesomeIcon icon={faStar} style={{color:'#fdd33d', fontSize:'12px'}}/>)
        }
        return result;
    }
    return ( 
        <div className="d-flex">
            {
                ratingContent()
            }
            {starcount && <span style={{ fontSize: '12px', color: 'grey', marginTop: '-3px', marginLeft: '3px' }}>({starcount})</span>}
        </div>
     );
}

export default Rating;