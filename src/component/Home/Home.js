import React from 'react';
import CeoPart from '../Shared/CeoPart';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import UseServises from './Services/UseServises';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div>
          <Banner></Banner>  
          <Welcome></Welcome>
          <UseServises></UseServises>
          <CeoPart></CeoPart>
          <Footer></Footer>
        </div>
    );
};

export default Home;