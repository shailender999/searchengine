import Search from "../../components/search-bar/Search";
import './homePage.scss';

function HomePage() {
    return (  
        <div className="App">
            <div className='container-fluid'>
                <div className="row search-bar-container">
                    <div className="col-md-8 m-auto">
                        <Search outline={false} />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HomePage;