import './style.scss';


function Main({ children }) {
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
                            <p>Aujourd'hui passionné par le développement Web, j'ai découvert bien plus qu'un simple métier d'avenir en devenant développeur.
                                Ma formation chez O'clock m'a permis de me perfectionner dans le développement Full Stack JavaScript. Ma passion pour la résolution de problèmes et mon désir
                                de trouver des solutions m'ont guidé tout au long de mon parcours. Grâce à ma formation, j'ai consolidé mes bases en travaillant des
                                projets variés et en adoptant des pratiques comme le pair programming. Je suis un esprit curieux et créatif, toujours en quête
                                d'apprentissage et d'amélioration.
                            </p>
                        </div>

                    </div>
                </article>
                <article className='card card-two card-main'>
                    <div className="block">
                        <div className="card-title">Formation </div>
                        <div className="card-content">DEVELOPPEUR WEB CHEZ O'CLOCK (TÉLÉPRÉSENTIEL DE NOV 2022 À OCT 2023)</div>
                        <div className="card-content">
                            <p>Conception de sites web via des projets pratiques et stage en entreprise.</p>
                            <p>Apprentissage approfondi de JavaScript, PostgreSQL, Node.js, Express.js, React et des
                                méthodologies agiles.</p>
                        </div>
                        <div className="card-subtitle">Programme</div>
                        <div className="card-content">
                            <ul className='list list-one'>
                                <li>JavaScript avancé (ES6+)</li>
                                <li>PostgreSQL gestion des bases de données</li>
                                <li>Node.js création de serveurs</li>
                                <li>Méthodes agiles approche de développement itérative</li>
                                <li>Modèle MVC (Modèle-Vue-Contrôleur)</li>
                                <li>Conception de base de données (MCD)</li>
                                <li>Création de composants réutilisables React</li>
                            </ul>
                        </div>

                    </div>
                </article>
                <article className='card card-three card-main'>
                    <div className="block">
                        <div className="card-title">Experience </div>
                        <div className="card-subtitle">Stage en entreprise</div>
                        <div className="card-content">
                            <p>Développement d’un plateau d'échanges de données scientifiques qui permettra la mise en
                            relation de résultat entre professeurs, chercheurs et étudiants. (Choix en cours de la
                            technologie pour développer ce moteur communautaire basé sur l'Open Source et le Open
                            Hardware.).</p>
                        </div>
                        <div className="card-subtitle">Soft Skill </div>
                        <div className="card-content">
                            <ul className='list'>
                                <li>Organisation</li>
                                <li>Esprit critique</li>
                                <li>Esprit d'équipe</li>
                                <li>Flexibilité / Adaptabilité</li>
                                <li>Créativité</li>
                                <li>Curiosité </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
            {children}
        </main>
    )
}
export default Main