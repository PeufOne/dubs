# DUBS APICULTURE

👉 [dubs-apiculture.ch](https://dubs-apiculture.ch/)

## Installation de l'environment de dev

```sh
cp .env backend/.env
cp .env frontend/.env
pnpm install
pnpm run dev -r
```

## Start server

with root user 
```sh
mongod --fork --logpath /var/log/mongodb/mongod.log
```

With dubs user
```sh
cd app
pnpm run --filter ./backend  serve
pnpm run --filter ./frontend  serve
```

## TODO

- [x] Profile
  - [x] Affichage et mise à jour du profile
  - [x] Affichage des commandes
- [x] Boutique
  - [x] Faire une commande
  - [x] Envoie des mails lors de la commande
- [x] Section réserver à l'admin
  - [x] Navigation dans les actions
  - [ ] Vue des commandes + changement de status / paiement
  - [ ] Validation du panier pour un client
- [x] Faire un page avec une action prédéfini (la recherche étant réservé l'admin)
- [x] Faire le tour du contenu avec Mathilde
- [x] Débug navigation
- [x] Gerer la récupération de compte
