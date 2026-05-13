# LBDM Angers — Spec Framer bloc par bloc

## DESIGN TOKENS (à configurer en premier dans Framer → Variables)

| Nom | Valeur |
|-----|--------|
| navy-dark | `#0E2140` |
| navy | `#163258` |
| navy-mid | `#1E4278` |
| orange | `#F59A23` |
| orange-dark | `#D4841A` |
| orange-light | `#FFB84D` |
| cream | `#FBF8F4` |
| ink | `#0F1E33` |
| muted | `#8896AA` |
| border | `#E2E8F0` |

**Polices (ajouter dans Framer → Assets → Fonts)**
- Titres : `Montserrat` — weights 700, 800, 900
- Corps : `DM Sans` — weights 400, 500

**Border radius global** : 8px

---

## BLOC 1 — NAVIGATION (fixe, hauteur 70px)

**Fond** : `#0E2140`  
**Border bottom** : 1px solid rgba(255,255,255, 0.07)  
**Padding** : 0 48px  
**Position** : Sticky top

### Logo (gauche)
- Carré 40×40px fond `#F59A23`, lettre **B** blanche, Montserrat 900, 22px
- Texte à droite :
  - Ligne 1 : `LA BOUTIQUE DU` — Montserrat 500, 10px, blanc 60%, letter-spacing 2.5px
  - Ligne 2 : `MENUISIER ANGERS` — Montserrat 800, 14px, blanc, letter-spacing 0.5px

### Droite
- Icône téléphone (SVG fill `#F59A23`) + `06 80 25 58 65` — Montserrat 700, 15px, blanc
- Bouton `Devis gratuit` — fond `#F59A23`, texte `#0F1E33`, Montserrat 700, 13px, border-radius 50px, padding 10px 22px

---

## BLOC 2 — HERO (hauteur 100vh)

**Fond** : `#0E2140`  
**Image de fond** : `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80&auto=format` — opacité 18%

**Layout** : 2 colonnes — gauche (flex 1) | droite (410px fixe) — gap 72px  
**Padding** : 72px 48px 80px  
**Max-width** : 1240px centré

### Colonne gauche

**Eyebrow** (texte au-dessus du H1) :
- `ARTISAN CERTIFIÉ · ANGERS & MAINE-ET-LOIRE`
- Montserrat 700, 11px, `#F59A23`, letter-spacing 2.5px, tout en majuscules
- Précédé d'un trait orange 28×3px

**H1** :
```
Votre porte,
notre savoir-faire.
```
- Montserrat 900, 66px (clamp 36→66px), line-height 1.05, blanc
- `savoir-faire.` en `#F59A23` avec soulignement orange (4px, opacité 50%)

**Paragraphe** :
```
Portes d'entrée et menuiseries sur mesure fabriquées en France.
Aluminium, PVC, bois, mixte — posées par nos artisans à Angers.
Devis gratuit chez vous sous 24h.
```
- DM Sans 400, 17px, blanc 65%, line-height 1.75

**Boutons** (gap 16px) :
- Primaire : `> Obtenir mon devis gratuit` — fond `#F59A23`, texte `#0F1E33`, Montserrat 800, 15px, border-radius 50px, padding 16px 32px, shadow `0 8px 28px rgba(245,154,35,.45)`
- Secondaire : `📞 Appeler maintenant` — bordure 1.5px blanc 22%, texte blanc, Montserrat 600, 15px, border-radius 50px

**Badge Google Reviews** :
- Logo Google couleur + 5 étoiles jaunes + `5,0` + `· Avis Google`
- Fond blanc 8%, border-radius 50px, padding 8px 16px

**KPIs** (3 colonnes séparées par une ligne verticale 1px blanc 12%) :
| Chiffre | Label |
|---------|-------|
| `+200` | CHANTIERS EN MAINE-ET-LOIRE |
| `24h` | DEVIS À DOMICILE |
| `30%` | D'ÉCONOMIES AVEC LES AIDES |
- Chiffres : Montserrat 800, 22px, `#F59A23`
- Labels : DM Sans 500, 10px, blanc 40%, letter-spacing 1px, majuscules

### Colonne droite — Formulaire

**Carte** : fond blanc, border-radius 12px, shadow `0 24px 80px rgba(0,0,0,.65)`

**En-tête carte** : fond `#163258`, padding 22px 28px  
- Titre : `Devis gratuit & sans engagement` — Montserrat 800, 15px, blanc

**Corps carte** : padding 28px

**Sous-titre** : `Visite à domicile offerte · Réponse sous 24h · Aucun frais caché`  
- DM Sans 13px, muted — `24h` en gras orange

**Champs du formulaire** (labels Montserrat 700, 11px, `#163258`, majuscules, letter-spacing 0.8px) :
- Ligne : [Prénom] [Nom] — 2 colonnes gap 12px
- [Téléphone] — placeholder `06 XX XX XX XX`
- [Email] — placeholder `jean@exemple.fr`
- [Votre projet] — menu déroulant :
  - Porte d'entrée aluminium
  - Porte d'entrée PVC
  - Porte d'entrée bois
  - Porte d'entrée mixte bois / alu
  - Fenêtres & baies vitrées
  - Volets roulants
  - Plusieurs produits
- [Message (optionnel)] — textarea 72px hauteur, placeholder `Décrivez votre projet…`

**Focus fields** : bordure orange + shadow `0 0 0 3px rgba(245,154,35,.14)`

**Bouton submit** : `> Envoyer ma demande`  
- 100% largeur, fond `#F59A23`, texte `#0F1E33`, Montserrat 800, 15px, border-radius 50px, padding 16px, shadow `0 6px 20px rgba(245,154,35,.4)`

**Note bas** : `🔒 Données confidentielles · Aucun démarchage` — DM Sans 11px, muted, centré

---

## BLOC 3 — BANDE ORANGE (Strip)

**Fond** : `#F59A23`  
**Padding** : 28px 48px  
**Layout** : 4 items en ligne, séparés par des traits verticaux 1px `rgba(14,33,64,.2)`

| Icône | Titre | Sous-titre |
|-------|-------|-----------|
| maison | `Fabriqué en Aveyron` | Castes Industrie · depuis 1960 |
| cadenas | `Serrure 5 points` | Standard de série · 5 clés incluses |
| bouclier | `Triple vitrage` | Feuilleté anti-effraction |
| euro | `Aides de l'État` | MaPrimeRénov' · CEE · TVA 5,5% |

- Titres : Montserrat 600, 16px, `#0E2140`
- Sous-titres : DM Sans 500, 12px, `#0E2140` opacité 75%
- Icônes SVG fill `#0E2140`, 38×38px

---

## BLOC 4 — PRODUITS

**Fond** : blanc  
**Padding** : 100px 48px  
**Max-width** : 1240px centré

**Tag** : `— Nos gammes` — Montserrat 700, 11px, `#F59A23`, letter-spacing 2.5px  
**H2** : `Chaque maison mérite la bonne menuiserie.` — Montserrat 900, 44px, `#0F1E33`  
**Lead** : `Aluminium, PVC, bois, mixte — quatre matériaux, une seule expertise…` — DM Sans 17px, muted

**Grille** : 4 colonnes égales, gap 20px

### Carte Aluminium (+ badge "+ Populaire")
- Image : `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80`
- Mat strip : `ALUMINIUM` fond `#163258`, texte `#F59A23`
- Nom : `Portes d'entrée Alu`
- Desc : `Le choix du design et de la durabilité. Rigidité extrême, 21 coloris RAL, isolation jusqu'à UD 1,15.`
- Features : Rupture de pont thermique totale / Labels Qualificoat & Qualimarine / 100% recyclable · brevet monobloc

### Carte PVC
- Image : `https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80`
- Mat strip : `PVC`
- Nom : `Fenêtres & Portes PVC`
- Desc : `Performance thermique jusqu'à UW 1,0. Entretien minimal, large choix de teintes.`
- Features : Certifié NF · marquage CE / PVC 99% recyclable / Éligible crédit d'impôt

### Carte Bois
- Image : `https://images.unsplash.com/photo-1464146072230-91cabc968ddb?w=600&q=80`
- Mat strip : `BOIS`
- Nom : `Menuiseries Bois`
- Desc : `Chaleur, authenticité et caractère. Idéal pour les maisons de caractère angevines.`
- Features : Finitions artisanales sur mesure / Bois massif certifié PEFC / Teintes & lasures personnalisables

### Carte Mixte (badge "Nouveauté" fond navy, texte orange)
- Image : `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80`
- Mat strip : `MIXTE BOIS / ALU`
- Nom : `Portes Mixtes`
- Desc : `Bois à l'intérieur, aluminium à l'extérieur. Le confort du premier, la robustesse du second.`
- Features : Isolation thermique optimale / Alu extérieur sans entretien / Design bicolore exclusif

**Style carte** :
- Fond blanc, bordure 1.5px `#E2E8F0`, border-radius 14px
- Hover : translateY(-6px), shadow `0 20px 48px rgba(14,33,64,.14)`, bordure orange
- Footer carte : `Demander un devis →` — hover fond orange, texte ink

---

## BLOC 5 — MÉTHODE (fond navy, diagonale)

**Fond** : `#163258`  
**Clip-path** : `polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)`  
**Padding** : 120px 48px  
**Layout** : 2 colonnes égales, gap 80px

### Colonne gauche
**Tag** : `— Notre méthode` orange  
**H2** : `De la visite à la pose, on gère tout.` — Montserrat 900, blanc  
**Lead** : `Depuis 1999, La Boutique du Menuisier accompagne ses clients avec une méthode simple…` — blanc 50%

### Colonne droite — 4 étapes
| N° | Titre | Description |
|----|-------|-------------|
| 01 | Conception & conseil | Un conseiller se déplace chez vous — gratuitement, sans engagement — pour mesurer, écouter et proposer les solutions adaptées. |
| 02 | Fabrication française | Vos menuiseries sont fabriquées sur mesure en Aveyron dans les 30 000 m² d'ateliers de Castes Industrie, certifiés NF. |
| 03 | Pose professionnelle | Nos artisans qualifiés installent avec soin. Chaque pose est propre, rapide et garantie dans les règles de l'art. |
| 04 | Suivi & SAV local | Votre boutique Angers reste votre interlocuteur unique après la pose. |

- Numéros : Montserrat 900, 48px, `#F59A23`, opacité 25% (100% au hover)
- Titres : Montserrat 800, 17px, blanc
- Descriptions : DM Sans 14px, blanc 50%
- Séparateur entre étapes : 1px solid rgba(255,255,255, 0.08)

---

## BLOC 6 — AIDES & FAQ

**Layout** : 2 colonnes — fond navy-dark gauche (aides) + fond blanc droite (FAQ)  
**Padding** : 80px 48px chaque côté

### Encart aides (fond `#0E2140`)
- Emoji : 💶
- Titre : `Jusqu'à 30 % d'économies sur votre projet` — Montserrat 800, 22px, blanc
- Texte : `MaPrimeRénov', CEE, TVA à 5,5 %, éco-PTZ… Nos conseillers gèrent les démarches à votre place. Comme Laurent V. (Cholet) qui a économisé **plus de 2 000 €** sur son projet sans lever le petit doigt.`
- CTA texte : `→ Demandez votre simulation d'aides gratuite` — `#F59A23`

### FAQ (5 questions accordéon)
1. **Quel est le prix d'une porte d'entrée aluminium à Angers ?**  
   → Entre 1 500 € et 4 500 € pose comprise. Avec MaPrimeRénov', le reste à charge peut être significativement réduit.

2. **Quel délai pour la pose de fenêtres ou d'une porte d'entrée ?**  
   → 4 à 8 semaines fabrication + 1 à 2 jours pour la pose.

3. **La TVA à 5,5 % s'applique-t-elle à mes menuiseries ?**  
   → Oui, pour les travaux de rénovation énergétique dans les logements de plus de 2 ans.

4. **Quelle est la différence entre une porte aluminium et une porte PVC ?**  
   → Aluminium : design fin, RAL sur mesure, rigidité. PVC : budget maîtrisé, performant, sans entretien.

5. **Intervenez-vous dans toute l'agglomération angevine ?**  
   → Tout le Maine-et-Loire : Angers, Saint-Barthélemy, Les Ponts-de-Cé, Avrillé, Trélazé, Cholet, Saumur.

**Style accordéon** : question Montserrat 700, 15px, navy. Réponse DM Sans 15px, muted. Bouton +/×.

---

## BLOC 7 — TÉMOIGNAGES

**Fond** : `#FBF8F4` (cream)  
**Padding** : 100px 48px  
**Grille** : 3 colonnes égales, gap 24px

### 3 avis (5 étoiles chacun, fill `#F59A23`)

**Marie-Claire B.** — Saint-Barthélemy-d'Anjou  
> « Remplacement de 6 fenêtres et de notre porte d'entrée aluminium. Résultat impeccable, les artisans étaient sérieux et propres. La différence de confort thermique est immédiate ! »

**Philippe & Nathalie R.** — Saumur  
> « Devis reçu en 24h, conseiller à l'écoute et sans pression. Ma porte mixte bois/alu est absolument magnifique — mes voisins me demandent l'adresse ! »

**Laurent V.** — Cholet  
> « Ils ont géré les démarches MaPrimeRénov' à notre place. On a économisé plus de 2 000 € sur notre projet. Service irréprochable du début à la fin. »

**Style carte** : fond blanc, border-radius 16px, shadow légère, padding 28px  
**Avatar** : cercle 40px, fond `#163258`, initiale blanche, Montserrat 800

---

## BLOC 8 — CTA FINALE

**Fond** : `#0E2140` avec légère texture diagonale orange (opacité 5%)  
**Padding** : 120px 48px  
**Centré**

**Pré-titre** : `Votre projet mérite mieux qu'un devis en ligne` — DM Sans 15px, blanc 50%  
**H2** : `Rencontrons-nous. C'est gratuit.` — Montserrat 900, 56px, blanc — *C'est gratuit.* en italique  
**Lead** : `Un conseiller La Boutique du Menuisier Angers se déplace chez vous dans tout le Maine-et-Loire. Mesures, conseils, devis — offerts, sans engagement.`

**Boutons** :
- `> Obtenir mon devis gratuit` — orange, 18px, padding 18px 40px
- `📞 06 80 25 58 65` — ghost blanc, 18px, padding 17px 36px

**Réassurances** (3 items en ligne) :
- 🛡 Aucun engagement
- ✓ Réponse sous 24h
- 🔒 Données confidentielles

---

## BLOC 9 — FOOTER

**Fond** : `#0E2140`  
**Padding** : 64px 48px  
**Layout** : 3 colonnes

### Colonne 1 — Identité
- Nom : `La Boutique du Menuisier` — Montserrat 800, 16px, blanc
- Ville : `Angers · Maine-et-Loire` — orange
- Description : `Artisan expert en menuiseries et portes d'entrée sur mesure. Réseau Castes Industrie — fabriqué en Aveyron depuis 1960.`
- Téléphone : `06 80 25 58 65`
- Email : `angers@laboutiquedumenuisier.fr`
- Adresse : `10 Rue des Métiers, 49130 Sainte-Gemmes-sur-Loire`

### Colonne 2 — Produits
- Portes d'entrée aluminium
- Portes d'entrée PVC
- Portes d'entrée bois
- Portes mixtes bois / alu
- Fenêtres & baies vitrées
- Volets roulants

### Colonne 3 — Infos
- Avis clients
- Demander un devis
- Mentions légales
- Confidentialité

**Pied de page** : `© 2025 La Boutique du Menuisier Angers` | `« La confiance, ça ne s'achète pas, ça se gagne ! »`

---

## INTERACTIONS À RECRÉER DANS FRAMER

| Interaction | Déclencheur | Effet |
|-------------|------------|-------|
| Nav shadow | Scroll > 8px | box-shadow apparaît |
| Cards produits | Hover | translateY -6px + bordure orange |
| Boutons | Hover | translateY -2px + couleur plus claire |
| FAQ | Click | Accordéon expand/collapse |
| Form submit | Click | Modal de confirmation |
| KPI reveal | Scroll in view | Fade up (IntersectionObserver) |

---

## FORMULAIRE — CONNEXION MAKE (à brancher plus tard)

Quand tu crées le formulaire dans Framer :
- **Action** : POST vers ton webhook Make
- **Format** : JSON avec les champs `prenom`, `nom`, `tel`, `email`, `projet`, `message`
- **On success** : afficher le bloc de confirmation + déclencher l'event `generate_lead`

---

## ORDRE DE CONSTRUCTION RECOMMANDÉ

1. Variables (couleurs + typos)
2. Nav
3. Hero colonne gauche
4. Formulaire (colonne droite)
5. Strip orange
6. Section produits (1 carte → dupliquer ×4)
7. Section méthode
8. FAQ
9. Témoignages
10. CTA finale
11. Footer
12. Responsive mobile (breakpoint 768px)
