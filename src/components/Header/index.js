import './style.scss';
// import affichageHeure  from './horloge.js';

function Header({lastname, firstname}){
    return(
        <header>
            <section>
                <article>
                    <h1 className="name">{lastname}{firstname}</h1>
                </article>
                <article className='card cardTime card-one'>
                    <div className="horloge">
                        <p className="card-title heures">Ici l heure</p>
                        <p className="card-content date"> Ici la date</p>
                    </div>
                </article>
            </section>
        </header>
    )
}
export default Header