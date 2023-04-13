import Image from 'next/image'
import styles from '../styles/jeux.module.css'
import SpaceSurvivor1 from '../public/img/SoloGame1.png'
import SpaceSurvivor2 from '../public/img/SoloGame2.png'
import Head from "next/head"
export default function SpaceSurvivor(){
    return <>
        <Head>
            <title>Portefolio Alexandre Bailey-Proulx Space Survivor</title>
            <meta name="description" content="Jeu video Space Survivor sur le logiciel GameMaker objectif de survivre les asteroid"/>
        
            <meta property="og:title" content="Portefolio Alexandre Bailey-Proulx Space Survivor"/>
            <meta property="og:description" content="Jeu video Space Survivor sur le logiciel GameMaker objectif de survivre les asteroid"/>
            <meta property="og:image" content ="http://localhost:3000/public/img/SoloGame1.PNG"/>
        </Head>
        <h1 className={styles.titre}>Space Survivor</h1>

        <Image src={SpaceSurvivor1} alt="Image1 SpaceSurvivor" className={styles.image} priority/>

        <p className={styles.paragraphe}>Space Survivor est un jeu que j&apos;ai créé complètement seul. J&apos;ai programmer celui-ci en c# 
        dans un logiciel appellé &quot;GameMaker Studio 2&quot; qui est un logiciel permettant de trier des sprites, objets, scripts, rooms, etc 
        très simplement et de mettre les codes bien séparé dans chacun d&apos;entre eux. C&apos;est un logiciel très utile pour utiliser et améliorer nos connaissances en programmation 
        </p>
        <Image src={SpaceSurvivor2} alt="Image2 SpaceSurvivor" className={styles.image} priority/>
        <p className={styles.paragraphe}>
            Dans ce jeu, j&apos;ai tout programmé: le contrôle du vaisseau principal permettant de se déplacer partout sur l&apos;écran, 
            le tir du véhicule, les possibilité aléatoires de la taille et de la direction des météores, les collisions des tirs sur les ennemis 
            et sur le joueur. J&apos;ai également programmé les dommages causés par les météores, le delai de tir des ennemis et du boss, 
            la barre de vie du joueur qui change selon la vie du vaisseau principal, une fonction de sauvegarde automatique lors du changement de niveau, 
            le menu complet avec l&apos;option de mettre le jeu en plein écran ou non, le bouton pour commencer une nouvelle partie ainsi qu&apos;un bouton qui permet de 
            retourner a un ancien niveau que le joueur aura sauvegardé la dernière fois. De plus, j&apos;ai aussi fait les designs de tout les sprites dans le jeu.
            J&apos;ai, bien entendu, programmé l&apos;utilisation de tout les sons comme les tirs des vaisseaux, l&apos;impact des météores et la musique d&apos;ambiance.            
        </p>
    </>
}