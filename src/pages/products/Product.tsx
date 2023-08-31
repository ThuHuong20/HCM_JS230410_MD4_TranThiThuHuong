import { Outlet } from 'react-router-dom'
import './product.scss'
import { useCallback, useState } from 'react'
import Test from '@/components/Test'

export interface Prop {
  count: number,
  handlePrintCount: (count: number) => void
}

export default function Product() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  const handlePrintCount = useCallback((count: number) => {
    alert("Count value is: " + count)
  }, [count])

  console.log("hhhhh");
  return (
    <div className='container'>
      <h1>Product{count}</h1>
      <Test count={count} handlePrintCount={handlePrintCount} />
      <button onClick={() => {
        setCount(count + 1)
      }}>Tawng</button>
      <button onClick={() => {
        setCount2(count2 + 1)
      }}>TANG 2</button>
      <Outlet />

      <div className='container_product'>
        <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
        <p>Vegan Chocolate Cake</p>
        <div>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>$78.00</p>
        <button>View Product</button>
      </div>
      <div className='container_product'>
        <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
        <p>Vegan Chocolate Cake</p>
        <div>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>$78.00</p>
        <button>View Product</button>
      </div>
      <div className='container_product'>
        <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
        <p>Vegan Chocolate Cake</p>
        <div>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>$78.00</p>
        <button>View Product</button>
      </div>
      <div className='container_product'>
        <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
        <p>Vegan Chocolate Cake</p>
        <div>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>$78.00</p>
        <button>View Product</button>
      </div>
      <div className='container_product'>
        <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
        <p>Vegan Chocolate Cake</p>
        <div>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>$78.00</p>
        <button>View Product</button>
      </div>
      <div className='container_product'>
        <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
        <p>Vegan Chocolate Cake</p>
        <div>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>$78.00</p>
        <button>View Product</button>
      </div>
      <div className='container_product'>
        <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
        <p>Vegan Chocolate Cake</p>
        <div>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>$78.00</p>
        <button>View Product</button>
      </div>
      <div className='container_product'>
        <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Whole-Cake-Chocolate-Vegan-300x225.jpg" alt="" />
        <p>Vegan Chocolate Cake</p>
        <div>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>$78.00</p>
        <button>View Product</button>
      </div>
    </div>
  )
}
