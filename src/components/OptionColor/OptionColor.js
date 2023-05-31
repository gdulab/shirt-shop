import styles from './OptionColor.module.scss';
import clsx from 'clsx';
const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
}


const OptionColor = (props) => {
    
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map(color => <li key={props.name + color}><button type="button" value={color} onClick={e => props.setCurrentColor(e.target.value)} className={clsx(prepareColorClassName(color), props.currentColor === color && styles.active)} /></li>)}
            </ul>
        </div>
    )
}

export default OptionColor;