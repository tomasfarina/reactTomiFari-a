import "./card.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { AiOutlineShoppingCart } from "react-icons/ai";
import getItems from '../../services/items';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';




function ItemListContainer(props) {

    const notify = () => toast.success('Item/s added to cart', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    let [data, setData] = useState([]);

    useEffect( () => {
            console.log('use effect')
            getItems().then(respuesta => {
                setData(respuesta)
            })
        },
        []
    )
    return (
        <div>
        <div className="small-container">
        <h1 className="title">Featured products</h1>
        <div className="row">
        <div className="card-containers">
            {data.map((items) => {
                return (
                    <Card 
                    style={{ width: "30rem" }} 
                    className='col-4'
                    key={items.id}>
                        <Card.Img className="col-4-img" variant="top" src={items.img} />
                        <Card.Body className='card-body'>
                            <Card.Title className="h4">{items.title}</Card.Title>
                            <Card.Text className="col-4-p">
                                ${items.price}
                            </Card.Text>
                            <div className="rating">
                              <FontAwesomeIcon icon={faStar} size="1x" color="#ff523b" />
                              <FontAwesomeIcon icon={faStar} size="1x" color="#ff523b" />
                              <FontAwesomeIcon icon={faStar} size="1x" color="#ff523b" />
                              <FontAwesomeIcon icon={faStar} size="1x" color="#ff523b" />
                              <FontAwesomeIcon icon={faStarHalfStroke} size="1x" color="#ff523b" />
                            </div>
                            <ItemCount />
                            <Button onClick={notify} variant="secondary"  className='card-button'>
                                <AiOutlineShoppingCart className="cart-icon-button" 
                                />    
                            </Button>
                        </Card.Body>
                    </Card>
                    
                )
            })
            }
        </div>
        </div>
        </div>
        <ToastContainer/>
        </div>
        
    );
}




export default ItemListContainer;