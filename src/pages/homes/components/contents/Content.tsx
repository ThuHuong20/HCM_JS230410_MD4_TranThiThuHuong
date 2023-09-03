import './conten.scss'
import { useTranslation } from 'react-i18next'
export default function Content() {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className='container_header'>
                <div className='container_header_text'>
                    <p>───</p>
                    <h1>{t('HOWITWORKS')}</h1>
                    <p>───</p>
                </div>
                <div className='container_header_icon'>
                    <div>
                        <img src="../images/icon1.png" alt="" />
                        <p>{t('Selectyoucake')}</p>
                    </div>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                    <div>
                        <img src="../images/icon2.png" alt="" />
                        <p>{t('Chooseyourdeliverydate')} <br /> {t('andtimewindow')}</p>
                    </div>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                    <div>
                        <img src="../images/icon3.png" alt="" />
                        <p>{t('AfriendlyCakeRundriver')} <br /> {t('deliversyourcake')}</p>
                    </div>
                </div>
            </div>
            <div className='container_category'>
                <div className='container_category_text'>
                    <p>───</p>
                    <h1>{t('SHOPBYCATEGORY')}</h1>
                    <p>───</p>
                </div>
                <div className='container_category_img'>
                    <div>
                        <img src="../images/category1.webp" alt="" />
                        <h2>{t('WHOLE')}</h2>
                        <button>{t('BuyNow')}</button>
                    </div>
                    <div>
                        <img src="../images/category2.webp" alt="" />
                        <h2>{t('PRE')}</h2>
                        <button>{t('BuyNow')}</button>
                    </div>
                    <div>
                        <img src="../images/category3.webp" alt="" />
                        <h2>{t('CUP')}</h2>
                        <button>{t('BuyNow')}</button>
                    </div>
                </div>
            </div>
            <div className='container_sellers'>
                <div className='container_sellers_text'>
                    <p>───</p>
                    <h1>{t('BESTSELLERS')}</h1>
                    <p>───</p>
                </div>
                <div className='container_sellers_best'>
                    <div className='container_sellers_best_one'>
                        <div>
                            <img src="../images/seller1.webp" alt="" />
                        </div>
                        <div>
                            <h2>{t('FerreroRocherCake')}</h2>
                            <p>{t('text1')}</p>
                            <button>{t('ORDERNOW')}</button>
                        </div>
                    </div>
                    <div className='container_sellers_best_two'>
                        <div>
                            <h2>{t('VanillaSpongeRasberryCake')}</h2>
                            <p>{t('text2')}</p>
                            <button>{t('ORDERNOW')}</button>
                        </div>
                        <div>
                            <img style={{ marginLeft: "100px" }} src="../images/seller2.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container_insta'>
                <div className='container_insta_icon'>
                    <div className='container_insta_text'>
                        <p>───</p>
                        <i className="fa-brands fa-instagram"></i>
                        <p>───</p>
                    </div>
                    <a href="">#CAKERUNMELBOURNE</a>
                    <div>{t('insta')}</div>
                </div>
                <div className='container_insta_img'>
                    <div className='container_insta_img_learn'>
                        <img src="../images/insta1.webp" alt="" />
                        <p>{t('img1')}</p>
                        <button><a href="https://cakerun.com.au/secrets-revealed-how-to-make-a-fruit-cake-like-a-pro/">{t('learn')}</a></button>
                    </div>
                    <div className='container_insta_img_learn'>
                        <img src="../images/insta2.webp" alt="" />
                        <p>{t('img2')}</p>
                        <button><a href="https://cakerun.com.au/the-rise-of-vegan-baking-exploring-egg-free-and-dairy-free-desserts/">{t('learn')}</a></button>
                    </div>
                    <div className='container_insta_img_learn'>
                        <img src="../images/insta3.webp" alt="" />
                        <p>{t('img3')}</p>
                        <button><a href="https://cakerun.com.au/myths-and-misconceptions-about-gluten-free-diets-debunked/">{t('learn')}</a></button>
                    </div>
                </div>
            </div>
        </div>

    )
}
