import React, { useState, useEffect } from 'react'
import { server_green, server_red } from '../assets';

function CheckStatus() {
  const [isUp, setIsUp] = useState(false)

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/statut'); // dev environnement
        const responseData = await response.text();
        if (responseData.includes("UP")) {
          // Le serveur est up
          console.log("Serveur up");
          setIsUp(true);
        } else {
          // Le serveur n'est pas up
          console.log("Serveur indisponible");
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors de la vérification du statut du serveur', error);
      }
    };

    checkServerStatus();
  }, []);
  
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold" style={{ color: '#6B8915' }}>
          Statut du Serveur
        </h1>
      </div>
      {isLoading ? (
        <div className="flex justify-center mt-32">
            <div className="border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
        
      ) : (
        isUp ? (
          <div className="flex justify-center items-center mt-32">
            <img 
              src={server_green}
              alt="Server is up" 
              className="mr-2 w-8 h-8"
            />
            <p className="p-2"> Le serveur est up ! </p>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-32">
            <img
              src={server_red}
              alt="Server is down"
              className="mr-2 w-8 h-8"
            />
            <p className="p-2"> Le serveur ne semble pas être présent. Veuillez vérifier que vous avez bien mis le bon url et lancé le serveur avec python3, puis rafraichissez cette page. </p>
          </div>
        )
      )
      }
      
    </div>
  );
}

export default function CheckServerStatus() {
  return <CheckStatus />; {}
}