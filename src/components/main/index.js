import './style.scss';
import Labo from '../Labo';


function Main() {
    return (
        <main>
            <section className='intro'>
                <h4>developpeur web Fullstack Javascript</h4>
            </section>
            <section className='cardFlex'>
                <article className='card'>
                    <div className="block">
                        <div className="card_title">Profil </div>
                        <div className="card_content">
                            <p>En cherchant ma voie professionnelle j'ai découvert le métier de développeur Web. Je pensais avoir trouvé un simple métier d'avenir, j'y ai découvert une passion et une communauté d'entraide et de partage.</p>
                            <p>Au cours de ma formation j'ai eu la chance de communiquer avec des développeurs aguerris et ainsi consolider les bases apprises.
                            </p>
                            <p>
                                J'aime résoudre les problèmes et chercher des solutions. Lors de ma formation, j'ai aussi pu découvrir et adopter le pair programming sur plusieurs projets.
                            </p>
                        </div>
                        <div className="card_title">Soft Skill </div>
                        <div className="card_content">
                            <ul>
                                <li>Pair - programming</li>
                                <li>Créativité</li>
                                <li>Esprit critique</li>
                                <li>Curiosité </li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="card_title">Cordonnées et profil</div>
                        <div className="card_content">
                            <ul>
                                <li>06.66.25.21.41</li>
                                <li>jimmy.omont@hotmail.fr</li>
                                <li>92100 Boulogne Billancourt</li>
                                <li><a className="lien" href="https://www.linkedin.com/in/jimmy-omont-141471166/">Profil LinkeIn</a></li>

                            </ul>
                        </div>
                    </div>
                </article>
                <article className='card2'>
                    <div className="block">
                        <div className="card_title">Formation </div>
                        <div className="card_content">DEVELOPPEUR WEB CHEZ O'CLOCK (TÉLÉPRÉSENTIEL DE NOV 2022 À OCT 2023)</div>
                        <div className="card_content">
                            Titre Professionnel de Formation Développement Web et Accessibilité niveau V
                            Conception de sites internet via des projets continus et stage en entreprise
                            Apprentissage de langage de developpement Front end / back end</div>
                        <div className="card_title">Programme</div>
                        <div className="card_content">
                            <ul>
                                <li>Html/Css</li>
                                <li>JavaScript</li>
                                <li>Accessibilité</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Serveur web</li>
                                <li>Base de données</li>
                                <li>Postgresql</li>
                                <li>Projet tutoré</li>
                                <li>stage en entreprise</li>
                            </ul>
                        </div>

                    </div>
                </article>
                <article className='card3'>
                    <div className="block">
                        <div className="card_title">Experience </div>
                        <div className="card_content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut deserunt eum atque sequi eveniet vel blanditiis quis harum dolorum, nihil minima amet expedita voluptate excepturi. Amet quo velit quas tempora!</div>
                        <div className="card_title">developpeur web </div>
                        <div className="card_content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem perferendis necessitatibus debitis doloribus dolore aut quae, soluta rerum dolorem at maxime neque similique nobis quia facere ex labore harum.</div>
                        <div className="card_content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque asperiores, magni consequatur fugit officia voluptates corporis id aliquam, eveniet obcaecati neque recusandae tempora hic repellat, voluptatibus ab provident minima.</div>
                    </div>
                </article>
            </section>
            <Labo />
        </main>
    )
}
export default Main