import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { logo } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-black`} 
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/">
          <p className="text-white text-[18px] font-bold flex">
            Deep Learning Articles &nbsp;
          </p>
        </Link>
        <Link to="/">
          <img src={logo}  alt="logo" className="w-12 h-12 object-contain"/>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
            <li>
                <Link to="/stats">Métriques</Link>
            </li>
            <li>
                <Link to="/checkstatus">Status Serveur</Link>
            </li>
            <li>
                <Link to="/about">À propos</Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
