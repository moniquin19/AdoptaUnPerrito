import Card from 'react-bootstrap/Card';
import Tags from './Tags';
function MyCard(props) {

    const { url, nombre, descripcion, color, texto } = props

    return ( <>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url}
        />
        <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Tags color={color} texto={texto} />
        </Card.Body>
        </Card>
        </>
         );
}

export default MyCard;