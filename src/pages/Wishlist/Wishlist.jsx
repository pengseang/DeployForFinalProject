import React, { useState } from 'react';

export const Wishlist = () => {
  const [cart, setCart] = useState([]);
  const wishlistItems = [
    {
      id: 1,
      name: "Bose Sport Earbuds",
      price: 999,
      image: "https://example.com/image.png",
      originalPrice: 1299,
      stockStatus: "IN STOCK",
    },
    {
      id: 2,
      name: "Bose Sport Earbuds",
      price: 999,
      image: "https://example.com/image.png",
      originalPrice: 1299,
      stockStatus: "IN STOCK",
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="container px-4 mx-auto mt-10 md:px-0">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold">Wishlist</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">PRODUCTS</th>
                <th className="py-2">PRICE</th>
                <th className="py-2">STOCK STATUS</th>
                <th className="py-2">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map(item => (
                <tr className="border-b" key={item.id}>
                  <td className="flex items-center py-4">
                    <img alt={item.name} className="w-16 h-16 mr-4" src={item.image} width="60" />
                    {item.name}
                  </td>
                  <td className="py-4">
                    <span className="line-through">${item.originalPrice}</span> ${item.price}
                  </td>
                  <td className="py-4 text-green-500">{item.stockStatus}</td>
                  <td className="py-4">
                    <button
                      className="flex items-center px-4 py-2 text-white bg-blue-500 rounded"
                      onClick={() => addToCart(item)}
                    >
                      ADD TO CART
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
