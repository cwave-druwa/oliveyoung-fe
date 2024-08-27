// import { useState, useEffect } from 'react';
// import { fetchProducts, updateProductLike } from '../services/api';

// const useProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         console.log("1234");
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getProducts();
//   }, []);

//   const toggleLike = async (id) => {
//     try {
//       const updatedProduct = await updateProductLike(id);
//       setProducts(products.map(product => 
//         product.id === id ? { ...product, isLiked: updatedProduct.isLiked } : product
//       ));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//    return { products, loading, error, toggleLike };
// };

// export default useProducts;




  import { useState, useEffect } from 'react';
  import { fetchProducts, updateProductLike } from '../services/api';

  const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const getProducts = async () => {
        try {
          const data = await fetchProducts();
          const updatedData = data.map(product => ({
            ...product,
            isLiked: JSON.parse(localStorage.getItem(`like-${product.id}`)) || false,
          }));
          setProducts(updatedData);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      getProducts();
    }, []);

    const toggleLike = (id) => {
      setProducts(products => products.map(product => {
        if (product.id === id) {
          const newIsLiked = !product.isLiked;
          // 로컬 스토리지 상태 업데이트
          localStorage.setItem(`like-${id}`, JSON.stringify(newIsLiked));
          return { ...product, isLiked: newIsLiked };
        }
        return product;
      }));
    };

    return { products, loading, error, toggleLike };
  };


  export default useProducts;