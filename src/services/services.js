import CaveiraFloradaMoletom from "../img/Produtos/caveiraFloral/caveiraFloralMoletom2.png"
import MoletomCoruja from "../img/Produtos/corujinha/corujinhaMoletom.png"
import Camisacoruja from "../img/Produtos/coruja/corujacamisaF.png"
import CamisaAstronauta from "../img/Produtos/astronauta/astronautaM2.png"
import CamisaSpaceMan from "../img/Produtos/spaceman/spacemanM2.png"
import MoletomSubaru from "../img/Produtos/subaru/subaruMoletom2.png"





const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${
        (Math.floor(Math.random() * 100_000)).toString(16)}`
}




export const getProducts = async () => {
    return JSON.parse(localStorage.getItem('products')) || []
}

export const  saveProduct = async (productName, price , image, id) => {
    
    const products = await getProducts()
    
    const newProduct = {
        id: id = generateId(),
        name: productName,
        quantity: 1 ,
        image: image,
        price: price.toLocaleString('pt-br', {
            style:'currency',
            currency: 'BRL'
        }),
       priceTrue: price,
        

    }
  

    products.push(newProduct)


    localStorage.setItem('products', JSON.stringify(products))

    return newProduct
}

export const saveQtdInProducts = async (productId) => {
    const products = await getProducts()
    const productIndex =  products.findIndex(function(product) {
        return product.id === productId
    })
    
    if(productIndex !== -1) {
        if(products[productIndex].quantity >= 0 ){
        products[productIndex].quantity +=1
    }}

    localStorage.setItem('products', JSON.stringify(products))
    

    return {...products[productIndex]}

}

export const removeQtdInProducts = async (productId) => {
    const products = await getProducts()

    const productIndex =  products.findIndex(function(product) {
        return product.id === productId
    })
    
    if(productIndex !== -1) {
        if(products[productIndex].quantity > 0 ){
        products[productIndex].quantity -=1
    }}

    localStorage.setItem('products', JSON.stringify(products))

    return {...products[productIndex]}

}


export const removeProductInCart = async (productId) => {
    const products = await getProducts()

    const productIndex =  products.findIndex(function(product) {
        return product.id === productId
    })
    
    if(productIndex !== -1) {
        products.splice(productIndex, 1)

    }

    localStorage.setItem('products', JSON.stringify(products))

    
    return {...products[productIndex]}

} 

 export const getItens = async () => {
    return [
        {
            title : "Moletom Caveira Florada",
            image : CaveiraFloradaMoletom , 
            price : 89.99,
            description :' Descubra o equilíbrio perfeito entre o sombrio e o delicado. '
        },
        {
            title: "Moletom Coruja",
            image : MoletomCoruja,
            price : 89.99,
            description :"conecte-se com uma arte milenar que transcende o tempo"
        },
        {
            title: "Camisa Coruja",
            image : Camisacoruja,
            price : 39.90,
            description :"conecte-se com uma arte milenar que transcende o tempo"
        },
        {
            title: "Camisa Astronauta",
            image : CamisaAstronauta,
            price : 39.90,
            description :"vista-se como um explorador cósmico"
        }
        ,
        {
            title: "Camisa Astronauta",
            image : CamisaSpaceMan,
            price : 39.90,
            description :"vista-se como um explorador cósmico"
        },
        {
            title: "Moletom Subaru",
            image : MoletomSubaru,
            price : 89.99,
            description :"velocidade e um por do sol em um estilo único e eletrizante"
        }
    ]
 }