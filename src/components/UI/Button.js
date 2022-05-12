import styles from './Button.module.css';


const Button = (props) => {

    return (
        <button className={styles['add__btn']}>{props.children}</button>
    );
};

export default Button;
