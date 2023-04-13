import Image from 'next/image'
import styles from '/styles/jeux.module.css'
import CodeL1 from '/public/img/CodeL1.png'
import CodeL2 from '/public/img/CodeL2.png'
import CodeL3 from '/public/img/CodeL3.png'
import Head from "next/head"
export default function CodeL(){
    return <>
        <Head>
            <title>Portefolio Alexandre Bailey-Proulx Code L</title>
            <meta name="description" content="Jeu video Code L sur le logiciel Unity Objectif sortir du labyrinthe"/>
            
            <meta property="og:title" content="Portefolio Alexandre Bailey-Proulx Code L"/>
            <meta property="og:description" content="Jeu video Code L sur le logiciel Unity Objectif sortir du labyrinthe"/>
            <meta property="og:image" content ="http://localhost:3000/public/img/CodeL2.PNG"/>
        </Head>
        <h1 className={styles.titre}>Code L</h1>

        <Image src={CodeL1} alt="Image1Code L" className={styles.image} priority/>

        <p className={styles.paragraphe}>Code L est un jeu vidéo crée par moi et deux collègues de classe.
        Le jeux video est écrit en c# dans le logiciel Unity, un logiciel très populaire
        pour le développement de jeux professionnels.
        </p>
        <Image src={CodeL2} alt="Image2Code L" className={styles.image} priority/>
        <p className={styles.paragraphe}>
            J&apos;ai programmé plusieurs choses durant le développement du jeu entre autres : les mouvements possibles du personnage,
            les collisions de celui-ci avec le background ou le forground 
            et les animations. De plus, j&apos;ai aussi programmé les changements de scènes ainsi que les énigmes présents dans le jeu. 
            J&apos;ai aussi fait le design des puzzles et des scènes. J&apos;ai aussi complètement créé et programmé la page 
            du menu principal. Celle-ci affiche plusieurs items :  le boutton &quot;jouer&quot;, qui permet de commencer le jeu et de, bien 
            entendu, jouer, le boutton &quot;quitter&quot; qui ferme le tout. J&apos;ai également donner un choix d&apos;option auquel on accède avec le boutton &quot;option&quot;,
            dont: le choix de graphique, taille de l&apos;écran ainsi que le contrôle du volume.
        </p>
        <Image src={CodeL3} alt="Image3Code L" className={styles.image} priority/>
    </>
}