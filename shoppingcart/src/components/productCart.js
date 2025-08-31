import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/images/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
const ProductCart = (props) => {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const dispatch = useDispatch();
  const handleToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  const { id, name, image, price, slug } = props.data;
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          alt=""
          className="w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]"
        />
      </Link>
      <h3 className="text-2xl py-3 text-center font-medium">{name}</h3>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium">${price}</p>
        <button
          className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
          onClick={handleToCart}
        >
          <img src={cart} alt="" className="w-5" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
