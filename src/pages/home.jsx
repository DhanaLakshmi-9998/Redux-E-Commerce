
import Hero from '../components/hero/hero.jsx';
import ProductList from '../components/productlist/productlist.jsx';

const Home = () => {
  // const [products, setProducts]=useState([])
  // const [loading, setLoading]=useState(false);
  // async function fetchProducts(){
  //   setLoading(true);
  //   const response=await fetch("https://fakestoreapi.com/products");
  //   const data=await response.json()

  //   if(data){
  //     setLoading(false)
  //     setProducts(data)
  //    }
  // }
  // useEffect(()=>{
  //   fetchProducts();
  // },[])
  return (
    // <div>
    //   {
    //     loading?<div className='min-h-screen w-full flex justify-center items-center'>
    //         <Circles height='120' color='rgb(210,20,20)' width={'120'} visible={'true'}/>
    //     </div>
    //     :
    //     <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3'>
    //       {
    //         products && products.length? 
    //         products.map(item=> <ProductCard productitem={item} key={item.id}/>):null
    //       }
    //     </div>

    //   }
    // </div>
    <>
      <Hero/>
      <ProductList/>
      
    </>
  )
}

export default Home
