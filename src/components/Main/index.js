import './style.scss';


function Main({children}) {
    return (
        <main>
            <section className='mainTitle'>
                <h4>developpeur web Fullstack Javascript</h4>
            </section>
            <section className='card-position'>
                <article className='card card-one card-main'>
                    <div className="block">
                        <div className="card-title">Profil </div>
                        <div className="card-content">
                            <p>En cherchant ma voie professionnelle j'ai découvert le métier de développeur Web. Je pensais avoir trouvé un simple métier d'avenir, j'y ai découvert une passion et une communauté d'entraide et de partage.
                            Au cours de ma formation j'ai eu la chance de communiquer avec des développeurs aguerris et ainsi consolider les bases apprises.
                            J'aime résoudre les problèmes et chercher des solutions. Lors de ma formation, j'ai aussi pu découvrir et adopter le pair programming sur plusieurs projets.
                            </p>
                        </div>
                        <div className="card-title">Soft Skill </div>
                        <div className="card-content">
                            <ul className='list'>
                                <li>Pair - programming</li>
                                <li>Créativité</li>
                                <li>Esprit critique</li>
                                <li>Curiosité </li>
                            </ul>
                        </div>
                    </div>
                </article>
                <article className='card card-two card-main'>
                    <div className="block">
                        <div className="card-title">Formation </div>
                        <div className="card-content">DEVELOPPEUR WEB CHEZ O'CLOCK (TÉLÉPRÉSENTIEL DE NOV 2022 À OCT 2023)</div>
                        <div className="card-content">
                            <p>
                            Titre Professionnel de Formation Développement Web et Accessibilité niveau V
                            Conception de sites internet via des projets continus et stage en entreprise
                            Apprentissage de langage de developpement Front end / back end</p>
                            </div>
                        <div className="card-title">Programme</div>
                        <div className="card-content">
                            <ul className='list list-one'>
                                <li>Html/Css</li>
                                <li>JavaScript</li>
                                <li>Accessibilité</li>
                            </ul>
                            <ul className=' list list-two'>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Serveur web</li>
                                <li>Base de données</li> 
                            </ul>
                            <ul className='list list-one'>
                                <li>Postgresql</li>
                                <li>Projet tutoré</li>
                                <li>stage en entreprise</li>
                            </ul>
                        </div>

                    </div>
                </article>
                <article className='card card-three card-main'>
                    <div className="block">
                        <div className="card-title">Experience </div>
                        <div className="card-subtitle">
                            <p>Stage en entreprise </p>
                        </div>
                        <div className="card-content">
                            Il sera accés sur l accessibilité.
                            Je ne peux pas fournir plus de détails pour le moment, n'ayant pas encore commencé.
                        </div>
                        <div className="card-subtitle">
                            <p>Projet tutoré de fin de formation: </p>
                        </div>
                        <div className='card-content'>
                        Actuellement en préparation du projet et je ne peux pas fournir plus de détails pour le moment, sa réalisation commencera en Juin 2023.</div>
                    </div>
                </article>
            </section>
            {children}
        </main>
    )
}
export default Main