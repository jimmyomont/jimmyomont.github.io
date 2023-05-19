import './style.scss';
// import affichageHeure  from './horloge.js';

function Header({lastname, firstname}){
    return(
        <header>
            <section>
                <article>
                    <h1 className="name">{lastname}{firstname}</h1>
                </article>
                <article className='card'>
                    <div className="horloge">
                        <div className="card_title heures">Ici l heure</div>
                        <div className="card_content date"> Ici la date</div>
                    </div>
                </article>
            </section>
        </header>
    )
}
export default Header