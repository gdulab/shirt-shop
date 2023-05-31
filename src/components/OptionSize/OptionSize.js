import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = (props) => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {props.sizes.map(size => <li key={props.name + size.name}><button type="button" onClick={e => props.setCurrentSize(size)} className={clsx(size.name, props.currentSize.name === size.name && styles.active)}>{size.name}</button></li>)}
            </ul>
        </div>
    )
}
export default OptionSize;