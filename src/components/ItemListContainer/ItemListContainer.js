import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncMock';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../asyncMock';
const ItemListContainer = ({greeting}) => {
    const [products,setProducts]=useState([]);
    const [error,setError]=useState(false);
    const [loading,setLoading]=useState(true);
    const {categoryID} =useParams();
    useEffect(()=>{
        if(!categoryID){
            getProducts().then(res=>{
                setProducts(res)
            }).catch(error=>{
                setError(true)
            }).finally(()=>{
                setLoading(false)
            })
        }
        else{
            getProductsByCategory(categoryID).then(res=>{
                setProducts(res)
            }).catch(error=>{
                setError(true)
            }).finally(()=>{
                setLoading(false)
            })
        }
    },[categoryID])
    if(loading){
        return <h1 className='text-center'>Cargando...</h1>
    }
    if(error){
        return <h1 className='text-center'>Hubo un error</h1>
    }
    return(
        <>
            <h1 className='text-center'>{greeting}</h1>
            <ItemList products={products}/>
        </>
        
    );
}
export default ItemListContainer;