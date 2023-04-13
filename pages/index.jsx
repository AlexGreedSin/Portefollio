import styles from '/styles/Accueil.module.css'
import Head from "next/head"
export default function Accueil(){
    return <>
      <Head>
        <title>Portefolio Alexandre Bailey-Proulx Acceuil</title>
        <meta name="description" content="Page pour savoir tout les information sur Alexandre"/>
      
        <meta property="og:title" content="Portefolio Alexandre Bailey-Proulx Acceuil"/>
        <meta property="og:description" content="Page pour savoir tout les information sur Alexandre"/>
        <meta property="og:image" content ="http://localhost:3000/public/img/Me.jpg"/>
      </Head>
        <p className = {styles.sousTitre}>Sur mon Portfolio, vous allez en savoir plus sur moi-même 
          ainsi que mes connaissances et
          certains projets que j&apos;ai déja fait.</p>
        <p className = {styles.sousTitre}>Bien sûr 
        si vous désirez avoir plus de détails, 
        n&apos;hésitez pas a me contacter. 
        Toutes les informations pour me contacter 
         seront dans la section &quot;Contact&quot; de mon Portfolio</p>
        <h1 className={styles.titre}> A propos de moi:</h1>
        <p className = {styles.sousTitre}>
          Bonjour, Je m&apos;apelle Alexandre Bailey-Proulx, j&apos;ai 19 ans et j&apos;ai toujours eu une grande passion pour la création de jeux vidéos et logiciels. Je suis un programmeur informatique,
          j&apos;ai étudié au collège La Cité à Ottawa pendant 2 ans dans le programme Programmation informatique.
          Je connais plusieurs langues de programmation de base comme le c#, java, html, css ainsi que des connaissances en réseautique et bases de données.
        </p>
          <p className = {styles.sousTitre}>
          Je suis une personne bien organisée ainsi que ponctuelle en plus d&apos;une grande attention au details. très grand fan de jeux vidéos de tous genres et
          J&apos;espère trouver des personnes agréables sur des grands projets ambitieux.
          
        </p>
    </>
        
    
}