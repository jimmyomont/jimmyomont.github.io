
import './style.scss';
import React, { useEffect, useState } from 'react';

function Header({ lastname, firstname }) {
    const [heure, setHeure] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const affichageHeure = () => {
            let today = new Date();
            let annee = today.getFullYear();
            let listeMois = [
                "Janvier",
                "Février",
                "Mars",
                "Avril",
                "Mai",
                "Juin",
                "Juillet",
                "Août",
                "Septembre",
                "Octobre",
                "Novembre",
                "Décembre"
            ];
            let mois = listeMois[today.getMonth()];
            let jourNumero = today.getDate();
            let listeJours = [
                "Dimanche",
                "Lundi",
                "Mardi",
                "Mercredi",
                "Jeudi",
                "Vendredi",
                "Samedi"
            ];
            let jourNom = listeJours[today.getDay()];

            const deuxChiffres = (element) => {
                if (element < 10) {
                    return "0" + element;
                } else {
                    return element;
                }
            };

            let heures = deuxChiffres(today.getHours());
            let minutes = deuxChiffres(today.getMinutes());
            let secondes = deuxChiffres(today.getSeconds());

            setHeure(heures + ":" + minutes + ":" + secondes);
            setDate(jourNom + ", " + jourNumero + " " + mois + " " + annee);

            setTimeout(affichageHeure, 1000);
        };

        affichageHeure();
    }, []);

    return (
        <header>
            <section>
                <article  className='header'>
                    <h1 className="name">{lastname}{firstname}</h1>
                </article>
                <article className='card cardTime card-one'>
                    <div className="horloge">
                        <p className="card-title heures">{heure}</p>
                        <p className="card-content date">{date}</p>
                    </div>
                </article>
            </section>
        </header>
    );
}

export default Header;
