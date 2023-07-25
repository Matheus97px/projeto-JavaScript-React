import * as types from "./types"


export function reducer(state, action) {

    switch (action.type) {
        case types.openModalSaveProductType:
            return{
                ...state,
                type: types.openModalSaveProductType,
                mode: 'saveProd'
            }
          
        

        case types.closeModalType:
            return{
                ...state,
                type: types.closeModalType,
                mode:null
            }

            
        case types.fetchProductsInitType:
            return {
                ...state,
                type: types.fetchProductsInitType,
            }

        case types.fetchProductsSuccessType:
            return {
                ...state,
                type:types.fetchProductsSuccessType,
                products: action.payload
                }
        

        case types.saveProductsSuccessType:
            return{
                ...state,
                type: types.saveProductsSuccessType,
                products: [
                ...state.products,
                action.payload
                ]
            }

            case types.fetchItensSuccessType:
                return {
                    ...state,
                    itens: action.payload
                    }

        default:
            return{ 
                ...state,
                type: action.type
            }
          
    }


}