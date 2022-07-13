import Rating from '../rating/Rating';
import './filter.scss';

const filters = [
    {
        id : 'brands',
        title: 'BRANDS',
        type: 'checkbox',
        filters: [
            'Mango',
            'H&M'
        ]
    },
    {
        id : 'pricerange',
        title: 'PRICE RANGE',
        type: 'checkbox',
        filters: [
            'Under 500',
            '1000 To 3000'
        ]
    },
    {
        id : 'ratings',
        title: 'RATINGS',
        type: 'checkbox',
        filters: [
            5,4,3,2,1
        ]
    }
]
function FilterMenu() {
    return ( 
        	<aside className="col-md-2">
            <div className="accordion">
                {
                    filters.map((filter) => (
                        <div key={filter.title} className="accordion-item small py-2 my-1" style={{ border: '0px'}}>
                            <h5 className="accordion-header">
                            <button
                                className="accordion-button p-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={ `#${filter.id}-accordion` }
                                aria-expanded="true"
                                aria-controls={ `${filter.id}-accordion` }>
                                    {filter.title}
                                </button>
                            </h5>
                            <div id={ `${filter.id}-accordion` } className="accordion-collapse collapse show">
                                <div className="accordion-body p-1 mt-2">
                                    {
                                        filter.filters.map((item) => (
                                            <label className="form-check" key={item}>
                                            <input className="form-check-input" type="checkbox" value="" />
                                            <span className="form-check-label">
                                                {filter.title === 'RATINGS' ? <Rating star={item} /> :item}
                                            </span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        ))
                }
                </div>
            </aside>
     );
}

export default FilterMenu;