import styles from '../styles/Layout.module.css'
import Menu from "@/components/Menu"
import Header from './Header'
import Footer from './Footer'


export default function layout({ children}){
    return <>
        <Header />

        <Menu/>
        <div className={styles.div}>
        {children}
        </div>
        

        <Footer/>
    </>
}