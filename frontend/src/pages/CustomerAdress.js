import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";
import emptyCartImage from "../assest/empty.gif"
import { toast } from "react-hot-toast";
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";


const CustomerAdress = () => {
    const productCartItem = useSelector((state) => state.product.cartItem);
    const user = useSelector(state => state.user)
    const navigate = useNavigate();
    const staticUserData = {
      name: '',
      address: '',
      phone: '',
    }
    const [userData, setUserData] = useState(staticUserData);
  
    const totalPrice = productCartItem.reduce(
      (acc, curr) => acc + parseInt(curr.total),
      0
    );
    const totalQty = productCartItem.reduce(
      (acc, curr) => acc + parseInt(curr.qty),
      0
    );
   
    const amount = 500;
    const currency = "INR";
    const receiptId = "qwsaq1";

    const paymentHandler = async (e) => {
      const response = await fetch("https://backend-env.onrender.com/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    // console.log(order);

    var options = {
      key: "rzp_test_MpDn9t3u09DUpo", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Acme Corp", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:8080/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: userData.name, //your customer's name
        email: "webdevmatrix@example.com",
        contact: userData.phone, //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setUserData({...userData, [name]: value});
  }

    
    
    



  return (
<div>
<>
    
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ?
        <div className="my-4 flex gap-3">
          {/* display cart items  */}
          <div className="w-full max-w-3xl ">
            {productCartItem.map((el) => {
              return (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              );
            })}
          </div>

          {/* total cart item  */}
          <div className="w-full max-w-md  ml-auto">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Set your delivery Address </h2>
           
            <div className='p-3 md:p-4'>
                <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>

                    <form 
                      className="w-full py-3 flex flex-col" 
                      onChange={onFormChange}
                    >
                        <label htmlFor='name'>Name</label>
                        <input type="text" id='name' name='name' value={userData.name} className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"  ></input>

                        <label htmlFor='Address_line_1'>Address line 1</label>
                        <input type={"text"} id='address_line_1' name='address' value={userData.address} className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"  ></input>

                        {/* <label htmlFor='Address_line_2'>Address line 2</label>
                        <input type={"text"} id='address_line_2' name='address_line_2' className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" ></input> */}

                        {/* <label htmlFor='City'>City</label>
                        <input type={"text"} id='city' name='city' className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" ></input> */}

                        {/* <label htmlFor='Postal_Code'>Postal Code</label>
                        <input type={"number"} id='postal_Code' name='postal_Code' className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" ></input> */}

                        {/* <label htmlFor='State'>State</label>
                        <input type={"text"} id='state' name='state' className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300" ></input> */}

                        <label htmlFor='Phone'>Phone no</label>
                        <input type={"number"} id='phone' name='phone' value={userData.phone} className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"  ></input>

                    </form>
                </div>

            </div>
            <button onClick={paymentHandler} className="bg-red-500 w-full text-lg font-bold py-2 text-white" >
              Payment
            </button>
          </div>
        </div>

        : 
        <>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={emptyCartImage} className="w-full max-w-sm"/>
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
          </div>
        </>
      }
      </div>
    
    </>
</div>
  )
}

export default CustomerAdress
