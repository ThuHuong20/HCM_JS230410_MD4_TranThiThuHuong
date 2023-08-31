import SearchProduct from '@/pages/searchProduct/SearchProduct';
import './navbar.scss'
export default function Navbar() {
    return (
        <div className='nav'>
            {/* Before Nav */}
            <div className='before_nav'>
                <h4>$5 DELIVERY ANYWHERE IN MELBOURNE, MON TO SAT</h4>
                <i className="fa-solid fa-truck-fast"></i>
                <h4>ORDER BY 5PM FOR NEXT DAY</h4>
                <div className='before_nav_icon'>
                    <a href="https://www.facebook.com/cakerunmelbourne"> <i style={{ marginRight: "15px" }} className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/cakerunmelbourne"> <i className="fa-brands fa-instagram"></i></a>
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
                            <img style={{ height: "50px" }} src="../images/logo.webp" alt="" />
                        </h1>
                    </div>
                    <div className="middle_content">
                        <a
                            className="item"
                            href="/"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            Home
                        </a>
                        <a
                            className="item"
                            style={{ color: "black", textDecoration: "none" }}
                            href="https://www.bulgari.com/en-us/corporate-social-responsibility/supply-chain.html"
                        >
                            Whole Cakes
                        </a>
                        <a
                            className="item"
                            style={{ color: "black", textDecoration: "none" }}
                            href="https://www.bulgari.com/en-us/corporate-social-responsibility/supply-chain.html"
                        >
                            Pre-Sliced Cakes
                        </a>
                        <a
                            className="item"
                            style={{ color: "black", textDecoration: "none" }}
                            href="https://www.bulgari.com/en-us/corporate-social-responsibility/supply-chain.html"
                        >
                            CupCakes
                        </a>
                        <a
                            className="item"
                            style={{ color: "black", textDecoration: "none" }}
                            href="https://cakerun.com.au/about-us/"
                        >
                            About
                        </a>
                    </div>
                    <div className="right_content">
                        {/* Search */}
                        <div className="searchBox d-flex" role="search">
                            <div id="search_box">
                                <SearchProduct />
                            </div>
                        </div>
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
                                    Register
                                </a>
                                <a className="dropdown-item" href="/login">
                                    Log In
                                </a>
                            </div>
                        </div>


                        {/* Cart */}
                        <div style={{ display: "flex", marginTop: "9px" }}>
                            <i
                                onClick={() => {
                                    window.location.href = "/cart";
                                }}
                                className="fa-solid fa-bag-shopping"
                                style={{ cursor: "pointer" }}
                            > </i>
                            <p style={{ color: "red" }}>0</p>
                        </div>
                        <div className="dropdown">
                            <a
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-language"></i>
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a style={{ display: "flex", gap: "10px" }} className="dropdown-item" href="">
                                    <img style={{ width: "20px", height: "15px", marginTop: "5px" }} src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png" alt="" />
                                    <p>English</p>
                                </a>
                                <a style={{ display: "flex", gap: "10px" }} className="dropdown-item" href="">
                                    <img style={{ width: "20px", height: "15px", marginTop: "5px" }} src="https://cdn.countryflags.com/thumbs/vietnam/flag-400.png" alt="" />
                                    <p >VietNamese</p>
                                </a>
                                <a style={{ display: "flex", gap: "10px" }} className="dropdown-item" href="">
                                    <img style={{ width: "20px", height: "15px", marginTop: "5px" }} src="https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png" alt="" />
                                    <p >Japanese</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>


        </div>
    )
}
