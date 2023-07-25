import React, { useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Modal } from "../../components/Modal/Modal"
import { CardContainer } from "../../containers/Card/Card"
import { useAppContext } from "../../store/AppContext"
import { closeModalAction } from "../../store/actions"
import { fetchItensAction } from "../../store/actions"




export const Homepage = () => {
    const { state, dispatch } = useAppContext()
    const handleClose = () => {
        dispatch(closeModalAction())
    }



    const productData = state.itens.map(item => ({
        ...item,
    }))


    useEffect(() => {
        fetchItensAction(dispatch)
    }, [])


    return (
        <div>
            <Modal
                open={state.mode === "saveProd"}
                onHide={handleClose}
                title={'Carrinho'}
                controls={[
                    {
                        label: 'Continuar Comprando',
                        variant: 'secondary',
                        onClick: () => {
                            handleClose()
                        }
                    },

                    {
                        label: 'Finalizar Compra',
                        variant: 'primary',
                        onClick: () => {
                            handleClose()
                        }
                        ,
                        to: 'carrinho'
                    }
                ]}
            >
                <p>Produto adicionado com sucesso</p>
            </Modal>


            <Container  >
                <Row>
                    {productData.map(product => (
                        <Col xs={12} md={3}>
                            <CardContainer {...product} controls={[{ variant: 'outline-secondary' }]}
                            /></Col>))}
                </Row>
            </Container>

        </div>


    )
}