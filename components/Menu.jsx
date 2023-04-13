import { useState } from 'react'
import Image from 'next/image'

import styles from '../styles/Menu.module.css'
import Link from 'next/link'
import menuIcon from '../public/menuIcon.png'
export default function Menu(){
    const [etatVisible, setEtatVisible] = useState(true)
    const toggle = () => {
        setEtatVisible(!etatVisible)
        }
    return <nav>
        {!etatVisible &&
            <Image src={menuIcon} alt="MenuOption" className={styles.icon} onClick ={toggle} />
        }
        {etatVisible &&
                    <div className={styles.menu}>
                    <ul className={styles.ul}>
                        <li className={styles.li} onClick ={toggle}>Cliquez pour fermer le menu</li>
                        <Link href='/'>
                        <li className={styles.li}>Accueil</li>
                        </Link>
                        <Link href='/CodeL'>
                        <li className={styles.li}>Code L</li>
                        </Link>
                        <Link href='/SpaceSurvivor'>
                        <li className={styles.li}>Space Survivor</li>
                        </Link>
                        <Link href='/Caisse'>
                        <li className={styles.li}>Caisse</li>
                        </Link>
                        <Link href='/Contacts'>
                        <li className={styles.li}>Contact</li>
                        </Link>
                    </ul>
                </div>
        }
        
    </nav>
}