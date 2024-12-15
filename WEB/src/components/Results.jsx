import React, { useState, useEffect } from 'react';
import { extractFromHtml } from '@extractus/article-extractor';

function Results({ title, text, link }) {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(0); // 0 = pas d'erreur / 1 = erreur de fetch d'article extractor

  
  if ( (title === '' || text === '') && link === '') {
    return (
      <div className="mt-36 mr-2 ml-2">
        <p className="flex justify-center items-center text-red-500">Erreur ! Les deux arguments ne peuvent pas être vides.</p>
      </div>
    );
  }

  useEffect(()=> {
    setLoading(true);
    const fetchData = async () => {
      //console.log('le lien : ',link);
      var thetitle = title;
      var thetext = text;
      var theimg;
      if (link !== '') {
        try {
          const res = await fetch(link);
          const html = await res.text();
          const article = await extractFromHtml(html, link);
          //console.log("texte de l'article : ", article.content);
          //console.log("titre de l'article", article.title);
          thetitle = article.title;
          thetext = article.content;
          theimg = article.image;
          if (article === null){
            setError(1);
          }
        } catch (err) {
          console.error(err);
          setError(1);
          setLoading(false);
          return;
        }
      }
      try {
        const requestOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: thetitle, text: thetext })
        };
        const response = await fetch("http://localhost:5000/recherche", requestOptions);
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
        //console.log(responseData);
      } catch (error) {
        console.error('Erreur lors de la recherche avec l\'api backend : ', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="mt-36 mr-2 ml-2">
      {loading ? (
        <div className="flex justify-center">
          <div className="border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
      ) : (
        <>
          {(() => {
            switch (error) {
              case 0:
                return (
                  <div className="flex">
                    {data.map((modele, i) => (
                      <div
                        key={i}
                        className={`flex-1 ${i !== 0 ? 'border-l' : ''} text-center`}
                      >
                        <div className="flex justify-center items-center mb-12">
                          <h1 className="text-xl">{modele.name}</h1>
                        </div>
                        <div>
                          {modele.fakeOrNot ? (
                            <h1 className="text-7xl text-bold mt-2 mb-16" style={{ color: '#FF0000' }}>FAKE</h1>
                          ) : (
                            <h1 className="text-7xl text-bold mt-2" style={{ color: '#00FF00' }}>REAL</h1>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              case 1:
                return <p className="flex justify-center items-center text-red-500">Impossible d'atteindre la cible suivante [<a href={link}>{link}</a>]</p>;
              default:
                return <p className="flex justify-center items-center text-red-500">Erreur.</p>;
            }
          })()}
          </>
      )}
    </div>
  );
  
}

export default Results;
