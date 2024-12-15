import React, { useState, useRef } from 'react';
import { search } from '../assets';



function Search({ title, text, link, setLink, setTitle, setText, handleSearch }) {

  const titleRef = useRef();
  const textRef = useRef();
  const linkRef = useRef();

  function handleSearchInside(){
    // faudrait un truc pour recuperer le lien si on a misslclick sur le mauvais bouton
    linkRef.current.value = '';
    setText(textRef.current.value);
    setTitle(titleRef.current.value);
    setLink(linkRef.current.value);
    handleSearch();
  }

  function handleSearchInsideLink(){
    // faudrait faire pareil
    textRef.current.value = '';
    titleRef.current.value = '';
    setText(textRef.current.value);
    setTitle(titleRef.current.value);
    setLink(linkRef.current.value);
    handleSearch();
  }


  return (
    <div>
      <div className="flex justify-center mt-20">
        <h1 className="text-4xl font-bold" style={{ color: '#6B8915' }}>
          Analyse et détection de Fake News
        </h1>
      </div>
      <div className="mt-20 flex justify-center">
        <input
          className="p-2 w-6/12 border rounded text-black"
          type="url"
          placeholder="Lien d'un article..."
          ref={linkRef}
        />
        <button
            onClick={handleSearchInsideLink}
            className="p-2 ml-4 bg-blue-400 text-white hover:bg-blue-200 flex rounded"
          >
            <img
              src={search}
              alt="Search Logo"
              className="w-6 h-6 mr-3"
            />
            <span>Analyser avec un lien</span>
        </button>
      </div>
      <div className="mt-5 flex justify-center">OU</div>
      <div className="mt-5 flex justify-center">
        <div className='flex'>
          <input
            className="p-2 w-80 border rounded text-black"
            type="search"
            placeholder="Titre d'article..."
            ref={titleRef}
          />

          <textarea
            className="p-2 border w-96 h-36 rounded ml-4 mb-[-117px] resize-none text-black"
            placeholder="Texte..."
            ref={textRef}
          />
          <button
            onClick={handleSearchInside}
            className="p-2 ml-4 bg-blue-400 text-white hover:bg-blue-200 flex rounded"
            
          >
            <img
              src={search}
              alt="Search Logo"
              className="w-6 h-6 mr-3"
            />
            <span>Analyser avec le contenu</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
