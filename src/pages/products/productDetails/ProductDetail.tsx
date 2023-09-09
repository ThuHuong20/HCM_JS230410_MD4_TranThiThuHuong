import './productDetail.scss'
import { useTranslation } from 'react-i18next'
export default function ProductDetail() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="detail_container">
        <div className="detail_img">
          <img
            style={{
              width: "429px",
              height: "255px",
              position: "relative",
            }}

            className="productImg"
            src='https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg'
            alt=""
          />
          <div className="detail_img_img" >
            <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
            <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
            <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
          </div>
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
              {t('AddToCart')}
            </button>
            <br />
            <div style={{ marginTop: "30px" }} >
              <h3>{t('Description')}</h3>
              <div>pppppppppppppppppppppppppppppppppppppp</div>
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
