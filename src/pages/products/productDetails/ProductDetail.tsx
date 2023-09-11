import './productDetail.scss'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '@services/api'

import { Modal } from 'antd';
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
export default function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1)


  useEffect(() => {
    if (id) {
      api.productApi
        .findProductById(id)
        .then((res) => {
          if (res.status == 200) {
            setProduct(res.data.data);
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          alert("sap server");
        });
    }
  }, [id]);
  if (!product) {
    return null;
  }

  function handleAddToCart(productId: string, quantities: number) {
    let carts: CartItem[] = JSON.parse(localStorage.getItem("carts") ?? "[]");
    console.log("carts:", carts)

    if (carts.length == 0) {
      // cart rỗng
      carts.push({
        productId,
        quantity: quantities
      })
      Modal.success(
        { content: "Add to cart sucsses" }
      )

    } else {
      // cart có sp
      let flag: boolean = false;
      carts = carts.map(item => {
        if (item.productId == productId) {
          item.quantity += quantities
          flag = true;
        }
        return item
      })
      if (!flag) {
        carts.push({
          productId,
          quantity: quantities
        })
        Modal.success(
          { content: "Add to cart sucsses" }
        )
      }
    }
    localStorage.setItem("carts", JSON.stringify(carts))
  }

  return (
    <div>

      <div key={Date.now() * Math.random()} className="detail_container">
        <div className="detail_img">
          <img
            style={{
              width: "429px",
              height: "255px",
              position: "relative",
            }}

            className="productImg"
            src={product.avatar}
            alt=""
          />
          <div className="detail_img_img" >
            {product.productPictures.map((item: any, index: number) => (
              <img key={index} src={item.path} alt="" />
            ))}
          </div>
        </div>
        <div className="detail_content">
          <h1>{product.name}</h1>

          <div className="quantity-container">
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "25px",
              }}
            >
              ${product.price}
            </span>
            <div className="count_product">
              <button
                className="count"
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                <span className="material-symbols-outlined">-</span>
              </button>

              <span className="quantity" style={{ fontSize: "25px" }}>
                {quantity}
              </span>
              <button
                className="count"
                onClick={() => {
                  if (quantity > 0) {
                    setQuantity(quantity + 1);
                  }
                }}
              >
                <span className="material-symbols-outlined">+</span>
              </button>
            </div>
          </div>
          <div className="buttonAddCart">
            <button
              onClick={() => {
                handleAddToCart(product.id, quantity)
              }}
              type="button"
              className="addToCart"
            >
              {t('AddToCart')}
            </button>
            <br />
            <div style={{ marginTop: "30px" }} >
              <h3>{t('Description')}</h3>
              <div>{product.des}</div>
            </div>
          </div>
        </div>
      </div>


      <div className="bulgari_services">
        <div>
          <h1 style={{ textAlign: "center", paddingTop: "30px" }}>
            {t('EXCLUSIVECAKERUNSERVICES')}
          </h1>
        </div>
        <div className="bulgari_services_text">
          <div>
            <h3>
              <img src="../images/car.png" alt="" />
              {t('ComplimentaryShipping')}
            </h3>
            <p>
              {t('Shopour')}
            </p>
            <a
              href="https://cakerun.com.au/what-to-do-birthday-party-must-have-entertainment-for-your-next-function/"

            >
              {t('Discovermore')}
            </a>
          </div>
          <div>
            <h3>
              <img src="../images/2.png" alt="" />
              {t('Complimentary')}
            </h3>
            <p>
              {t('We')}
            </p>
            <a
              href="https://cakerun.com.au/what-to-do-birthday-party-must-have-entertainment-for-your-next-function/"

            >
              {t('Discovermore')}
            </a>
          </div>
          <div>
            <h3>
              <img src="../images/3.png" alt="" />
              {t('Pay')}
            </h3>
            <p>{t('Shopnow')}</p>
            <a
              href="https://cakerun.com.au/what-to-do-birthday-party-must-have-entertainment-for-your-next-function/"

            >
              {t('Discovermore')}
            </a>
          </div>
          <div>
            <h3>
              <img src="../images/4.png" alt="" />
              {t('ClientAdvisor')}
            </h3>
            <p>
              {t('The')}
            </p>
            <a
              href="https://cakerun.com.au/what-to-do-birthday-party-must-have-entertainment-for-your-next-function/"

            >
              {t('Discovermore')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
