

export const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM",
    REMOVE_ALL_ITEM: "REMOVE_ALL_ITEM", 
    CLEAR_BASKET: "CLEAR_BASKET"
}

export const getBasketTotal = (basket) => {
    basket?.reduce((amount, item) => item.id + amount, 0)
}

const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            
        // FUNCIONA = AGREGA CADA ITEM DUPLICANDO     

                // let newBasket0 = [...state.basket];
                // if(newBasket0.hasOwnProperty(newBasket0.id)) { 
                //     newBasket0 = [newBasket0.id + 1] // siel producto con ese id existe se aumente en 1
                // }

            return{
                ...state,
                // basket: newBasket0,
                basket: [...state.basket, action.item]
            };
            
        case "REMOVE_ITEM":
                    const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
                    let newBasket = [...state.basket];
                        if (index>=0){
                            newBasket.splice(index, 1)
                        }else{console.log("No se puede remover el producto")}

                    return{
                        ...state,
                        basket: newBasket,
                    };

        case "REMOVE_ALL_ITEM":
                    const index2 = state.basket.findIndex((basketItem2 => basketItem2.id === action.id))
                    let newBasket2 = [...state.basket];
                        if(index2>=0){
                            newBasket2.splice(index2,)
                        }else{console.log("No se pueden remover los productos")}
    
                    return{
                        ...state,
                        basket: newBasket2,
                    };

        case "CLEAR_BASKET":
                    const index3 = state.basket.findIndex((basketItem3 => basketItem3.id === action.id))
                    let newBasket3= [...state.basket];
                        if(index3 >= 0){
                            newBasket3.splice(index3,)
                        }else{console.log("No se puede vaciar el carrito")}

            return{
                ...state,
                basket: newBasket3,
            };


        default:
                    return state;
    }
}
export default reducer