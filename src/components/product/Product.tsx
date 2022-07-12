import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { TrendingEntity } from "../../Interfaces/TrendingEntityInterface";
import './product.scss';
import Rating from "../rating/Rating";

interface Props {
    product : TrendingEntity[]
}
function Product({ product }: Props) {
    return (
        <>
        {
            product.map((item) => (
            <div className = "col-md-3 col-sm-6" >
                <div className="product-grid row">
                    <div className="product-image col-12">
                        <a href="#">
                            <img className="pic-1" src={item.image} />
                        </a>
                        <div className="view-product-label" data-tip="View Product">
                           <span> View Product </span>
                        </div>
                        <span className="product-wishlist-label">
                                <FontAwesomeIcon
                                    icon={faHeart} className="wishlist-icon" style={{color:'red'}} /> 
                        </span>
                    </div>
                    <div className="col-12 mt-2">
                        <h3 className="title">{ item.title.substring(0,13) }</h3>
                        <div className="price">
                            <s className="small text-secondary">Rs 10</s>
                            <span className="ml-1 text-primary">Rs 549</span>
                        </div>
                    </div>
                    <Rating star={3} starcount={222} />    
                </div>
            </div >
        ))
            }
            </>
     );
}

export default Product;