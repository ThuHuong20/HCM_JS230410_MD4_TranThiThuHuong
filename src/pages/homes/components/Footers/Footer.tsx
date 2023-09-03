import './footer.scss'
import { useTranslation } from 'react-i18next'
export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <p>────────────────────────────────────────────────</p>
                <img src="../images/logo.webp" alt="" />
                <p>────────────────────────────────────────────────</p>
            </div>
            <div className='footer_cake'>
                <a>{t('WholeCakes')}</a>
                <a>{t('PreSlicedCakes')}</a>
                <a>{t('CupCakes')}</a>
            </div>
            <div className='footer_input'>
                <input type="email" placeholder='Email' />
                <button>{t('sub')}</button>
            </div>
            <div className='footer_follow'>
                <div className='footer_follow_text'>
                    <a href='https://cakerun.com.au/privacy-policy/'>{t('PRIVACY')}</a>
                    <a href='https://cakerun.com.au/terms-and-conditions/'>{t('TERMS')}</a>
                    <a href='https://cakerun.com.au/refund-policy/'>{t('REFUND')}</a>
                </div>
                <div className='footer_follow_pay'>
                    <img src="../images/paymen.webp" alt="" />
                </div>
                <div className='footer_follow_pay'>
                    <a href="https://www.facebook.com/cakerunmelbourne"> <i style={{ marginRight: "15px" }} className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/cakerunmelbourne"> <i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div className='footer_design'>
                <p>{t('CAKERUNS')}</p>
            </div>
        </div>

    )
}
