import styles from '../styles/Header.module.css'
export default function Header(){
    return <>
        <div className={styles.background}>
            <p className = {styles.Space}><br/></p>
            <h1 className = {styles.h1}>Bonjour! Je me présente : Alexandre Bailey-Proulx</h1>
            <p className = {styles.p}> Je suis un programmeur et voici mon Portfolio</p>
        
        </div>
     </>
        
    
}