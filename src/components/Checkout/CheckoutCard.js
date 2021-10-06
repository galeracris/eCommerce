import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import accounting from 'accounting';
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../Reducer/reducer';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    action: {
        marginTop: '1rem',
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundSize: '35%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    cardRating: {
        display: 'flex',
    },
}));

function CheckoutCard({ Producto }) {
    const { id, cantidad, nombre, precio, stock, rating, imagen } = Producto;

    const classes = useStyles();
    const [{ basket }, dispatch] = useStateValue();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const removeAllItem = () => dispatch({ type: actionTypes.REMOVE_ALL_ITEM, id: id });

    return (
        <Card className={classes.root}>
            <CardHeader
                action={
                    <Typography className={classes.action} variant='h5' color='textSecondary'>
                        x {cantidad}
                    </Typography>
                }
                title={nombre}
                subheader={stock}
            />

            <CardContent>
                <Typography className={classes.action} variant='h5' color='textSecondary'>
                    {accounting.formatMoney(precio * cantidad)}
                </Typography>
            </CardContent>

            <CardMedia className={classes.media} image={imagen} title={nombre} />

            <CardActions disableSpacing className={classes.cardActions}>
                <div className={classes.cardRating}>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#11088;</p>
                        ))}
                </div>
                <IconButton>
                    <DeleteIcon fontSize='large' onClick={removeAllItem} />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default CheckoutCard;
