import './cart.scss'

export default function Cart() {
    return (

        <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                    <div className="card shopping-cart bgr" style={{ borderRadius: 15 }}>
                        <div className="card-body text-black">
                            <div className="row">
                                <div className="col-lg-6 px-5 py-4">
                                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                                        Your products
                                    </h3>
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="flex-shrink-0">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                                                className="img-fluid"
                                                style={{ width: 150 }}
                                                alt="Generic placeholder image"
                                            />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <a href="#!" className="float-end text-black">
                                                <i className="fas fa-times" />
                                            </a>
                                            <h5 className="text-primary">Samsung Galaxy M11 64GB</h5>
                                            <h6 style={{ color: "#9e9e9e" }}>Color: white</h6>
                                            <div className="d-flex align-items-center">
                                                <p className="fw-bold mb-0 me-5 pe-3">799$</p>
                                                <div className="def-number-input number-input safari_only">
                                                    <button

                                                        className="minus"
                                                    />
                                                    <input
                                                        className="quantity fw-bold text-black"
                                                        min={0}
                                                        name="quantity"
                                                        defaultValue={1}
                                                        type="number"
                                                    />
                                                    <button

                                                        className="plus"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="flex-shrink-0">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"
                                                className="img-fluid"
                                                style={{ width: 150 }}
                                                alt="Generic placeholder image"
                                            />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <a href="#!" className="float-end text-black">
                                                <i className="fas fa-times" />
                                            </a>
                                            <h5 className="text-primary">Headphones Bose 35 II</h5>
                                            <h6 style={{ color: "#9e9e9e" }}>Color: Red</h6>
                                            <div className="d-flex align-items-center">
                                                <p className="fw-bold mb-0 me-5 pe-3">239$</p>
                                                <div className="def-number-input number-input safari_only">
                                                    <button

                                                        className="minus"
                                                    />
                                                    <input
                                                        className="quantity fw-bold text-black"
                                                        min={0}
                                                        name="quantity"
                                                        defaultValue={1}
                                                        type="number"
                                                    />
                                                    <button

                                                        className="plus"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="flex-shrink-0">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                                                className="img-fluid"
                                                style={{ width: 150 }}
                                                alt="Generic placeholder image"
                                            />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <a href="#!" className="float-end text-black">
                                                <i className="fas fa-times" />
                                            </a>
                                            <h5 className="text-primary">iPad 9.7 6-gen WiFi 32GB</h5>
                                            <h6 style={{ color: "#9e9e9e" }}>Color: rose pink</h6>
                                            <div className="d-flex align-items-center">
                                                <p className="fw-bold mb-0 me-5 pe-3">659$</p>
                                                <div className="def-number-input number-input safari_only">
                                                    <button

                                                        className="minus"
                                                    />
                                                    <input
                                                        className="quantity fw-bold text-black"
                                                        min={0}
                                                        name="quantity"
                                                        defaultValue={2}
                                                        type="number"
                                                    />
                                                    <button

                                                        className="plus"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr
                                        className="mb-4"
                                        style={{ height: 2, backgroundColor: "#1266f1", opacity: 1 }}
                                    />
                                    <div className="d-flex justify-content-between px-x">
                                        <p className="fw-bold">Discount:</p>
                                        <p className="fw-bold">95$</p>
                                    </div>
                                    <div
                                        className="d-flex justify-content-between p-2 mb-2"
                                        style={{ backgroundColor: "#e1f5fe" }}
                                    >
                                        <h5 className="fw-bold mb-0">Total:</h5>
                                        <h5 className="fw-bold mb-0">2261$</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6 px-5 py-4">
                                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                                        Payment
                                    </h3>
                                    <form className="mb-5">
                                        <div className="form-outline mb-5">
                                            <input
                                                type="text"
                                                id="typeText"
                                                className="form-control form-control-lg"
                                                placeholder='User Name'
                                                // defaultValue="1234 5678 9012 3457"
                                                minLength={19}
                                                maxLength={19}
                                            />

                                        </div>
                                        <div className="form-outline mb-5">
                                            <input
                                                type="text"
                                                id="typeName"
                                                className="form-control form-control-lg"
                                                placeholder='Phone Number'
                                            />
                                        </div>
                                        <div className="form-outline mb-5">
                                            <input
                                                type="text"
                                                id="typeName"
                                                className="form-control form-control-lg"
                                                placeholder='Address'
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-5">
                                                <div className="form-outline" style={{ display: "flex", justifyContent: "center", gap: "50px", fontWeight: "bold" }}>
                                                    <div>
                                                        <input type="radio" name="payment" value="CASH" />
                                                        <span style={{ marginLeft: "10px" }}>Cash</span>
                                                    </div>
                                                    <div>
                                                        <input
                                                            className="zalo"
                                                            type="radio"
                                                            name="payment"
                                                            value="ZALO"
                                                        />
                                                        <span style={{ marginLeft: "10px" }}> Zalo</span>
                                                    </div>
                                                    <div>
                                                        <input type="radio" name="payment" value="MOMO" />
                                                        <span style={{ marginLeft: "10px" }}>Momo</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-5">
                                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                                            <a href="#!">obcaecati sapiente</a>.
                                        </p>
                                        <button style={{ backgroundColor: "black" }}
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg"
                                        >
                                            Check Out
                                        </button>
                                        <h5
                                            className="fw-bold mb-5"
                                            style={{ position: "absolute", bottom: 0 }}
                                        >
                                            <a href="/">
                                                <i className="fas fa-angle-left me-2" />
                                                Back to shopping
                                            </a>
                                        </h5>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
