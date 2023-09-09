import SearchProduct from '@/pages/searchProduct/SearchProduct';
import './navbar.scss'
import { Modal } from "antd";
import { useTranslation } from 'react-i18next'
//import i18n from '@/i18n/config';

import { useSelector, useDispatch } from 'react-redux';
import { StoreType } from '../../../../stores'
import api from '../../../../services/api'
import { useEffect, useState } from 'react';
import { userAction } from '../../../../stores/slices/user';
import { Link } from 'react-router-dom';


export default function Navbar() {
    function changeLanguage(lang: string) {
        localStorage.setItem("locales", lang);
        window.location.reload();
    }
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch();
    const store = useSelector(store => store) as StoreType;


    useEffect(() => {
        if (localStorage.getItem("token")) {
            api.userApi.authentication()
                .then(res => {
                    if (res.status == 200) {
                        dispatch(userAction.setLoginData(res.data.data))
                    } else {
                        localStorage.removeItem("token")
                    }
                })
        }
    }, [])
    const [categories, setCategories] = useState([]);
    //console.log("🚀 ~ file: Navbar.tsx:36 ~ Navbar ~ categories:", categories)
    useEffect(() => {
        api.categoryApi
            .findMany()
            .then((res) => {
                if (res.status == 200) {
                    setCategories(res.data.data);
                } else {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                alert("sap server");
            });
    }, []);



    const [cartTotal, setCartTotal] = useState<number | null>(null);
    useEffect(() => {
        const localStorageCart = JSON.parse(localStorage.getItem("carts") || "[]");
        const total = localStorageCart.reduce((result: number, nextItem: any) => {
            return (result += nextItem.quantity);
        }, 0);
        setCartTotal(total);
    }, []);

    return (
        <div className='nav'>
            {/* Before Nav */}
            <div className='before_nav'>
                <h4>{t('$5DELIVERYANYWHEREINMELBOURNEMONTOSAT')}</h4>
                <i className="fa-solid fa-truck-fast"></i>
                <h4>{t('ORDERBY5PMFORNEXTDAY')}</h4>
                <div style={{ display: "flex" }} className='before_nav_icon'>
                    <a href="https://www.facebook.com/cakerunmelbourne"> <i style={{ marginRight: "15px" }} className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/cakerunmelbourne"> <i className="fa-brands fa-instagram"></i></a>
                    {localStorage.getItem("token") ?
                        <div className="dropdown" >
                            <button style={{ marginLeft: "15px" }}
                                className="dropdown-toggle"
                                // type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Hi {store.userStore.data?.userName}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/profile">
                                    {t('Profile')}
                                </a>
                                <a className="dropdown-item" href="#">
                                    {t('recipt')}
                                </a>
                            </div>
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>

            <nav>
                <div className="nav_content">
                    <div className="left_content">
                        <h1
                            onClick={() => {
                                window.location.href = "/";
                            }}
                        >
                            <img style={{ height: "50px", marginTop: "15px" }} src="../images/logo.webp" alt="" />
                        </h1>
                    </div>
                    <div className="middle_content">
                        <a
                            className="item"
                            href="/"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            {t('Home')}
                        </a>
                        {/* {categories.map((category: any) => (
                            <Link
                                className="item"
                                style={{ color: "black", textDecoration: "none" }}
                                to={`categories/${category.id}`}
                            >
                                {category.title}
                            </Link>
                        ))} */}
                        <a
                            className="item"
                            style={{ color: "black", textDecoration: "none" }}
                            href='http://localhost:5173/categories/64f7dedda010188c5900f9a1'
                        >
                            {t('WholeCakes')}
                        </a>
                        <a
                            className="item"
                            style={{ color: "black", textDecoration: "none" }}
                            href="http://localhost:5173/categories/64f7df1da761b46dc4729036"
                        >
                            {t('PreSlicedCakes')}
                        </a>
                        <a
                            className="item"
                            style={{ color: "black", textDecoration: "none" }}
                            href="http://localhost:5173/categories/64f7df59efa0f2736370e7f0"
                        >
                            {t('CupCakes')}
                        </a>
                        <a
                            className="item"
                            style={{ color: "black", textDecoration: "none" }}
                            href="https://cakerun.com.au/about-us/"
                        >
                            {t('About')}
                        </a>
                    </div>
                    <div className="right_content">
                        {/* Search */}
                        <div className="searchBox d-flex" role="search">
                            <div id="search_box">
                                <SearchProduct />
                            </div>
                        </div>
                        {localStorage.getItem("token") ? (

                            <i
                                className="fa-solid fa-arrow-right-from-bracket"
                                style={{ cursor: "pointer" }}
                                //className="dropdown-item"
                                onClick={() => {
                                    //alert("Are you sure want to logout?");
                                    Modal.confirm({
                                        content: t('confirmLogout'),
                                        onOk: () => {
                                            window.location.href = "/";
                                        },
                                    });
                                    localStorage.removeItem("token");
                                }}
                            ></i>

                        ) : (
                            <div className="dropdown">
                                <a
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className="fa-regular fa-user"> </i>
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <a className="dropdown-item" href="/register">
                                        {t('register')}
                                    </a>
                                    <a className="dropdown-item" href="/login">
                                        {t('login')}
                                    </a>
                                </div>
                            </div>
                        )}
                        {/* Cart */}
                        <div style={{ display: "flex", marginTop: "9px" }}>
                            <i
                                onClick={() => {
                                    window.location.href = "/cart";
                                }}
                                className="fa-solid fa-bag-shopping"
                                style={{ cursor: "pointer" }}
                            > </i>
                            <p style={{ color: "red" }}> {cartTotal != null ? cartTotal : 0}</p>
                        </div>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <a style={{ display: "flex", gap: "10px" }} className="dropdown-item" href="">
                                    {i18n.language === 'en' && <img style={{ width: "20px", height: "15px", marginTop: "5px" }} src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png" alt="" />}
                                    {i18n.language === 'vi' && <img style={{ width: "20px", height: "15px", marginTop: "5px" }} src="https://cdn.countryflags.com/thumbs/vietnam/flag-400.png" alt="" />}
                                    {i18n.language === 'ja' && <img style={{ width: "20px", height: "15px", marginTop: "5px" }} src="https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png" alt="" />}
                                </a>

                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a style={{ display: "flex", gap: "10px" }} className="dropdown-item" href="">
                                    <img style={{ width: "20px", height: "15px", marginTop: "5px" }} src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png" alt="" />
                                    <p onClick={() => {
                                        changeLanguage('en')
                                    }}> {t('eng')}</p>
                                </a>
                                <a style={{ display: "flex", gap: "10px" }} className="dropdown-item" href="">
                                    <img style={{ width: "20px", height: "15px", marginTop: "5px" }} src="https://cdn.countryflags.com/thumbs/vietnam/flag-400.png" alt="" />
                                    <p onClick={() => {
                                        changeLanguage('vi')
                                    }}> {t('vi')}</p>
                                </a>
                                <a style={{ display: "flex", gap: "10px" }} className="dropdown-item" href="">
                                    <img style={{ width: "20px", height: "15px", marginTop: "5px" }} src="https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png" alt="" />
                                    <p onClick={() => {
                                        changeLanguage('ja')
                                    }}>{t('ja')}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
