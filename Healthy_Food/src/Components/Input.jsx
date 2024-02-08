import styles from "./Input.module.css"
const Input= ()=>{
    return(
        <input type="text" placeholder="Enter Your item" className={styles.inputtext}></input>
    )
}

export default Input