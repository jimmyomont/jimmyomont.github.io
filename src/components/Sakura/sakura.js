const Sakura = function (selecteur, options) {
if (typeof selecteur === 'undefined') {
throw new Error("Aucun selecteur specifie. Definissez un element.");
}this.el = document.querySelector(selecteur);

// Valeurs par defaut pour l'objet d'options, qui sera etendu ci-dessous.
const valeursParDefaut = {
    className: 'sakura', // Nom de classe du petale. Correspond au CSS.
    fallSpeed: 2, // Facteur de vitesse de chute du petale (plus eleve est plus lent).
    maxSize: 14, // Taille maximale du petale.
    minSize: 10, // Taille minimale du petale.
    delay: 300, // Delai entre les petales.
    colors: [
        {
            // Vous pouvez ajouter plusieurs couleurs (choisies aleatoirement) en ajoutant des elements au tableau.
            gradientColorStart: 'rgba(1, 157, 142, 0.5)', // Couleur de debut du degrade (rgba).
            gradientColorEnd: 'rgba(1, 157, 142, 0.5)', // Couleur de fin du degrade (rgba).
            gradientColorDegree: 120, // Angle de degre du degrade.
        },
    ],
};

// Fusionner les valeurs par defaut avec les options de l'utilisateur.
const etendre = function (objetOriginal, nouvelObjet) {
    Object.keys(objetOriginal).forEach(cle => {
        if (nouvelObjet && Object.prototype.hasOwnProperty.call(nouvelObjet, cle)) {
            const origine = objetOriginal;
            origine[cle] = nouvelObjet[cle];
        }
    });

    return objetOriginal;
};

this.paramètres = etendre(valeursParDefaut, options);

// Masquer les barres de defilement horizontales sur l'element cible.
this.el.style.overflowX = 'hidden';

// element aleatoire d'un tableau
function elementAleatoireDuTableau(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Entier aleatoire
function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Verifier les evenements d'animation.
const prefixes = ['webkit', 'moz', 'MS', 'o', ''];
function evenementAvecPrefixe(element, type, rappel) {
    for (let p = 0; p < prefixes.length; p += 1) {
        let typeAnim = type;

        if (!prefixes[p]) {
            typeAnim = type.toLowerCase();
        }

        element.addEventListener(prefixes[p] + typeAnim, rappel, false);
    }
}

// Verifier si l'element est dans la fenêtre d'affichage.
function elementDansFenêtreAffichage(el) {
    const rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

this.creerPetale = () => {
    if (this.el.dataset.sakuraAnimId) {
        setTimeout(() => {
            window.requestAnimationFrame(this.creerPetale);
        }, this.paramètres.delay);
    }

    // Nommer les animations. Elles doivent correspondre aux animations dans le fichier CSS.
    const nomsAnimations = {
        blowAnimations: [
            'blow-soft-left',
            'blow-medium-left',
            'blow-soft-right',
            'blow-medium-right',
        ],
        swayAnimations: [
            'sway-0',
            'sway-1',
            'sway-2',
            'sway-3',
            'sway-4',
            'sway-5',
            'sway-6',
            'sway-7',
            'sway-8',
        ],
    };

    // Obtenir une animation aleatoire de chaque type et aleatoriser le temps de chute des petales
    const animationSouffle = elementAleatoireDuTableau(nomsAnimations.blowAnimations);
    const animationOscillation = elementAleatoireDuTableau(nomsAnimations.swayAnimations);
    const tempsChute =
        (document.documentElement.clientHeight * 0.007 +
            Math.round(Math.random() * 5)) *
        this.paramètres.fallSpeed;

    // Creer les animations
    const animationsArr = [
        `fall ${tempsChute}s linear 0s 1`,
        `${animationSouffle} ${(tempsChute > 30 ? tempsChute : 30) -
            20 +
            entierAleatoire(0, 20)}s linear 0s infinite`,
        `${animationOscillation} ${entierAleatoire(2, 4)}s linear 0s infinite`,
    ];
    const animations = animationsArr.join(', ');

    // Creer le petale et lui donner une taille aleatoire.
    const petale = document.createElement('div');
    petale.classList.add(this.paramètres.className);
    const hauteur = entierAleatoire(this.paramètres.minSize, this.paramètres.maxSize);
    const largeur = hauteur - Math.floor(entierAleatoire(0, this.paramètres.minSize) / 3);

    // Obtenir une couleur aleatoire.
    const couleur = elementAleatoireDuTableau(this.paramètres.colors);

    petale.style.background = `linear-gradient(${couleur.gradientColorDegree}deg, ${couleur.gradientColorStart}, ${couleur.gradientColorEnd})`;
    petale.style.webkitAnimation = animations;
    petale.style.animation = animations;
    petale.style.borderRadius = `${entierAleatoire(
        this.paramètres.maxSize,
        this.paramètres.maxSize + Math.floor(Math.random() * 10),
    )}px ${entierAleatoire(1, Math.floor(largeur / 4))}px`;
    petale.style.height = `${hauteur}px`;
    petale.style.left = `${Math.random() * document.documentElement.clientWidth -
        100}px`;
    petale.style.marginTop = `${-(Math.floor(Math.random() * 20) + 15)}px`;
    petale.style.width = `${largeur}px`;

    // Supprimer les petales dont l'animation est terminee.
    evenementAvecPrefixe(petale, 'AnimationEnd', () => {
        if (!elementDansFenêtreAffichage(petale)) {
            petale.remove();
        }
    });

    // Supprimer les petales qui sortent de la fenêtre d'affichage.
    evenementAvecPrefixe(petale, 'AnimationIteration', () => {
        if (!elementDansFenêtreAffichage(petale)) {
            petale.remove();
        }
    });

    // Ajouter le petale à l'element cible.
    this.el.appendChild(petale);
};

this.el.setAttribute(
    'data-sakura-anim-id',
    window.requestAnimationFrame(this.creerPetale),
);
};

Sakura.prototype.start = function () {
const animId = this.el.dataset.sakuraAnimId;
if (!animId) {
this.el.setAttribute(
'data-sakura-anim-id',
window.requestAnimationFrame(this.creerPetale),
);
} else {
throw new Error('Sakura est dejà en cours d\'execution.');
}
};

Sakura.prototype.stop = function (doux = false) {
const animId = this.el.dataset.sakuraAnimId;
if (animId) {
window.cancelAnimationFrame(animId);
this.el.setAttribute('data-sakura-anim-id', '');
}
// Supprimer toutes les fleurs actuelles en une fois.
// Vous pouvez egalement definir 'doux' sur true pour empêcher la creation de nouveaux petales.
// Ainsi, les petales ne seront pas supprimes brusquement.
if (!doux) {
    setTimeout(() => {
        const petales = document.getElementsByClassName(this.paramètres.className);
        while (petales.length > 0) {
            petales[0].parentNode.removeChild(petales[0]);
        }
    }, this.paramètres.delay + 50);
}
};