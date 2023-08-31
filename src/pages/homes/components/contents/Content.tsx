import './conten.scss'

export default function Content() {
    return (
        <div className='container'>
            <div className='container_header'>
                <div className='container_header_text'>
                    <p>───</p>
                    <h1>HOW IT WORKS</h1>
                    <p>───</p>
                </div>
                <div className='container_header_icon'>
                    <div>
                        <img src="../images/icon1.png" alt="" />
                        <p>Select you cake</p>
                    </div>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                    <div>
                        <img src="../images/icon2.png" alt="" />
                        <p>Choose your delivery date <br /> and time window</p>
                    </div>
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                    <div>
                        <img src="../images/icon3.png" alt="" />
                        <p>A friendly Cake Run driver <br /> delivers your cake</p>
                    </div>
                </div>
            </div>
            <div className='container_category'>
                <div className='container_category_text'>
                    <p>───</p>
                    <h1>SHOP BY CATEGORY</h1>
                    <p>───</p>
                </div>
                <div className='container_category_img'>
                    <div>
                        <img src="../images/category1.webp" alt="" />
                        <h2>WHOLE CAKES</h2>
                        <button>Buy Now</button>
                    </div>
                    <div>
                        <img src="../images/category2.webp" alt="" />
                        <h2>PRE-SLICED CAKES</h2>
                        <button>Buy Now</button>
                    </div>
                    <div>
                        <img src="../images/category3.webp" alt="" />
                        <h2>CUPCAKES</h2>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='container_sellers'>
                <div className='container_sellers_text'>
                    <p>───</p>
                    <h1>BEST SELLERS</h1>
                    <p>───</p>
                </div>
                <div className='container_sellers_best'>
                    <div className='container_sellers_best_one'>
                        <div>
                            <img src="../images/seller1.webp" alt="" />
                        </div>
                        <div>
                            <h2>Ferrero Rocher Cake</h2>
                            <p>Indulge in our famous Ferrero Rocher cake, featuring two layers of light and fluffy almond dacquoise and a decadent, velvety smooth hazelnut mousse. It’s no surprise this cake is our best seller!</p>
                            <button>ORDER NOW</button>
                        </div>
                    </div>
                    <div className='container_sellers_best_two'>
                        <div>
                            <h2>Vanilla Sponge & Rasberry Cake</h2>
                            <p>Indulge in our sumptuous Vanilla Bean & Rasberry Cake, expertly crafted with the finest vanilla beans and delicately paired with succulent, fresh seasonal raspberries. This heavenly dessert offers a harmonious union of velvety smoothness and vibrant tanginess, transporting you to a realm of pure decadence.</p>
                            <button>ORDER NOW</button>
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
                    <div>Join Us & Shop Instagram</div>
                </div>
                <div className='container_insta_img'>
                    <div className='container_insta_img_learn'>
                        <img src="../images/insta1.webp" alt="" />
                        <p>Secrets Revealed: How to Make a Fruit Cake Like a Pro!</p>
                        <button><a href="https://cakerun.com.au/secrets-revealed-how-to-make-a-fruit-cake-like-a-pro/">Learn More</a></button>
                    </div>
                    <div className='container_insta_img_learn'>
                        <img src="../images/insta2.webp" alt="" />
                        <p>The Rise of Vegan Baking: Exploring Egg-Free and Dairy-Free Desserts</p>
                        <button><a href="https://cakerun.com.au/the-rise-of-vegan-baking-exploring-egg-free-and-dairy-free-desserts/">Learn More</a></button>
                    </div>
                    <div className='container_insta_img_learn'>
                        <img src="../images/insta3.webp" alt="" />
                        <p>Myths and Misconceptions About Gluten-Free Diets Debunked</p>
                        <button><a href="https://cakerun.com.au/myths-and-misconceptions-about-gluten-free-diets-debunked/">Learn More</a></button>
                    </div>
                </div>
            </div>
        </div>

    )
}
