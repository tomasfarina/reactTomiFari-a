import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../ItemListContainer/card.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Item({data}) {
    const urlItems = `/item/${data.id}-${data.title}`

    const notify = () => toast.success('Item/s added to cart', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    return(
    <div>
        <div className="small-container">
        <div className="card-containers">
        <Card
        id={data.id}
        className='col-4'
        style={{ width: "30rem" }}>
        <Card.Img className="col-4-img" variant="top" src={data.img} />
        <Card.Body className='card-body'>
            <Card.Title className="card-title">{data.title}</Card.Title>
            <Card.Text className="col-4-p">
                $ {data.price}
            </Card.Text>
            <div className="rating">
                              <FontAwesomeIcon icon={faStar} size="1x" color="#ff523b" />
                              <FontAwesomeIcon icon={faStar} size="1x" color="#ff523b" />
                              <FontAwesomeIcon icon={faStar} size="1x" color="#ff523b" />
                              <FontAwesomeIcon icon={faStar} size="1x" color="#ff523b" />
                              <FontAwesomeIcon icon={faStarHalfStroke} size="1x" color="#ff523b" />
            </div>
            <Link to={urlItems} className="card-detalle-button">
                See detail
            </Link>
            <Button onClick={notify} variant='secondary' className='card-button'>
                <AiOutlineShoppingCart className="cart-icon-button" />
            </Button>
        </Card.Body>
    </Card>
    </div>
    </div>
    <ToastContainer/>
    </div>
    );
}
export default Item;