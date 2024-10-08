import { div, image } from "framer-motion/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { getSingleproducts } from "../../services/product/productAction";
import { fetchProduct } from "../../services/CardProduct/CardProduct";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function ProductDetailCard({discount}) {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);
  const [selected, setSelected] = useState("");
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  console.log("slug", slug);
  const algorithm = [];
  const language = [];
  const dataStructure = [];
  let type = null;
  let options = null;
  if (selected === "Algorithm") {
    type = algorithm;
  } else if (selected === "Language") {
    type = language;
  } else if (selected === "Data Structure") {
    type = dataStructure;
  }

  console.log("product detaul", product);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getSingleproducts(slug);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [slug]);
  useEffect(() => {
    console.log("hello: " + slug);
  }, []);

  console.log("Test:", product);

  const [productPro, setproductPro] = useState([]);
  console.log("PromotionPag", productPro);
  useEffect(() => {
    async function bringProduct() {
      const productPro = await fetchProduct();
      setproductPro(productPro);
    }
    bringProduct();
  }, []);

  return (
    <div className="mx-auto max-w-screen-2xl ">
      {/* Detail card */}
      <section className="mx-auto ">
        <div className="max-w-full px-4 mx-10 mt-20 sm:px-6 lg:px-8">
          <div className="flex flex-col -mx-4 md:flex-row ">
            {/* images */}
            <div className="px-4 md:flex-1">
              <div className="h-[350px] rounded-lg bg-g0  mb-4 flex justify-center">
                <img
                  alt="Product Image"
                  className="w-[100%] h-[100%] md:float-end lg:float-end xl:float-end  xl:w-[70%] lg:w-[80%] rounded-lg"
                  src={product?.images[0]?.url}
                />
              </div>
            </div>
            <div className="px-2 md:flex-1">
              <h2 className="text-2xl font-bold text-black mb-2 dark:text-white font-[Poppins]">
                {product?.name}
              </h2>
              <p className="text-gray-600 text-md dark:text-gray-500 mb-7">
                {product?.description}
              </p>
              <div className="grid grid-cols-2 mb-4 ">
                <div className="text-black dark:text-white ">
                  <h2 className="mb-2 text-sm">
                    Shop: <a  className="text-transparent bg-gradient-to-r bg-clip-text from-teal-400 to-blue-500" href="">{product?.shopSlug}</a>{" "}
                  </h2>
                  <h2 className="text-sm dark:text-white">
                  Address: <a  className="text-transparent bg-gradient-to-r bg-clip-text from-teal-400 to-blue-500" href="">{product?.address}</a>
                  </h2>
                </div>
                <div className="text-black">
                  <h2 className="mb-2 text-sm dark:text-white">
                    Availability: 
                    <a className="pl-1 text-green-500" href="">
                      In Stock
                    </a>
                  </h2>
                  <h2 className="text-sm dark:text-white">
                    Category: <a className="text-transparent bg-gradient-to-r bg-clip-text from-teal-400 to-blue-500" href="">{product?.categorySlug}</a>
                  </h2>
                </div>
              </div>
              <div className="mt-10 mb-4 text-2xl">
                <div className="mr-4">
                <span className="text-lg text-gray-900 dark:text-gray-500 font-[Poppins] line-through mr-3">
                    ${product?.price} <sup></sup>
                  </span>
                <span className="my-6 text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-teal-400 to-blue-500 ">
                   ${(product?.price - (product?.price * parseFloat(product?.discountValue ? product?.discountValue : 10)) / 100).toFixed(2)}
                  </span>
                 
                </div>
              </div>
              <div className="mb-5 border-b-2"> </div>
              
                  <div className="">
                 {/* <div className="grid grid-cols-2 mb-8 ">
                     <div className="">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Color:
                      </span>
                      <div className="flex items-center mt-2">
                        <button className="w-6 h-6 mr-2 bg-gray-800 rounded-full dark:bg-gray-200" />
                        <button className="w-6 h-6 mr-2 bg-red-500 rounded-full dark:bg-red-700" />
                        <button className="w-6 h-6 mr-2 bg-blue-500 rounded-full dark:bg-blue-700" />
                        <button className="w-6 h-6 mr-2 bg-yellow-500 rounded-full dark:bg-yellow-700" />
                      </div>
                    </div> 
                  </div>  */}
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center justify-center w-auto h-auto gap-5 xl:flex-nowrap ">
                      
                    
                      <Link to="/Register">
                        <button className="text-white rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 h-14 w-72">
                          Add to Cart
                        </button>
                      </Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Descrition */}

      {/* you also may like card */}
      <section>
        <div>
          <div className="mt-20 text-4xl text-center ">
            <p className="font-medium text-transparent bg-gradient-to-r from-teal-400 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-clip-text">You may also like</p>
          </div>
          <div className="w-[80%] lg:w-[80%] xl:w-[90%] max-w-screen-xl mx-auto grid grid-cols-1 gap-5 mt-20 mb-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly " >
            {
              
              productPro.slice(1,5).map((product)=>(<div className="">
                <div className="mx-auto rounded-lg">
                <ProductCard
                      images={product.images[0].url}
                      name={product.name}
                      // title={val.description}
                      discountValue={product.discountValue}
                      price={product.price}
                      discount={(product.price - (product.price * parseFloat(product.discountValue ? product.discountValue : 10)) / 100).toFixed(2)}
                      ratingCount={product.ratingCount}
                      slug={product.slug}
                    />
              </div>
            </div>))
          
            }
            
          </div>
          <div className="grid grid-cols-1 gap-10 mx-20 mb-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly">
            <div className="w-full h-20 text-black ring-slate-200 ring-1 dark:text-white">
              <div className="flex flex-row items-center justify-center gap-5 mt-4 ">
                <i className="text-4xl text-transparent bg-gradient-to-r bg-clip-text from-teal-400 to-blue-500 fa-solid fa-box-open" />
                <div>
                  <p className="dark:text-white">FASTED DELIVERY</p>
                  <p className="text-sm dark:text-white">DELIVERY in 24/H</p>
                </div>
              </div>
            </div>
            <div className="w-full h-20 text-black ring-slate-200 ring-1 dark:text-white ">
              <div className="flex flex-row items-center justify-center gap-5 mt-4 ">
                <i className="text-4xl text-transparent bg-gradient-to-r bg-clip-text from-teal-400 to-blue-500 fa-solid fa-headphones" />
                <div>
                  <p className="dark:text-white">SUPPORT 24/7</p>
                  <p className="text-sm dark:text-white">Live contact/message</p>
                </div>
              </div>
            </div>
            <div className="w-full h-20 text-black ring-slate-200 ring-1 dark:text-white">
              <div className="flex flex-row items-center justify-center gap-5 mt-4 ">
                <i className="text-4xl text-transparent bg-gradient-to-r bg-clip-text from-teal-400 to-blue-500 fa-solid fa-trophy" />
                <div>
                  <p className="dark:text-white">24 HOURS RETURN</p>
                  <p className="text-sm dark:text-white">100% money-back </p>
                </div>
              </div>
            </div>
            <div className="w-full h-20 ring-slate-200 ring-1 ">
              <div className="flex flex-row items-center justify-center gap-5 mt-4 ">
                <i className="text-4xl text-transparent bg-gradient-to-r bg-clip-text from-teal-400 to-blue-500 fa-regular fa-credit-card " />
                <div className="text-black dark:text-white">
                  <p>SECURE PAYMENT</p>
                  <p className="text-sm">Your money is safe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}