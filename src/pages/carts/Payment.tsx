import './cart.scss'
import React, { useEffect, useState } from 'react'
import api from '@services/api'
interface Product {
    id: string;
    name: string;
    avatar: string;
    price: number;
    des: string;
    categoryId: string;
    productPictures: {
        id: string;
        path: string;
    }[]
}
interface CartItem {
    productId: string;
    quantity: number;
}
interface CartItemDetail extends CartItem {
    productDetail: Product
}

interface newGuestReceipt {

    email: string;
    phoneNumber: string;
    total: number;
    payMode: string;

}
export default function Payment() {
    const [cart, setCart] = useState<CartItemDetail[]>([]);
    console.log("cartpayment:", cart)
    useEffect(() => {
        async function formatCartPay() {
            let cartTemp: CartItemDetail[] = [];
            let carts: CartItem[] = JSON.parse(localStorage.getItem("carts") ?? "[]");
            for (let i in carts) {
                let productDetail = await api.productApi.findProductById(carts[i].productId).then(res => res.data.data)
                cartTemp.push({
                    ...carts[i],
                    productDetail
                })
            }
            setCart(cartTemp);
            //localStorage.setItem("carts", JSON.stringify(cart));
        }

        formatCartPay();
    }, []);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    function handleOrder() {
        let newGuestReceipt: newGuestReceipt = {

            email: email,
            phoneNumber: phoneNumber,

            total: cart.reduce((value, cur) => {
                return value + cur.quantity * cur.productDetail.price;
            }, 0),
            payMode: "CASH",

        }
        let guestReceiptDetailList = JSON.parse(localStorage.getItem("carts") ?? "[]")

        api.purchaseApi.createGuestReceipt(newGuestReceipt, guestReceiptDetailList)
            .then(res => {
                console.log("res", res.data)
                localStorage.removeItem("carts");
            })
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-11">
                    <div className="card card0 rounded-0">
                        <div className="row boder">
                            <div className="col-md-5 d-md-block d-none p-0 box">
                                <div className="card rounded-0 border-0 card1" id="bill">
                                    <h3 id="heading1">Payment Summary</h3>
                                    {cart.map(item => (
                                        <div key={item.productId} className="row">
                                            <div className="col-lg-7 col-8 mt-4 line pl-4">
                                                <h2 className="bill-head">{item.productDetail.name}</h2>
                                                <small className="bill-date">item: {item.quantity}</small>
                                            </div>
                                            <div className="col-lg-5 col-4 mt-4">
                                                <h2 className="bill-head px-xl-5 px-lg-4">${item.productDetail.price}</h2>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="row">
                                        <div className="col-md-12 red-bg">
                                            <p className="bill-date" id="total-label">
                                                Total Price
                                            </p>
                                            <h2 className="bill-head" id="total">
                                                ${cart
                                                    ? cart.reduce((value, nextItem) => {
                                                        return (value += nextItem.quantity * nextItem.productDetail.price);
                                                    }, 0)
                                                    : ''}
                                            </h2>
                                            <small className="bill-date" id="total-label">
                                                Price includes all taxes
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12 p-0 box">
                                <div style={{ backgroundColor: "rgb(238, 238, 238)" }} className="card2" id="paypage">
                                    <div className="form-card">
                                        <h2 id="heading2" className="text-danger">
                                            Payment Method
                                        </h2>
                                        <div className="radio-group">
                                            <div className="radio" data-value="paypal">
                                                <img style={{
                                                    width: "100px",
                                                    height: "47px"
                                                }}
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvxf3SYHiCC3ypAG2ejZ7ABGlOjG3Gm58uQ&usqp=CAU"
                                                    width="100px"
                                                    height="10px"
                                                />
                                            </div>
                                            <div className="radio" data-value="credit">
                                                <img
                                                    src="https://blogchiasekienthuc.com/wp-content/uploads/2019/07/su-dung-dich-vu-zalopay.png"
                                                    width="100px"
                                                    height="20px"
                                                />
                                            </div>
                                            <br />
                                        </div>
                                        <label className="pay">Name</label>
                                        <input type="text" name="name" placeholder="Name" />
                                        <div className="row">
                                            <div className="col-8 col-md-6">
                                                <label className="pay">SDT</label>
                                                <input
                                                    type="text"
                                                    name="phoneNumber"
                                                    id="cr_no"
                                                    placeholder="0000-0000-0000-0000"
                                                    minLength={19}
                                                    maxLength={19}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-4 col-md-6">
                                                <label className="pay">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    className="placeicon"
                                                    // minLength={3}
                                                    // maxLength={3}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="pay">Received Date</label>
                                            </div>
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    name="exp"
                                                    id="exp"
                                                    placeholder="MM/YY"
                                                    minLength={5}
                                                    maxLength={5}

                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <button onClick={() => {
                                                    handleOrder()
                                                }}>
                                                    Order</button>
                                                {/* <input
                                                    type="submit"
                                                    defaultValue="MAKE A PAYMENT   "
                                                    className="btn btn-info placeicon"
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

