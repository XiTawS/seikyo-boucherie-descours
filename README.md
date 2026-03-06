# Boucherie J. Descours — Site vitrine

Site vitrine one-page pour **Boucherie Charcuterie Traiteur J. Descours** à Saint-Donat-sur-l'Herbasse (Drôme).

## Infos client

| | |
|---|---|
| **Nom** | Boucherie Charcuterie Traiteur J. Descours |
| **Adresse** | 8 Av. Georges Bert, 26260 Saint-Donat-sur-l'Herbasse |
| **Téléphone** | 04 75 02 88 25 |
| **Email** | boucheriejdescours@orange.fr |
| **Facebook** | [577 followers](https://www.facebook.com/p/Boucherie-Charcuterie-Traiteur-J-Descours-100063821301619/) |
| **Site existant** | [eatbu.com](https://boucherie-charcuterie-traiteur-descours.eatbu.com/?lang=fr) |
| **Services** | Boucherie, Charcuterie, Traiteur, Buffet, Réceptions mariage, À emporter |
| **Paiement** | CB, Sans contact, Apple Pay, Ticket Restaurant, Chèque, Espèces |

## Horaires

| Jour | Horaires |
|---|---|
| Lundi | 6h30–12h30 / 15h–19h30 |
| Mardi | 6h30–12h30 / 15h–19h30 |
| Mercredi | Fermé |
| Jeudi | 6h30–12h30 / 15h–19h30 |
| Vendredi | 6h30–19h30 |
| Samedi | 6h30–19h30 |
| Dimanche | 6h30–12h30 |

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **CMS** : Inline CMS Seikyo (MongoDB + Cloudinary)
- **Auth** : NextAuth v5 (Credentials)
- **Déploiement** : Vercel

## Design

- **Palette** : Rouge bordeaux #8B2030, or #C4943D, crème chaud #FAF6F1, dark #1A1210
- **Typographie** : Playfair Display italic (display) + DM Sans (body)
- **Ton** : Artisan boucher traditionnel, chaleureux, fabrication maison

## Sections

1. **Hero** — Image devanture + "J. Descours" italique + CTA
2. **Savoir-faire** — 4 services (Boucherie, Charcuterie, Traiteur, À emporter)
3. **Image Break** — Parallax + citation éditable
4. **Galerie** — Bento full-width (4 cols, 8 images)
5. **Horaires + Services** — Split dark (horaires gauche / services droite)
6. **Contact** — Split (infos + CTA gauche / Google Maps droite)

## CMS

- **Login** : `/login`
- **Identifiants** : `boucherie` / `descours2026`
- **SITE_ID** : `boucherie-descours`

## Variables d'environnement

```
MONGODB_URI
NEXTAUTH_SECRET
NEXTAUTH_URL
SITE_ID
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

## Créé par

[Seikyo](https://seikyo.fr) — Sites vitrines sur mesure pour professionnels.