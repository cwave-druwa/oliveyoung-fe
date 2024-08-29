import React from 'react';
import Header from '../../components/Header/Header';
import MainBanner from '../../components/MainBanner/MainBanner';
import CategoryNav from '../../components/CategoryNav/CategoryNav';
import ProductList from '../../components/ProductList/ProductList';
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import Footer from '../../components/Footer/Footer';
import TrendingProducts from '../../components/TrendingProduct/TrendingProduct';

const Home = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <CategoryNav />
      <ProductList title="오늘의 추천 상품" />
      <TrendingProducts title="인기 상품" />
      <FeaturedCategories />
      <Footer />
    </>
  );
};

export default Home;