import { Container, Form, ListGroup } from 'react-bootstrap/';
import CardBS from 'react-bootstrap/Card'
import { Button, Row, Col } from 'react-bootstrap';
import { removeProductInCart, removeQtdInProducts, saveProduct, saveQtdInProducts } from '../../services/services';
import { useEffect } from 'react';
import { fetchProductsActions } from '../../store/actions';
import { useAppContext } from '../../store/AppContext';

function CartGroup({ item = [] }) {
  const {state ,dispatch} = useAppContext()
    useEffect(() => {
      fetchProductsActions(dispatch);
    }, [])

    
  return (
    <>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      <Container className='teste' >
        <Row className='d-flex justify-content-center align-items-center h-100'>

          <h1 className='text-center'>Suas compras</h1>
          <hr></hr>
          <p></p>
          
          <Row className='g-2'>
          {state.products.length > 0 ?
            <Col md={7} lg={3} className='py-2 position-absolute end-0 m-5'>
             
                <CardBS className=''>
                  <ListGroup className='mb-1'>
                    <ListGroup.Item action className='d-flex justify-content-between lh-sm'>
                      <span className="text-body-secondary me-5">Valor</span>
                      <span className="text-body-secondary">
                        {`R$ ${(item.valor = state.products.reduce((acc, product) => {
                        return  acc + product.priceTrue * product.quantity
                      }, 0)).toFixed(2).replace('.',',')}`}</span>
                    </ListGroup.Item>
                    <ListGroup.Item action className='d-flex justify-content-between lh-sm'>
                      <span className="text-body-secondary"> Desconto</span>
                      <span className="text-body-secondary">{`R$ ${(item.desconto = 0).toFixed(2).replace('.',',')}`}</span>
                    </ListGroup.Item>
                    <ListGroup.Item action className='d-flex justify-content-between'>
                      <span>Total</span>
                      <strong>{`R$ ${(item.valor - item.desconto).toFixed(2).replace('.',',')}`}</strong>

                    </ListGroup.Item>
                  </ListGroup>
                  <CardBS.Body className='text-center'>
                    <Button className='btn btn-warning btn-block btn-lg'>Forma De Pagamento</Button>
                  </CardBS.Body>
                </CardBS>
                
            </Col>
            : <h1 className='text-center'>Carrinho Vazio!!</h1>}
            {state.products.map((item, productIndex) => (
              <Col md={12} lg={9}>
                <CardBS key={productIndex} className="card rounded-4">
                  <CardBS.Body className="card-body p-2">
                    <Row className='d-flex justify-content-between align-items-center'>
                      <Col md={2} lg={2} xl={3}>
                        <CardBS.Img src={item.image} alt="Cardbs image" className='rounded-4' />
                      </Col>
                      <Col md={3} lg={3} xl={3}  >
                        <CardBS.Title className='lead fw-normal mb-2'>{item.name}</CardBS.Title>
                        <CardBS.Text className="fw-medium" >
                          <p />
                          <CardBS.Subtitle className="mb-2 text-muted">Tamanho:</CardBS.Subtitle>
                          <Form.Select className='' aria-label="Default select example">
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                            <option value="G2">G2</option>
                            <option value="G3">G3</option>
                          </Form.Select>
                          <p />
                          <CardBS.Subtitle className="mb-2 text-muted">Cor:</CardBS.Subtitle>
                          <Form.Select aria-label="Default select example">
                            <option value="Preto">Preto</option>
                            <option value="Branco">Branco</option>
                          </Form.Select>

                        </CardBS.Text>

                      </Col>

                      <Col md={3} lg={2} xl={2} className='d-flex'>
                        <Button id='refresh' className='btn btn-outline-dark btn-light px-sm-1 py-sm-1 p4'
                         onClick={() => {saveQtdInProducts(item.id) && location.reload() }}>

                          <i className="fa fa-plus-square"></i>
                        </Button>

                        <div className="ms-2 me-2" >
                          <label type='text' className='text-center form-control px-sm-1 py-sm-1 p4 '>{item.quantity}</label>
                        </div>

                        <Button className='btn btn-outline-dark btn-light px-sm-1 py-sm-1 p4' 
                        onClick={() => { removeQtdInProducts(item.id) && location.reload() }}>
                          <i className="fa fa-minus-square"> </i>
                        </Button>
                      </Col>

                      <Col md={3} lg={3} xl={2} className='offset-lg-1'>
                        <CardBS.Text>
                          <h5 className="mb-0">{item.price}</h5>
                          <hr></hr>
                          <h5 className="mb-0">Total</h5>
                          <h5 className="mb-0">{`R$ ${(item.priceTrue * item.quantity).toFixed(2).replace('.',',')}`}</h5>


                          
                        </CardBS.Text>
                      </Col>
                      <Col md={1} lg={1} xl={1} >
                        <Button className='btn-close' onClick={() =>removeProductInCart(item.id) && location.reload() }/>
                      </Col>

                    </Row>
                  </CardBS.Body>
                </CardBS>

              </Col>
            ))}
          </Row>

        </Row>
      </Container>
    </>
  );
}

export default CartGroup;



