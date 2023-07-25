import { Container, Row } from "react-bootstrap"
import HorizontalResponsiveExample from "../../components/CartGroup/CartGroup"
import {Col} from "react-bootstrap"



export const Carrinho = () => {
    return(
        <Container>
            <Row>
            <Col xs={12}  md={10} >
            <HorizontalResponsiveExample />
            </Col>
            </Row>
        </Container>
    )
}