import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../Reducer/reducer';
import accounting from 'accounting';



const Review = () => {
const [{basket}, dispatch] = useStateValue();


  return (
    <>
      <Typography variant='h6' gutterBottom>
        Detalle del pedido
      </Typography>
      <List disablePadding>
        {
          basket?.map(product => (
        <ListItem key={product.nombre}>
          <ListItemText primary={product.nombre} secondary={product.cantidad} />
          <Typography variant="body2">
            {accounting.formatMoney(product.precio, "$")}
          </Typography>
        </ListItem>
          ))
        }
        <ListItem>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1">
          {accounting.formatMoney(getBasketTotal(basket), "$")}
          </Typography>
        </ListItem>

      </List>
    </>
  )
}

export default Review
