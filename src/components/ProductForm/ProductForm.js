import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
    const sendOrder = e => {
        e.preventDefault();
        console.log('Summary:');
        console.log('=======');
        console.log('Name: ', props.title);
        console.log('Price: ', props.price);
        console.log('Size: ', props.currentSize.name);
        console.log('Color: ', props.currentColor);
    }
    return (
        <form onSubmit={sendOrder}>
            <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
            <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
            <Button className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    )
}

ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    basePrice: PropTypes.number.isRequired,
    currentSize: PropTypes.object.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    price: PropTypes.number.isRequired,
}

export default ProductForm;