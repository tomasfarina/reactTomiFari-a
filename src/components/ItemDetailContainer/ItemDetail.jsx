import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { items } from '../../services/items';
import './ItemDetail.css';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail() {

    const notify = () => toast.success('Item/s added to cart', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const [product, setProduct] = useState({})
    const {id} = useParams();

    function getSingleProduct(idItem) {
        return new Promise((resolve, reject) => {
            let itemFind = items.find((item) => {
                return item.id === parseInt(idItem)
            });
            setTimeout(() => {
                if (itemFind) resolve(itemFind);
                else reject(new Error("Funko no encontrado"));
            }, 2000);
        });
    }

    useEffect(() => {
        getSingleProduct(id).then((resp) => setProduct(resp));
    }, [id])

    return (
        <div>
        <div className='detail-container'>
            <div className='detail-img-container'>
                <h2 className='detail-title'>{product.title}</h2>
                <img className='detail-img' src={product.img} alt={product.title} />
            </div>
            <div className='detail-buy'>   
                    <h2 className='detail-price'>$ {product.price}</h2>
                <ItemCount />
                <Button onClick={notify} variant='secondary' className='detail-button'>
                    <AiOutlineShoppingCart className="cart-icon-button" />
                    Add to cart
                </Button>
            </div>
            
        </div>
        <ToastContainer/>
        </div>
        
    )
}

export default ItemDetail;