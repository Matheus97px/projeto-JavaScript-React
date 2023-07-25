import Card from "../../components/Card/Card"
import { useAppContext } from "../../store/AppContext"
import { openModalSaveProductAction, saveProductsActions, } from "../../store/actions"




export const CardContainer = (props) => {
    const { state, dispatch } = useAppContext()

    const handleClick = async () => {
        saveProductsActions(dispatch, props.title, props.price, props.image)
        dispatch(openModalSaveProductAction(dispatch))

    }

    return (
        <Card {...props} onClick={handleClick} />
    )
}