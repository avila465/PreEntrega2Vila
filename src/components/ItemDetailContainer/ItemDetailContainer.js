import { useState,useEffect } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ItemDetailContainer = () =>{
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(true);
    const {productID}=useParams();
    useEffect(()=>{
        getProduct(productID).then(response=>{
            setProduct(response);
        }).finally(()=>{
            setLoading(false);
        })
    },[productID])
    if(loading){
        return <h1 className='text-center'>Cargando...</h1>
    }
    return(
        <>
            <h1 className='text-center'>Detalle de producto</h1>
            <Row className="row justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product?.img} alt={product?.name}/>
                    <Card.Body>
                        <Card.Title>{product?.name}</Card.Title>
                        <Card.Text>Detalle: {product?.desciption}</Card.Text>
                        <Card.Text>Stock disponible: {product?.stock}</Card.Text>
                        <Button variant="primary">$ {product?.price}</Button>
                    </Card.Body>
                </Card>
            </Row>
        </>       
    )
}
export default ItemDetailContainer;