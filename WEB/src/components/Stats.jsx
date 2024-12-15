import React, { useState, useEffect } from 'react';

export default function Stats() {
  const values = [
    {
      modele: "Random Forest",
      mae: 0.002539109443936371,
      rmse: 0.05016010308500689,
      accuracy: 0.9974608905560636,
      r2: 0.9898223897628078,
    },
    {
      modele: "Arbre de Décision",
      mae: 0.004966815665654901,
      rmse: 0.07023331142065957,
      accuracy: 0.9950331843343451,
      r2: 0.9800901831559834,
    },
    {
      modele: "SVM",
      mae: 0.007839992872733752,
      rmse: 0.08845202617073675,
      accuracy: 0.9921600071272663,
      r2: 0.9685670427302947,
    },
    {
      modele: "LSTM",
      mae: 0.0024333090893865444,
      rmse: 0.04729786262293804,
      accuracy: 0.9975501113585746,
      r2: 0.9910402713884846,
    }
  ];

  const firstRow = values.slice(0, 2);
  const secondRow = values.slice(2);


  const [animatedValues, setAnimatedValues] = useState(values.map(value => ({...value, mae: 0, rmse: 0, accuracy: 0, r2: 0 })));

  useEffect(() => {
    const step = 20; // en millisecondes
    const totalTime = 2000; // 2 secondes
    const totalSteps = totalTime / step;
    
    const interval = setInterval(() => {
      setAnimatedValues(animatedValues => animatedValues.map((animatedValue, index) => {
        const targetValue = values[index];
        return {
          ...animatedValue,
          mae: animatedValue.mae + (targetValue.mae / totalSteps),
          rmse: animatedValue.rmse + (targetValue.rmse / totalSteps),
          accuracy: animatedValue.accuracy + (targetValue.accuracy / totalSteps),
          r2: animatedValue.r2 + (targetValue.r2 / totalSteps),
        };
      }));
    }, step);
    
    setTimeout(() => clearInterval(interval), totalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold" style={{ color: '#6B8915' }}>
          Métriques de l'entraînement des modèles
        </h1>
      </div>
      <div className="ml-8 mb-8 mt-32">
        <div className="flex justify-center items-center gap-8">
          {firstRow.map((value, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className="border-l-2 h-8 mx-4 border-[#6B8915]"></div>}
              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-xl font-bold text-[#6B8915]">{value.modele}</h2>
                <div className="flex justify-center items-center">
                  <h2>R2</h2>
                  <h3 className="font-bold text-lg ml-3">{animatedValues[index]?.r2?.toFixed(5)}</h3>
                  <h2 className="ml-4 mr-1">RMSE</h2>
                  <h3 className="font-bold text-lg">{animatedValues[index]?.rmse?.toFixed(5)}</h3>
                </div>
                <div className="flex justify-center items-center">
                  <h2>Accuracy</h2>
                  <h3 className="font-bold text-lg ml-3">{animatedValues[index]?.accuracy?.toFixed(5)}</h3>
                  <h2 className="ml-4 mr-1">MAE</h2>
                  <h3 className="font-bold text-lg">{animatedValues[index]?.mae?.toFixed(5)}</h3>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center items-center mt-16 gap-8">
          {secondRow.map((value, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className="border-l-2 h-8 mx-4 border-[#6B8915]"></div>}
              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-xl font-bold text-[#6B8915]">{value.modele}</h2>
                <div className="flex justify-center items-center">
                  <h2>R2</h2>
                  <h3 className="font-bold text-lg ml-3">{animatedValues[index + 2]?.r2?.toFixed(5)}</h3>
                  <h2 className="ml-4 mr-1">RMSE</h2>
                  <h3 className="font-bold text-lg">{animatedValues[index + 2]?.rmse?.toFixed(5)}</h3>
                </div>
                <div className="flex justify-center items-center">
                  <h2>Accuracy</h2>
                  <h3 className="font-bold text-lg ml-3">{animatedValues[index + 2]?.accuracy?.toFixed(5)}</h3>
                  <h2 className="ml-4 mr-1">MAE</h2>
                  <h3 className="font-bold text-lg">{animatedValues[index + 2]?.mae?.toFixed(5)}</h3>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
