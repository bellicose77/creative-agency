import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
          <Navbar/> 
          <Header/> 
          <Services/>
          <Footer/>
        </div>
    );
};

export default Home;