import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';



const getPrice = (basePrice, additionalPrice) => {
    return Math.floor(basePrice + additionalPrice);
}

const Product = props => {
    const [currentSize, setCurrentSize] = useState(props.sizes[0]);
    const [currentColor, setCurrentColor] = useState(props.colors[0]);

    return (
        <article className={styles.product}>
            <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
            <div>
                <header>
                    <h2 className={styles.name}>{props.title}</h2>
                    <span className={styles.price}>Price: ${getPrice(props.basePrice, currentSize.additionalPrice)}</span>
                </header>
                <ProductForm
                    title={props.title}
                    sizes={props.sizes}
                    currentSize={currentSize}
                    setCurrentSize={setCurrentSize}
                    colors={props.colors}
                    currentColor={currentColor}
                    setCurrentColor={setCurrentColor}
                    getPrice={getPrice}
                    basePrice={props.basePrice}
                    additionalPrice={currentSize.additionalPrice}
                />

            </div>
        </article>
    )
};

Product.propTypes = {
    title: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    basePrice: PropTypes.number.isRequired,
}

export default Product;