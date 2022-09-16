import "./footer.css";

function Footer () {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download our app</h3>
                        <p>Download app for Android and IOS</p>
                        <div className="app-logo">
                            <img src="../assets/play-store.png"/>
                            <img src="../assets/app-store.png"/>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src="../assets/logo-alt.png" alt="alternative logo" />
                        <p>Our purpose in JapanFoods is to give you the best japanese experience, right at your door!</p>
                    </div>
                    <div className="footer-col-3">
                        <h3 className="footer-titles">Useful links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join or Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3 className="footer-titles">Follow us</h3>
                         <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>YouTube</li>
                         </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">Copyright 2022 - JapanFoods</p>
                <p className="copyright">Tomás Fariña - React 37555</p>
            </div>
        </div>
    );
}

export default Footer