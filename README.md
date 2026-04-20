# LettreRapide - Service d'Envoi de Courriers en Ligne

Application web Next.js pour l'envoi de courriers recommandés et lettres suivies en ligne.

## ✅ Production Ready

This project is fully configured and ready for Netlify deployment with all critical issues resolved.

## 🚀 Déploiement sur Netlify

### Prérequis
- Compte Netlify
- Repository GitHub connecté à Netlify

### Configuration Netlify

Le projet est configuré pour un déploiement automatique sur Netlify via le fichier `netlify.toml`.

#### Paramètres de Build
- **Build command**: `npm run build`
- **Publish directory**: Géré automatiquement par le plugin Next.js
- **Node version**: 20
- **Plugin**: @netlify/plugin-nextjs v5.7.5 (automatique)

#### Fonctionnalités de Déploiement

✅ **Build optimisé**:
- Next.js 16.1.6 avec les derniers correctifs de sécurité
- 21 routes statiques générées automatiquement
- Génération de pages statiques pour des performances optimales

✅ **Sécurité**:
- En-têtes de sécurité configurés (X-Frame-Options, X-Content-Type-Options, etc.)
- Protection XSS et Clickjacking
- Politique de permissions stricte

✅ **Performance**:
- Cache immutable pour les assets statiques (1 an)
- Images non optimisées (compatible Netlify)
- Télémétrie Next.js désactivée en CI

#### Variables d'Environnement

Les variables d'environnement peuvent être configurées dans le dashboard Netlify:
1. Allez dans **Site settings > Environment variables**
2. Ajoutez les variables nécessaires (voir `.env.example`)

Pour le moment, l'application ne nécessite aucune variable d'environnement obligatoire.

### Déploiement via GitHub

1. **Connecter le repository à Netlify**:
   - Allez sur https://app.netlify.com
   - Cliquez sur "Add new site" > "Import an existing project"
   - Sélectionnez "GitHub"
   - Choisissez le repository `lotfiissa06/lettre-test-3`

2. **Configuration automatique**:
   - Netlify détectera automatiquement le fichier `netlify.toml`
   - Les paramètres de build seront appliqués automatiquement
   - Cliquez sur "Deploy site"

3. **Déploiement continu**:
   - Chaque push sur la branche principale déclenchera un nouveau déploiement
   - Les preview deployments sont créés automatiquement pour les PRs

### Déploiement Manuel

Si vous souhaitez déployer manuellement:

```bash
# Installer la CLI Netlify
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Initialiser le site
netlify init

# Déployer en production
netlify deploy --prod
```

## 💻 Développement Local

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Créer un build de production
npm run start    # Lancer le serveur de production
npm run lint     # Vérifier le code avec ESLint (à configurer)
```

## 🏗️ Structure du Projet

```
lettre-test-3/
├── app/                    # Pages et layouts (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout principal
│   ├── error.tsx          # Page d'erreur
│   ├── not-found.tsx      # Page 404
│   ├── envoyer/           # Parcours d'envoi
│   ├── form/              # Formulaires (recommandée, suivie, verte)
│   ├── suivi/             # Suivi de courrier
│   ├── contact/           # Contact
│   ├── faq/               # FAQ
│   └── [pages légales]/   # CGV, mentions légales, etc.
├── components/            # Composants réutilisables
├── lib/                   # Utilitaires
├── public/                # Assets statiques
├── styles/                # Styles globaux
├── netlify.toml          # Configuration Netlify
├── next.config.mjs       # Configuration Next.js
└── .env.example          # Variables d'environnement (exemple)
```

## 🔧 Stack Technique

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Analytics**: Vercel Analytics
- **Deployment**: Netlify with Next.js plugin

## 📝 Corrections Récentes

### Version 2.0 (Janvier 2026)

1. ✅ **Erreurs de Build Corrigées**:
   - Suppression des blocs de code dupliqués dans `pricing-cards.tsx` et `steps-section.tsx`
   - Build complet réussi avec 21 routes générées

2. ✅ **Mise à Jour de Sécurité**:
   - Next.js mis à jour de 16.0.10 vers 16.1.6
   - Correction de 3 vulnérabilités de haute sévérité (DoS, consommation mémoire)

3. ✅ **Optimisation Netlify**:
   - Configuration de sécurité avancée avec en-têtes HTTP
   - Stratégie de cache optimale pour les assets statiques
   - Désactivation de la télémétrie en CI

4. ✅ **Documentation**:
   - Ajout de `.env.example` pour documenter les variables d'environnement futures
   - README mis à jour avec les dernières configurations

### Fonctionnalités à Intégrer (Optionnel)

- [ ] Backend API pour traitement réel des commandes
- [ ] Intégration paiement (Stripe, PayPal)
- [ ] Service d'email pour le contact et notifications
- [ ] Système de tracking réel des envois
- [ ] Authentification utilisateur
- [ ] Dashboard utilisateur

## 🔒 Sécurité

- Pas de secrets dans le code source
- Variables d'environnement gérées via Netlify
- En-têtes de sécurité HTTP configurés
- Images non optimisées (configuré pour Netlify)
- Protection contre XSS, Clickjacking et MIME sniffing
- Aucune vulnérabilité connue (Next.js 16.1.6)

## 🎯 Statut de Production

- ✅ Build réussi (21/21 routes)
- ✅ Sécurité vérifiée (0 vulnérabilités)
- ✅ Configuration Netlify optimisée
- ✅ Tests manuels passés (toutes les routes fonctionnent)
- ✅ 404 et pages d'erreur fonctionnelles
- ✅ Prêt pour le déploiement en production

## 📞 Support

Pour toute question:
- Email: contact@lettrerapide.online
- GitHub Issues: [Créer un issue](https://github.com/lotfiissa06/lettre-test-3/issues)

## 📄 License

Propriétaire - Tous droits réservés
