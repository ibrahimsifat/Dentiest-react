import React from 'react';
import AboutBody from '../AboutUs/AboutBody';
import ProductSection from '../ProductSection/ProductSection';
import CeoPart from '../Shared/CeoPart';
import Awards from './Awards/Awards';

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
          <AboutBody></AboutBody>
 <ProductSection></ProductSection>
 <Awards></Awards>
        </div>
    );
};

export default Home;