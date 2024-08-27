import React from 'react';
import Header from '../../components/Header/Header';
import MainBanner from '../../components/MainBanner/MainBanner';
import CategoryNav from '../../components/CategoryNav/CategoryNav';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  
  return (
    <>
      <Header />
      <MainBanner />
      <CategoryNav />
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;