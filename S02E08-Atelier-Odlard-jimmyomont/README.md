# S02E08 - Atelier O'Dlard

## :dart: Le but de cet atelier

Créer une première version du site O'dlard en HTML depuis des fichiers markdown.

## :one: étape 1 : Préparer l'espace de travail

***
1. Cloner ce dépot sur votre machine. 

   Voici comment s'y prendre : 

   ```sh
   git clone adresse-ssh-de-votre-depot-github
   ```

   :information_desk_person: remplacez bien `adresse-ssh-de-votre-depot-github` par l'adresse SSH de votre dépot Github.

   ***

2. Prendre connaissance de la structure du site.
   - Le dossier `site_md` contient la version markdown du site.
   - Le dossier `site_html` contiendra la version html du site, c'est ici que nous allons travailler.

## :two: étape 2 : Préparer la structure HTML

1. Dans le dossier `site_html` se trouvent trois fichiers **pré-formatés**:
    - `index.html`
    - `houses.html`
    - `apply.html`
2. Adapter le `head` avec le bon `title` sur chaque page.
3. Dans le `body` de chaque fichier:
   - **Copier** le contenu de `index.md` et le **coller** dans le body de `index.html`
   - **Copier** le contenu de `houses.md` et le **coller** dans le body de `houses.html`
   - **Copier** le contenu de `apply.md` et le **coller** dans le body de `apply.html`
4. Découper le contenu de la manière suivante:
   - Le menu se trouvera dans `header`
   - Le contenu principal se trouvera dans `main`
   - Le pied de page qui contient les informations d'inscription (la même sur chaque page) se trouvera dans `footer`

## :three: étape 3 : Adapter le contenu md en html

Le contenu des fichiers créé est toujours au format .md On va adapter ça!

1. Dans chaque fichier, transposer le contenu markdown en HTML. Conserver la mise en page du fichier md.

:warning: **Utiliser au moins une fois chaque balise présente dans le mémo ci-dessous:** :warning:

### Mémo HTML:

- [nav](https://developer.mozilla.org/fr/docs/Web/HTML/Element/nav)
- [a](https://developer.mozilla.org/fr/docs/Web/HTML/Element/a)
- [p](https://developer.mozilla.org/fr/docs/Web/HTML/Element/p)
- [img](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Img)
- [h1-h6](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Heading_Elements)
- [br](https://developer.mozilla.org/fr/docs/Web/HTML/Element/br)
- [ul](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul)
- [ol](https://developer.mozilla.org/fr/docs/Web/HTML/Element/ol)
- [li](https://developer.mozilla.org/fr/docs/Web/HTML/Element/li)
- [section](https://developer.mozilla.org/fr/docs/Web/HTML/Element/section)
- [aside](https://developer.mozilla.org/fr/docs/Web/HTML/Element/aside)
- [strong](https://developer.mozilla.org/fr/docs/Web/HTML/Element/strong)
- [em](https://developer.mozilla.org/fr/docs/Web/HTML/Element/em)
- [hr](https://developer.mozilla.org/fr/docs/Web/HTML/Element/hr)
- [table](https://www.w3schools.com/html/html_tables.asp)

## :four: étape 4 : Commit & Push

Ouvrir le terminal dans vscode à la racine de votre projet.

1. Vérifier la liste des fichiers modifiés grâce à la commande: 

```
git status
```

2. Ajouter tous les fichiers modifiés à la liste des éléments à conserver avec:

```
git add .
```

*Note: Il est également possible d'envoyer chaque fichier un à un grâce à la commande `git add [nom_fichier]` (où on remplacera [nom_fichier] par le nom du fichier)*

3. Enregistrer la modification actuelle comme nouvelle version de notre code grâce à:

```
git commit -m"VOTRE_MESSAGE_DE_COMMIT"
```

*Note: Remplacer `VOTRE_MESSAGE_DE_COMMIT` par votre message.*

4. Envoyer la nouvelle version sur Github grâce à:

```
git push
```