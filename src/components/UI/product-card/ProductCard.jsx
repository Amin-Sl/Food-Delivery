import React from "react";
import "../../../styles/product-card.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { toast } from 'react-toastify';
const ProductCard = (props) => {
  const { id, title, img, price, desc } = props.item;
  const dispatch = useDispatch();

  const addToCart = (itemName) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        img,
        price,
        desc
      })
    );
    toast.success(`به سبد خرید اضافع شد`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      rtl: true,
      theme: "dark"
    });
  };


  return (
    <div className="product__item">
      <div className="product__img">
        <img src={img} alt="product-img" />
      </div>

      <div className="product__content">
        <div className="p-title">
          <h5>
            <Link to={`/foods/${id}`}>{title}</Link>
          </h5>
        </div>
        <div className="decs">
          <p className="p-desc">{desc}</p>
          <div className=" d-flex align-items-center justify-content-between ">
            <span className="product__price"> {price},000 تومان</span>
            <button className="addTOCart__btn" onClick={addToCart}>
              افزودن به سبد
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
