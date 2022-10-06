import { Row } from 'react-bootstrap';
import Item from '../Item/Item';
const ItemList = ({products}) => {
  return(
      <Row className="row justify-content-center">
          {products.map(product=><Item key={product.id}
          llave={product.id}
          nombre={product.name}
          cantidad={product.stock}
          imagen={product.img}/>)}
      </Row>
  )
}
export default ItemList;