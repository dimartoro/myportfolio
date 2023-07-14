import './App.css';
import HeaderSection from './components/HeaderSection';
import ContentSection from './components/ContentSection';
import FooterSection from './components/FooterSection';
import { useState } from 'react';

function App() {

  const[activeMenu,setMenu] = useState('');
  const changeMenu = (item)=>{
    setMenu(item);
  }
  return (
    <div>
      <HeaderSection activeMenu={changeMenu} />
      <ContentSection activeMenu={activeMenu}/>
      <FooterSection/>
    </div>
  );
}

export default App;
