import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';

function Home() {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [resultsKey, setResultsKey] = useState(0);

  const handleSearch = () => {
    setShowResults(true);
    setResultsKey(resultsKey + 1);
  };

  return (
    <div>
      <Search title={title} text={text} link={link} setTitle={setTitle} setLink={setLink} setText={setText} handleSearch={handleSearch} />
      {showResults && <Results key={resultsKey} title={title} text={text} link={link} />}
    </div>
  );
}

export default Home;
