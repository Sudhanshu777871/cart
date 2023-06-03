import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {allActions} from "../state/index"
import LoadingBar from "react-top-loading-bar";
import { bindActionCreators } from "redux";
export default function Product() {
  const [progress, setProgress] = useState(0);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const {addToCart} = bindActionCreators(allActions,dispatch);
  useEffect(() => {
      const myApi = async () => {
        setProgress(10);
      let apiUrl = "https://fakestoreapi.com/products";
      setProgress(30);
      let getData = await fetch(apiUrl);
      setProgress(60);
      try {
        let finalStep = await getData.json();
        setProgress(80);
        setProducts(finalStep);
        setProgress(100);
      } catch (err) {
        console.log(err);
      }
    };
    myApi();
  }, []);
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div className="container mt-5" style={{ marginBottom: "100px" }}>
        <div className="row">
          {products.map((items) => {
            return (
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-3 d-flex justify-content-center" key={items.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={items.image}
                    className="card-img-top"
                    style={{ height: "270px" }}
                    alt={items.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {items.title.slice(0, 50)}...
                    </h5>
                    <p className="card-text">
                      {items.description.slice(0, 100)}...
                    </p>
                    Rs. <strong className="text-danger">{items.price}</strong>
                    <br />
                    <br />
                    <button type="button" className="btn btn-info" onClick={()=>{addToCart({productId: items.id,productName:items.title, productPrice: items.price})}}>
                      Add To Cart <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
