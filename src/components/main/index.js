import './style.scss';
// import affichageHeure  from './horloge.js';
// 
function Main() {
    return (
        <main>
            <section>
                <article className='card'>
                    <div className="horloge">
                        <div className="card_title heures">Ici l heure</div>
                        <div className="card_content date"> Ici la date</div>
                    </div>
                </article>
            </section>
            <section className='intro'>
                <p>developpeur web Fullstack Javascript</p>
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

            <section className='intro'>
                <p>Labos et projets perso</p>
            </section>

            <section>
                <div className='cardFlex'>
                    <article className='card2'>
                        <div className="block">
                            <div className="card_title">Météo Locale</div>
                            <div className="card_content">Méteo locale journalière de ma ville avec alternance avec le lieu le plus chaud du monde ainsi que le plus froid de la planète avec diverse information et en lien avec des icones de représentation.</div>
                            <a href='https://micro-meteo-boulbi.vercel.app/'><img className='cardImage' src="https://shots.codepen.io/username/pen/QWZaaEZ-800.jpg?version=1683731866" alt="" /> 
                                </a>
                            <div className="card_content">Cette mini météo est conçue en HTML , CSS et javascript avec un API n'utilisant pas d' ApiKey</div>
                        </div>
                    </article>
                    <article className='card3'>
                        <div className="block">
                            <div className="card_title">Cohérence cardiaque</div>
                            <div className="card_content">Parce qu'un bon développeur se doit d'être en bonne santé, cette application est conçue pour assurer la méditation et la relaxation. Une utilisation quotidienne est recommandée. </div>
                            <a href='https://coherence-cardiaque-planet.vercel.app/'>
                                <img  className='cardImage' src="https://shots.codepen.io/username/pen/PodQmge-800.jpg?version=1678745742" alt="" /> 
                                </a> 
                            <div className="card_content">Application single page en Html / Css et Javascript </div>
                        </div>
                    </article>
                <article className='card'>
                        <div className="block">
                            <div className="card_title">Map promo</div>
                            <div className="card_content">Projet que j'ai lancé au début de ma formation pour mettre en relation ma promo.
                            Via un projet simple pour mettre aussi en application les bases apprises au cours des premières saisons de formation. </div>
                            <a href='https://map-sphinx.vercel.app/'>
                                <img className='cardImage' src="https://cdn.discordapp.com/attachments/1101739977081094197/1108431538007314512/Capture_decran_2023-05-17_183101.png" alt="" />
                                </a> 
                            <div className="card_content">Single page Html avec integration javascript et animation css</div>
                        </div>
                    </article>
                </div>
                <div className='cardFlex'>

                    <article className='card'>
                        <div className="block">
                            <div className="card_title">CV Html</div>
                            <div className="card_content">Un bon dev se doit d'avoir un bon CV en ligne. Pour pouvoir le partager à tout moment , en se déplaçant dans le métro ou à un croisement de rue. Bref , Comme on dit : si c'est sur le net c'est forcément dans la poche!! </div>
                            <a href='https://cv-omont-jimmy.vercel.app/'>
                                <img className='cardImage' src="https://cdn.discordapp.com/attachments/1101739977081094197/1108432966515949659/Capture_decran_2023-05-17_183643.png" alt="" />
                                </a> 
                            <div className="card_content">Single page Html avec integration javascript et animation css</div>
                        </div>
                    </article>
                    <article className='card2'>
                        <div className="block">
                            <div className="card_title">Mon GitHub</div>
                            <div className="card_content">On dit qu'un dev aime partager. Et partager c'est aussi apprendre. C'est pour cela que je met en ligne tout mes projets terminés sur mon GitHub. Non pas pour révolutionner le monde du dev mais pour peut être inspirer un jour une personne. </div>
                            <a href='https://github.com/jimmyomont'>
                                <img className='cardImage' src="https://cdn.discordapp.com/attachments/1101739977081094197/1108433735176699975/telechargement.jpeg" alt="" />
                                </a> 
                            <div className="card_content">Tout pleins de trucs plus ou moins interressant à découvrir et aussi à améliorer.. Enfin pour faire plein de trucs quoi.
                            On peut aider une personne mille fois. On peut aider mille personnes une fois. Mais on ne peut pas aider mille personnes mille fois !!!</div>
                        </div>
                    </article>
                    <article className='card3'>
                        <div className="block">
                            <div className="card_title">Mon CodePen</div>
                            <div className="card_content">Alors la c'est tout simplement une bibiothèque portative. Car aux repas de famille quand on te demande en quoi consiste " d'être dev'! " et bien au lieu de leur laisser croire que c'est juste une expression de Bobo
                            et de leur montrer ton Github rempli de ligne et de hiéroglyphes impossible à dechiffrer pour le commun des mortels ( comme moi il y a encore quelques mois) Et bien hop j'ai tout dans ma poche avec ma bibliothèque Codepen. Car un peu de visuel vaut mieux que mille lignes de code</div>
                            <a href='https://codepen.io/jimmy76'>
                                <img className='cardImage' src="https://cdn.discordapp.com/attachments/1101739977081094197/1108434816036241539/codepen_project-940x400.jpg" alt="" />
                                </a> 
                            <div className="card_content">Attention les yeux! tu vas en prendre plein la vu! avec plein de choses plus ou moins interessante pour toi. Oui, j'ai dit bibliothèque perso pas "api ultra tendence". </div>
                        </div>
                    </article>
                    <div>   
        </div>
                </div>
            </section>
        </main>
    )
}
export default Main