import './productDetail.scss'

export default function ProductDetail() {
  return (
    <div>
      <div className="detail_container">
        <div className="detail_img">
          <img
            style={{
              width: "400px",
              height: "400px",
            }}

            className="productImg"
            src='https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg'
            alt=""
          />
        </div>
        <div className="detail_content">
          <h1>hhhhhhh</h1>

          <div className="quantity-container">
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              678888
            </span>
            <div className="count_product">
              <button
                className="count"

              >
                <span className="material-symbols-outlined">-</span>
              </button>

              <span className="quantity" style={{ fontSize: "25px" }}>
                9
              </span>
              <button
                className="count"

              >
                <span className="material-symbols-outlined">+</span>
              </button>
            </div>
          </div>
          <div className="buttonAddCart">
            <button

              type="submit"
              className="addToCart"
            >
              Add To Cart
            </button>
            <br />
            <div style={{ marginTop: "30px" }} >
              <h3>Description</h3>
              <div>pppppppppppppppppppppppppppppppppppppp</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img src="../images/D1.png" />
        <img src="../images/D2.png" />
        <img src="../images/D3.png" />
      </div>
      <div className="bulgari_services">
        <div>
          <h1 style={{ textAlign: "center", paddingTop: "30px" }}>
            EXCLUSIVE CAKERUN SERVICES
          </h1>
        </div>
        <div className="bulgari_services_text">
          <div>
            <h3>
              <img src="../images/car.png" alt="" />
              Complimentary Shipping
            </h3>
            <p>
              Shop our exquisite creations now and get free delivery on all
              orders.
            </p>
            <a
              href="https://www.bulgari.com/en-us/order-information/deliveryMethods--page__services.html"

            >
              Discover more
            </a>
          </div>
          <div>
            <h3>
              <img src="../images/2.png" alt="" />
              Complimentary Returns & Exchanges
            </h3>
            <p>
              We offer free returns and exchanges on all orders placed online.
            </p>
            <a
              href="https://www.bulgari.com/en-us/order-information/returns&amp;exchanges--page__services.html"

            >
              Discover more
            </a>
          </div>
          <div>
            <h3>
              <img src="../images/3.png" alt="" />
              Pay with Klarna
            </h3>
            <p>Shop now and pay in 4 interest-free installments with Klarna.</p>
            <a
              href="https://www.bulgari.com/en-us/order-information/klarna-page-services.html"

            >
              Discover more
            </a>
          </div>
          <div>
            <h3>
              <img src="../images/4.png" alt="" />
              Client Advisor
            </h3>
            <p>
              The perfect advice is always at hand with our customer care
              service.
            </p>
            <a
              href="https://www.bulgari.com/en-us/contact-us/contact-us--page__services.html"

            >
              Discover more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
