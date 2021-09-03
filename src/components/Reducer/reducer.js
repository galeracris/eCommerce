

export const initialState = {
    carrito: []
}

export const actionTypes = {
    ADD_TO_CARRITO: "ADD_TO_CARRITO",
    REMOVE_ITEM: "REMOVE_ITEM",
    CLEAR_CARRITO: "CLEAR_CARRITO"
}

export const totalCarrito = (carrito) => {
    carrito?.reduce((acc, carritoItem) => carritoItem.precio * acc, 0)
}

// const reducer = (state, action) => {
//     switch(action.type){
//         case "ADD_TO_CARRITO":{

//         }
//         case "REMOVE_ITEM":{

//         }
//         case "REMOVE_ALL_ITEM":{

//         }
//         case "CLEAR_CARRITO":{
            
//         }
//         default:

//         return state;
//     }
// }



 const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_CARRITO":
            // FUNCIONA = AGREGA CADA ITEM DUPLICANDO
            return{
                ...state,
                carrito: [...state.carrito, action.item]
            };
            
        case "REMOVE_ITEM":
                const index2 = state.carrito.findIndex((carritoItem => carritoItem.id === action.id))
                let newCarrito2 = [...state.carrito];
                if(index2>=0){
                    newCarrito2.splice(index2, 1)
                }else{console.log("No se puede remover el producto")}

                return{
                    ...state,
                    carrito: newCarrito2,
                }

            default: return state;
    }
}
export default reducer