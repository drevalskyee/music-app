import React, { useState } from 'react';
import { Header } from '../layout/Header/Header';
import { Footer } from '../layout/Footer/Footer';
import { Main } from '../layout/Main/Main';
import { Sidebar } from '../layout/Sidebar/Sidebar';

const Home = () => {
  // state for sidebar
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenVolume, setIsOpenVolume] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleVolumeBar = () => {
    setIsOpenVolume(!isOpenVolume);
  };

 return (
   <>
     <Header toggleSidebar={toggleSidebar} />
     <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
     <Main />
     <Footer isOpenVolume={isOpenVolume} toggleVolumeBar={toggleVolumeBar} />
   </>
 );
 };

export { Home };
