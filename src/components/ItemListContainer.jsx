import Container from 'react-bootstrap/Container';

export const ItemListContainer = (props) => {
    return (

    <Container className='mt-1'>
    <h4>{props.greeting} </h4>
    </Container>
    )
}