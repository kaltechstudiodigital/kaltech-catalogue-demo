# Catalogue de démonstration — Kaltech Studio Digital

Boutique fictive : six articles, filtres, recherche, tri, fiches avec pointure et quantité, sélection multi-produits, total et message WhatsApp préparé. Aucun paiement, aucun envoi automatique, aucune base de données. La sélection reste en mémoire et se vide au rechargement.

## Démarrer sur Windows

1. Extraire tout le ZIP dans un dossier.
2. Ouvrir ce dossier avec **VS Code > Fichier > Ouvrir le dossier**.
3. Double-cliquer sur `index.html` pour ouvrir le catalogue dans Chrome ou Edge. Aucune installation et aucun `npm install` nécessaires.
4. Si vous disposez déjà de Live Server, son bouton Go Live convient également.

Les photos sont incluses. Les polices en ligne sont facultatives : sans Internet, une police système prend le relais. WhatsApp nécessite Internet et un compte connecté sur la machine ou le téléphone. Le navigateur peut demander de confirmer l’ouverture de l’application. Le lien s’ouvre dans la même fenêtre pour ne pas dépendre des fenêtres surgissantes.

## Tester avant de filmer

- Filtrer Sacs puis Chaussures, rechercher un produit et trier les prix.
- Ouvrir les baskets et choisir une pointure.
- Saisir **5** ou **10** dans Quantité, tester +/− et le sous-total.
- Ajouter deux articles, ouvrir Ma sélection, modifier une quantité, retirer une ligne.
- Cliquer sur Continuer sur WhatsApp : vérifier le destinataire et le message. Ne pas l’envoyer si vous ne voulez pas effectuer le test.
- Si WhatsApp ne s’ouvre pas : Copier le message. En cas de blocage du presse-papiers local, le texte est sélectionné pour une copie manuelle.

## Code à personnaliser

- `index.html` : structure et textes de la page.
- `style.css` et `enhancements.css` : présentation responsive.
- `catalogue.js` : articles, prix, pointures, quantités et logique de sélection.
- `CONTACT` au début de `catalogue.js` : numéro international sans + ni espaces. Le lien de contact du bloc Votre catalogue est dans `index.html`.
- `assets/` : photos d’illustration provenant d’Unsplash. Certaines présentent des marques ; elles ne représentent aucun partenariat avec Kaltech. Remplacer ces photos par vos propres visuels avant une véritable vente.

Les quantités acceptent des entiers de 1 à 999 999 (garde-fou technique), sans restriction à trois choix. Les prix sont fictifs, pas les tarifs des prestations Kaltech. Les prestations sont proposées sur devis.

## Proposition de capture vidéo (25–30 secondes)

1. 0–3 s : afficher le catalogue dans le navigateur, en vue mobile.
2. 3–8 s : faire défiler les articles et sélectionner Chaussures.
3. 8–14 s : ouvrir un produit, choisir la pointure et saisir 5 ; ajouter à la sélection.
4. 14–20 s : montrer le récapitulatif et le message préparé, sans conversation privée.
5. 20–24 s : passer brièvement dans VS Code et montrer le tableau `products` de `catalogue.js`.
6. 24–30 s : revenir au site et au bloc « Et si c’était votre catalogue ? ».

Conserver la mention Démonstration visible. Masquer les notifications et ne pas filmer de secrets, d’informations personnelles ou de conversations. Montrer VS Code brièvement : le client doit surtout comprendre le résultat pour son activité. Cette démonstration ne garantit pas la rentabilité d’une publicité.

## Limites de vérification

Syntaxe et logique vérifiées automatiquement. L’ouverture réelle de WhatsApp dépend de votre navigateur et de votre session ; elle reste à tester sur votre machine. Aucun test n’envoie de message.
