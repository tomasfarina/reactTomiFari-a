import "./Offer.css"

function Offer () {
    return(
        <div className="offer">
            <div className="small-container">
                <div className="row">
                    <div className="col-2">
                        <img className="offer-img" src="../assets/offer.png"/>
                    </div>
                    <div className="col-2">
                        <p>Exclusively available on JapanFoods</p>
                        <h1>Japanese assorted crate</h1>
                        <small>The japanese assorted crate includes a lot of japanese delicacies. Order one now, and enjoy a box full of surprises! <br /></small>
                        <a href="" className="btn">Buy now! &#8594;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;