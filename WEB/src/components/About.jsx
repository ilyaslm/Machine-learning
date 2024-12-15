import { github, colab } from '../assets';
import React, { useState } from 'react';



export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='mt-20'>
      <div className='flex justify-center'>
        <h1 className="text-4xl font-bold" style={{ color: '#6B8915' }}>Fondamentaux de l‘Apprentissage Automatique - 8INF867 - Travail d’équipe</h1>
      </div>
      <div className="flex mt-16 gap-10">
        <div className="w-1/2 border border-gray-300 p-4 rounded ml-4">
          <h2 className="text-xl font-bold" style={{ color: '#6B8915' }}>Sujet</h2>
          <p className='text-justify'>Ce projet d'équipe consiste à créer un modèle de classification en utilisant un dataset de notre choix. Les tâches comprennent la préparation des données, la réduction de dimension, l'utilisation de trois modèles au choix, l'évaluation des modèles et la création d'une interface utilisateur. L'équipe doit effectuer des prétraitements de données, appliquer des techniques de réduction de dimension, entraîner les modèles et évaluer leurs performances. Une interface utilisateur doit permettre de tester de nouveaux objets et afficher les résultats et les métriques de chaque modèle.</p>
        </div>
        <div className="w-1/2 border border-gray-300 p-4 rounded mr-4">
          <h2 className="text-xl font-bold" style={{ color: '#6B8915' }}>Réalisé par</h2>
          <ul className="mt-2 py-2 ml-4 mr-4">
            <li className="border-b border-gray-300">Ghita ZAHDI</li>
            <li className="border-b border-gray-300">Ilyas LAMMISSI</li>

            
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <div className="border border-gray-300 p-4 rounded mx-4 flex flex-col items-center">
          <h2 className="text-xl font-bold" style={{ color: '#6B8915' }}>Notre sujet</h2>
          <p className="text-justify">Aujourd'hui nous avons accès a une mutitudes d'articles sur internet et parmis eux beaucoup sont trompeurs. lls peuvent semer la confusion, influencer les opinions publiques, polariser les débats et compromettre la confiance dans les médias et les institutions. Pour lutter contre ce problème, notre projet a été développé pour détecter les fake news en ligne dans les articles de presse. L'objectif est de fournir aux utilisateurs une évaluation fiable de la crédibilité des articles, les aidant ainsi à prendre des décisions éclairées et à contrer la propagation des fausses informations, renforçant ainsi la confiance dans les informations en ligne et promouvant un journalisme responsable.</p>
          <div className="flex gap-4">
            <button
              onClick={() => window.open("", "_blank")}
              className="p-2 bg-black text-white hover:bg-white hover:text-black rounded flex items-center justify-center gap-2"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <img 
                src={github}
                alt="GitHub Logo"
                className="w-6 h-6"
              />
              <span>Github</span>
            </button>
            <button
              onClick={() => window.open("", "_blank")}
              className="p-2 bg-black text-white hover:bg-white hover:text-black rounded flex items-center justify-center gap-2"
              
            >
              <img 
                src={github}
                alt="GitHub Logo"
                className="w-6 h-6"
              />
              <span>Notebook - Prétraitements</span>
            </button>
            <button
              onClick={() => window.open("", "_blank")}
              className="p-2 bg-white text-black hover:bg-black hover:text-white rounded flex items-center justify-center gap-2"
            >
              <img 
                src={colab}
                alt="Colab Logo"
                className="w-6 h-6"
              />
              <span>Google Colab - Entraînement</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
