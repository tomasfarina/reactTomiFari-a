import "./featured.css"
import "../ItemListContainer/card.css"

function Featured () {
    return (
        <div className="categories">
            <div className="small-container">
            <h1 className="title">Featured categories</h1>
            <div className="row">
                <div className="col-3">
                    <img src="https://i.pinimg.com/736x/46/43/cf/4643cfd289a227fdd1e87517fa8fbee0--bubble-tea-soft-drink.jpg" alt="category" />
                    <h4>Sodas</h4>
                </div>
                <div className="col-3">
                    <img src="https://cdn.immieats.com/016e7d28-968d-4489-850d-ac9a65583043/" alt="category" />
                    <h4>Assorted Boxes</h4>
                </div>
                <div className="col-3">
                    <img src="https://www.theinvisibletourist.com/wp-content/uploads/2020/03/featured_144.jpg" alt="category" />
                    <h4>Chocolates</h4>
                </div>
            </div>
            </div>
        </div>
    )
    
}

export default Featured