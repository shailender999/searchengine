import { useEffect, useState } from "react";
import { getSearchedData } from "../../api/main";
import FilterMenu from "../../components/filter/FilterMenu";
import Product from "../../components/product/Product";
import Search from "../../components/search-bar/Search";
import { ProductEntity } from "../../Interfaces/ProductEntityInterface";

function SearchResult() {
    const [searchedData, setSearchedData] = useState<ProductEntity[]>([]);
    useEffect(() => {
        const fetchAndSetData = async () => {
            const trendingDataCollection = await getSearchedData();
            setSearchedData(trendingDataCollection);
        }
        fetchAndSetData();
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 m-auto">
                    <Search  />
                </div>
            </div>
            <div className="row">
                <h4 className="my-2">Search Results</h4>
                <FilterMenu />
                <div className="col-9">
                    <div className="row">
                        <Product product={searchedData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;