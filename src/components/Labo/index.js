import Card from "../Card"


function Labo() {
    return (
        <>
            <section className='mainTitle'>
                <h4>Projets perso</h4>
            </section>

            <section>
                <div className='card-position'>
                    <Card
                        style='card card-one'
                        title='Micro Météo'
                        content='Méteo locale journalière de ma ville avec alternance avec le lieu le plus chaud du monde ainsi que le plus froid de la planète avec diverse information et en lien avec des icones de représentation.'
                        lien='https://micro-meteo.vercel.app/'
                        image='https://shots.codepen.io/username/pen/QWZaaEZ-800.jpg?version=1683731866'
                        descr="Cette mini météo est conçue en HTML , CSS et javascript avec un API n'utilisant pas d' ApiKey"
                    />
                    <Card
                        style='card card-three'
                        title='HeartSync'
                        content="Parce qu'un bon développeur se doit d'être en bonne santé, cette application est conçue pour assurer la méditation et la relaxation. Une utilisation quotidienne est recommandée."
                        lien='https://planetary-rhytms-heart-sync.vercel.app/'
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1139860245309575250/756c4df5-9329-4ffc-abb9-53d07b944114.png'
                        descr="Application single page en Html / Css et Javascript"
                    />
                    <Card
                        style='card card-two'
                        title='Projet de formation'
                        content="Projet de suivi de formation avec la mise en application de tout ce que nous voyons cycle par cycle"
                        lien='https://pilori.vercel.app/'
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1111184175911948318/list-large.png'
                        descr=" En cours d ajout"
                    />
                </div>
                <div className='card-position'>
                    <Card
                        style='card card-two'
                        title='CV Html'
                        content="Un bon dev se doit d'avoir un bon CV en ligne. Pour pouvoir le partager à tout moment , en se déplaçant dans le métro ou à un croisement de rue. Bref , Comme on dit : si c'est sur le net c'est forcément dans la poche!!"
                        lien='https://cv-omont-jimmy.vercel.app/'
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1138497287102931024/cvHtml.png'
                        descr="Single page Html avec integration javascript et animation css"
                    />

                    <Card
                        style='card card-one'
                        title='Voice Translate Express'
                        content="Etant plus dev que baroudeur mais qui aime imaginer voyager j'ai créer cette petite application de traduction dans différentes langues, avec la possibilité de lire le texte traduit à haute voix"
                        lien='https://voice-translate-express.vercel.app/'
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1139856755078213793/c7ccf75e-1530-4e83-8379-d521bf42dfd6.png'
                        descr="Html , CSS , JS , app utilisant une Api de traduction sous format SinglePage et responsive"
                    />
                    <Card
                        style='card card-one'
                        title='SeriniPulse'
                        content="Application de cohérence cardiaque conçue pour les plus jeunes (et pas que ..) propose une expérience ludique et apaisante, inspirée par l'esthétique d'un certain jeu vidéo de notre enfance."
                        lien='https://serenipulse.vercel.app/'
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1139858806105460786/545af7cd-976f-40c5-8001-640822dd5277.png'
                        descr="Les différentes technologies HTML, CSS, JavaScript sont utilisées pour créer une interface interactive et esthétiquement agréable."
                    />

                </div>
                <div className="card-position">
                    <Card
                        style='card card-three'
                        title='Map promo'
                        content="Projet que j'ai lancé au début de ma formation pour mettre en relation ma promo.
                    Via un projet simple pour mettre aussi en application les bases apprises au cours des premières saisons de formation."
                        lien='https://map-sphinx.vercel.app/'
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1108431538007314512/Capture_decran_2023-05-17_183101.png'
                        descr="Single page Html avec integration javascript et animation css"
                    />
                    <Card
                        style='card card-one'
                        title='Mon GitHub'
                        content="On dit qu'un dev aime partager. Et partager c'est aussi apprendre. C'est pour cela que je met en ligne tout mes projets terminés sur mon GitHub. Non pas pour révolutionner le monde du dev mais pour peut être inspirer un jour une personne."
                        lien='https://github.com/jimmyomont'
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1108433735176699975/telechargement.jpeg'
                        descr="Tout pleins de trucs plus ou moins interressant à découvrir et aussi à améliorer.. Enfin pour faire plein de trucs quoi.
                    On peut aider une personne mille fois. On peut aider mille personnes une fois. Mais on ne peut pas aider mille personnes mille fois !!!"
                    />
                    <Card
                    style='card card-three'
                    title='Mon CodePen'
                    content="Alors la c'est tout simplement une bibiothèque portative. Car aux repas de famille quand on te demande en quoi consiste 'd'être dev'!' et bien au lieu de leur laisser croire que c'est juste une expression de Bobo
                et de leur montrer ton Github rempli de ligne et de hiéroglyphes impossible à dechiffrer pour le commun des mortels ( comme moi il y a encore quelques mois) Et bien hop j'ai tout dans ma poche avec ma bibliothèque Codepen. Car un peu de visuel vaut mieux que mille lignes de code"
                    lien='https://codepen.io/jimmy76'
                    image='https://cdn.discordapp.com/attachments/1101739977081094197/1108434816036241539/codepen_project-940x400.jpg'
                    descr="Attention les yeux! tu vas en prendre plein la vu! avec plein de choses plus ou moins interessante pour toi. Oui, j'ai dit bibliothèque perso pas 'api ultra tendence'."
                />

                </div>
                {/* <div className="card-position">
                    <Card
                        style='card card-two'
                        title='Projet en cours ...'
                        content="un peu de patience... cette place trouvera bientôt un nouveau projet"
                        // lien=''
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1111351143625412658/sticker-loading-please-wait-2-ambiance-sticker-mac_LoadingWait.jpg'
                        descr=""
                    />
                    <Card
                        style='card card-one'
                        title='Projet en cours ...'
                        content="un peu de patience... cette place trouvera bientôt un nouveau projet"
                        // liens=''
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1111351143625412658/sticker-loading-please-wait-2-ambiance-sticker-mac_LoadingWait.jpg'
                        descr=""
                    />
                    <Card
                        style='card card-two'
                        title='Projet en cours ...'
                        content="un peu de patience... cette place trouvera bientôt un nouveau projet"
                        // lien=''
                        image='https://cdn.discordapp.com/attachments/1101739977081094197/1111351143625412658/sticker-loading-please-wait-2-ambiance-sticker-mac_LoadingWait.jpg'
                        descr=""
                    />
                </div> */}
            </section>
        </>
    )
}

export default Labo;