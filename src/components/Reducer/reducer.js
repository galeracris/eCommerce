export const initialState = {
  basket: [],
  user: null,
  shippingData: {},
  paymentMessage: ","
};

export const actionTypes = {
  ADD_TO_BASKET: 'ADD_TO_BASKET',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_ALL_ITEM: 'REMOVE_ALL_ITEM',
  CLEAR_BASKET: 'CLEAR_BASKET',
  SET_USER: "SET_USER",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_SHIPPINGDATA: "SET_SHIPPINGDATA",
  SET_PAYMENTMESSAGE: "SET_PAYMENTMESSAGE"
};

export const totalItemsInBasket = (basket) => basket.reduce((amount, item) => amount + item.cantidad, 0);

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.cantidad * item.precio + amount, 0);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      const currentExist = state?.basket?.find((item) => item.id === action.item.id);
      if (currentExist) {
        return {
          ...state,
          basket: state.basket.map(
            (item) => (item.id === action.item.id ? { ...item, cantidad: item.cantidad + 1 } : item) // si el id es igual al que se esta agregando, se le suma uno a la cantidad
          ),
        };
      }

      return {
        ...state,
        basket: [...state.basket, { ...action.item, cantidad: 1 }],
      };

    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        basket: state.basket
          .map((item) => (item.id === action.id ? { ...item, cantidad: item.cantidad - 1 } : item)) // si el id es igual al que se esta agregando, se le resta uno a la cantidad
          .filter((item) => item.cantidad > 0),
      };

    case actionTypes.REMOVE_ALL_ITEM:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case actionTypes.CLEAR_BASKET:
      return { ...state, basket: [] };

      case actionTypes.SET_SHIPPINGDATA:
        return {
          ...state,
           shippingData: action.shippingData,
        };

        case actionTypes.SET_PAYMENTMESSAGE:
        return{
          ...state,
            paymentMessage: action.paymentMessage,
        };  

    default:
      return state;
  }
};
export default reducer;
