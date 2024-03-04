import Badge from 'react-bootstrap/Badge';
function Tags({color,texto}) {
    return ( 
        <Badge bg={color}>{texto}</Badge>
     );
}

export default Tags;