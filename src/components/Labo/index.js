import Card from "../Card"


function  Labo(){
    return (
        <>
        <section className='intro'>
        <h4>Labos et projets perso</h4>
    </section>

    <section>
        <div className='cardFlex'>
            <Card
                style='card'
                title='Météo Locale'
                content='Méteo locale journalière de ma ville avec alternance avec le lieu le plus chaud du monde ainsi que le plus froid de la planète avec diverse information et en lien avec des icones de représentation.'
                lien='https://micro-meteo-boulbi.vercel.app/'
                image='https://shots.codepen.io/username/pen/QWZaaEZ-800.jpg?version=1683731866'
                descr="Cette mini météo est conçue en HTML , CSS et javascript avec un API n'utilisant pas d' ApiKey"
            />
            <Card
                style='card3'
                title='Cohérence cardiaque'
                content="Parce qu'un bon développeur se doit d'être en bonne santé, cette application est conçue pour assurer la méditation et la relaxation. Une utilisation quotidienne est recommandée."
                lien='https://coherence-cardiaque-planet.vercel.app/'
                image='https://shots.codepen.io/username/pen/PodQmge-800.jpg?version=1678745742'
                descr="Application single page en Html / Css et Javascript"
            />
            <Card
                style='card'
                title='Map promo'
                content="Projet que j'ai lancé au début de ma formation pour mettre en relation ma promo.
                    Via un projet simple pour mettre aussi en application les bases apprises au cours des premières saisons de formation."
                lien='https://map-sphinx.vercel.app/'
                image='https://cdn.discordapp.com/attachments/1101739977081094197/1108431538007314512/Capture_decran_2023-05-17_183101.png'
                descr="Single page Html avec integration javascript et animation css"
            />
        </div>
        <div className='cardFlex'>
            <Card
                style='card'
                title='CV Html'
                content="Un bon dev se doit d'avoir un bon CV en ligne. Pour pouvoir le partager à tout moment , en se déplaçant dans le métro ou à un croisement de rue. Bref , Comme on dit : si c'est sur le net c'est forcément dans la poche!!"
                lien='https://cv-omont-jimmy.vercel.app/'
                image='https://cdn.discordapp.com/attachments/1101739977081094197/1108432966515949659/Capture_decran_2023-05-17_183643.png'
                descr="Single page Html avec integration javascript et animation css"
            />

            <Card
                style='card2'
                title='Mon GitHub'
                content="On dit qu'un dev aime partager. Et partager c'est aussi apprendre. C'est pour cela que je met en ligne tout mes projets terminés sur mon GitHub. Non pas pour révolutionner le monde du dev mais pour peut être inspirer un jour une personne."
                lien='https://github.com/jimmyomont'
                image='https://cdn.discordapp.com/attachments/1101739977081094197/1108433735176699975/telechargement.jpeg'
                descr="Tout pleins de trucs plus ou moins interressant à découvrir et aussi à améliorer.. Enfin pour faire plein de trucs quoi.
                    On peut aider une personne mille fois. On peut aider mille personnes une fois. Mais on ne peut pas aider mille personnes mille fois !!!"
            />
            <Card
                style='card3'
                title='Mon CodePen'
                content="Alors la c'est tout simplement une bibiothèque portative. Car aux repas de famille quand on te demande en quoi consiste 'd'être dev'!' et bien au lieu de leur laisser croire que c'est juste une expression de Bobo
                    et de leur montrer ton Github rempli de ligne et de hiéroglyphes impossible à dechiffrer pour le commun des mortels ( comme moi il y a encore quelques mois) Et bien hop j'ai tout dans ma poche avec ma bibliothèque Codepen. Car un peu de visuel vaut mieux que mille lignes de code"
                lien='https://codepen.io/jimmy76'
                image='https://cdn.discordapp.com/attachments/1101739977081094197/1108434816036241539/codepen_project-940x400.jpg'
                descr="Attention les yeux! tu vas en prendre plein la vu! avec plein de choses plus ou moins interessante pour toi. Oui, j'ai dit bibliothèque perso pas 'api ultra tendence'."
            />
        </div>
    </section>
        </>

    )
}

export default Labo