/*import React, { useContext } from 'react';

import DataContext from './context/DataContext';*/
import React from "react";


const Header = ({ title }) => {
  /* const { width } = useWindowSize();  */
  /* const {width} = useContext(DataContext) */
  

  return (
    <header className='Header'>
      <h1>{title}</h1>
                         
    </header>
  );
}

export default Header;
