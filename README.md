# NextSend PDF (ou [Nom de votre Projet])

Une application web moderne construite avec **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, et intégrant un système automatisé de traitement de formulaires de contact avec génération de PDF à la volée et envoi d'e-mails sécurisés via **Resend**.

---

## 🚀 Fonctionnalités Clés

- **Validation Robuste côté Serveur & Client** : Utilisation de **Zod** et **React Hook Form** pour garantir l'intégrité et la conformité des données soumises.
- **Génération Dynamique de PDF** : Transformation instantanée des données du formulaire en un document PDF professionnel au format A4 avec `@react-pdf/renderer`.
- **Envoi d'E-mails Automatisé** : Expédition instantanée de l'e-mail avec le fichier PDF joint en pièce jointe grâce à l'intégration de l'API **Resend**.
- **Server Actions Next.js** : Logique de traitement sécurisée s'exécutant directement sur le serveur sans API routes intermédiaires traditionnelles.
- **Interface Réactive et Moderne** : Design soigné et responsive stylisé avec **Tailwind CSS v4**.

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 16 (App Router)](https://nextjs.org/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Style** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Gestion des Formulaires** : [React Hook Form](https://react-hook-form.com/) & [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- **Validation** : [Zod](https://zod.dev/)
- **Génération de PDF** : [@react-pdf/renderer](https://react-pdf.org/)
- **Envoi de Mails** : [Resend SDK](https://resend.com/)

---

## 📂 Structure du Projet

Voici un aperçu de l'organisation des fichiers sous le répertoire `app/` :

```text
app/
├── actions/
│   └── sendContactForm.ts    # Action serveur de validation, génération PDF et envoi Resend
├── about/
│   └── page.tsx              # Page "À propos"
├── compoments/               # Composants réutilisables
│   ├── forms/
│   │   └── ContactForm.tsx   # Formulaire de contact avec React Hook Form & Zod
│   ├── pdf/
│   │   └── ContactPdf.tsx    # Structure et style du PDF généré (Helvetica, A4)
│   ├── NavBar.tsx            # Barre de navigation responsive (Desktop/Mobile)
│   └── Footer.tsx            # Pied de page
├── contact/
│   └── page.tsx              # Page de contact contenant le formulaire
├── lib/
│   └── validations.ts        # Schéma de validation Zod (contactSchema)
├── globals.css               # Configuration Tailwind CSS v4 et variables CSS globales
├── layout.tsx                # Layout principal (HTML structure, NavBar, Footer)
└── page.tsx                  # Page d'accueil du site
```

> [!NOTE]
> Le dossier `compoments` contient actuellement une légère coquille dans son nom (`compoments` au lieu de `components`). Vous pouvez le renommer et mettre à jour les chemins d'importation correspondants si nécessaire.

---

## ⚙️ Configuration & Installation

### 1. Prérequis
Assurez-vous d'avoir installé [Node.js](https://nodejs.org/) (version 18+ recommandée) et un gestionnaire de paquets (`npm`, `yarn`, `pnpm` ou `bun`).

### 2. Cloner et installer les dépendances
Déplacez-vous dans le dossier du projet et installez les paquets requis :

```bash
npm install
```

### 3. Variables d'environnement
Créez ou modifiez le fichier `.env.local` à la racine ou dans le répertoire `app/` :

```env
RESEND_API_KEY=votre_cle_api_resend
EMAIL_TO=votre_adresse_de_reception@domain.com
```

> [!WARNING]
> Par mesure de sécurité, évitez de laisser votre clé API Resend codée en dur dans les fichiers source (comme dans `app/actions/sendContactForm.ts`). Utilisez plutôt `process.env.RESEND_API_KEY` pour la charger de manière sécurisée.

### 4. Lancer le serveur de développement

Pour démarrer l'application localement avec le support Webpack activé par vos scripts actuels :

```bash
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur pour visualiser le projet.

---

## 🔒 Bonnes Pratiques de Sécurité Conseillées

1. **Sécuriser la clé API Resend** : Remplacer l'instanciation de Resend :
   ```typescript
   // À éviter :
   const resend = new Resend('re_XYZ...')
   
   // À privilégier :
   const resend = new Resend(process.env.RESEND_API_KEY)
   ```
2. **Adresse de destination dynamique** : Utiliser `process.env.EMAIL_TO` ou le champ d'email configuré selon vos besoins d'affaires.

---

## 📝 Licence

Ce projet est sous licence propriétaire. Tous droits réservés.
