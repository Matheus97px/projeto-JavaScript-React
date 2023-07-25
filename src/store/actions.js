 import * as types from "./types"
 import * as services from "../services/services"
 

 
 export const openModalSaveProductAction = () => ({
        type: types.openModalSaveProductType
    })

export const closeModalAction = () => ({
    type: types.closeModalType
})


export const  fetchProductsInitAction = () => ({
    type: types.fetchProductsInitType
})

export const  fetchProductsSuccessAction = (products) => ({
    type: types.fetchProductsSuccessType,
    payload: products
})

export const fetchProductsActions = async (dispatch) => {
    dispatch(fetchProductsInitAction())
    const products = await services.getProducts()
    dispatch(fetchProductsSuccessAction(products))
 
}


// ---------------------------------------------

export const  saveProductsInitAction = () => ({
    type: types.saveProductsInitType
})

export const  saveProductsSuccessAction = (product) => ({
    type: types.saveProductsSuccessType,
    payload: product
})

export const saveProductsActions = async (dispatch, productName, price, image) => {
    dispatch(saveProductsInitAction())

   

    const newProduct = await services.saveProduct(productName, price, image)
    dispatch(saveProductsSuccessAction(newProduct))
 
}


export const fetchItensInitAction = () => ({
    type: types.fetchItensInitType
})

export const fetchItensSuccessAction = (productData) => ({
    type: types.fetchItensSuccessType,
    payload : productData
})

export const fetchItensAction = async (dispatch) => {
    dispatch(fetchItensInitAction())
    const productData = await services.getItens()
    dispatch(fetchItensSuccessAction(productData))
}

