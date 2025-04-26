# 📩 Free Mobile SMS Piece

Cette pièce Activepieces permet d’envoyer des SMS via l’API gratuite de Free Mobile.

---

## 🚀 Fonctionnalité

| Action  | Description                                  |
|---------|----------------------------------------------|
| `send_sms` | Envoie un SMS à ton propre numéro via l’API Free Mobile |

---

## ⚙️ Pré-requis

Avant d’utiliser cette pièce :

1. Être abonné Free Mobile
2. Activer le service de notifications par SMS dans l’espace abonné :
    - [https://mobile.free.fr/moncompte/](https://mobile.free.fr/moncompte/)
    - Rubrique « Gérer mon compte » > « Notifications par SMS »

Tu obtiendras un **identifiant (`user`)** et un **mot de passe (`pass`)** à utiliser dans cette pièce.

---

## 🧩 Paramètres de l’action `send_sms`

| Paramètre | Type        | Requis | Description                                |
|-----------|-------------|--------|--------------------------------------------|
| `user`    | short text  | ✅     | Identifiant utilisateur Free Mobile       |
| `pass`    | short text  | ✅     | Mot de passe API généré par Free           |
| `msg`     | short text  | ✅     | Contenu du SMS à envoyer                   |

---

## 🔧 Exemple d'utilisation dans un workflow

1. Ajoute une action « Free SMS > Envoyer un SMS »
2. Saisis tes identifiants Free Mobile
3. Déclenche le workflow manuellement ou via un trigger

---

## 👨‍💻 Développement local

Si tu souhaites modifier cette pièce :

```bash
cd packages/pieces/community/free-sms
npm install
npx tsc
```

---

## 📦 Installation

```bash
npm install @tonscope/free-sms-piece
```

---

## 📜 Licence

Ce projet est sous licence **GNU GPLv3**.

Vous êtes libre de l’utiliser, de le modifier, et de le redistribuer sous les mêmes termes.  
Voir le fichier [`LICENSE`](./LICENSE) pour plus d’informations.

---

## 👨‍💻 Auteur

**Julien SIMONCINI**  
Email : [julien@simoncini.fr](mailto:julien@simoncini.fr)
