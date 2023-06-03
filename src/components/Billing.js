import React from "react";
import { useSelector } from "react-redux";
export default function Billing() {
  const getProductDetails = useSelector((state) => state.cartOperations);
  let sum =0;
  // code for styling
  const btnStyle={
    width:"100%",
    marginTop:"20px"
  }
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center text-danger">Billing Information</h1>
        <div className="row">
          <div className="col-9">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>

                {getProductDetails.map((element, num = 0) => {
                  sum+=element.cardData.productPrice;
                  num++;
                  return (
                    <tr key={element.cardData.productId}>
                      <th scope="row">{num}</th>
                      <td>{element.cardData.productName}</td>
                      <td>&#8377; {element.cardData.productPrice}</td>
                    </tr>
                  );
                })}
                <tr className="bg-danger text-light">
                  <td colspan="2">Total Bill</td>
                  <td>{Math.ceil(sum)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-3">
          <button type="button" className="btn btn-success" style={btnStyle}>Confirm Order</button>
          <button type="button" className="btn btn-warning" style={btnStyle}>Cancel Order</button>
          </div>
        </div>
      </div>
    </>
  );
}
