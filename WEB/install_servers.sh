#!/bin/bash

echo "installation du serveur front-end..."
echo "---"
version=$(node -v)
version_number=$(echo $version | cut -c 2- | cut -d '.' -f 1)

if ((version_number < 18)); then
  echo "Erreur : La version de Node est inférieure à 18." >&2
  exit
fi

folder_path="node_modules/"

if [ -d "$folder_path" ]; then
  echo "Le dossier \"node_modules\" existe. Suppression en cours..."
  rm -r "$folder_path"
  echo "Le dossier a été supprimé."
fi

echo "installation des librairies npm... (cela peut prendre du temps)"
npm install --silent
echo "installation des librairies npm terminée."
echo "---"
echo "installation du serveur front-end terminée"
echo "Pour lancer le serveur, exécutez la commande suivante:"
echo "npm run dev"

echo "Voulez-vous installer le serveur back-end..."