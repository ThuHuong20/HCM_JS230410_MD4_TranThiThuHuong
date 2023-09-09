
import './product.scss'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '@services/api'
interface Product {
  avatar: string;
  name: string;
  price: number;
  id: string;
}

export default function Product() {
  const { categoryId } = useParams();
  const [pageData, setPageData] = useState([]);
  console.log("pageData:", pageData)
  const navigate = useNavigate();
  useEffect(() => {
    if (categoryId) {
      api.productApi
        .findProductByCategory(categoryId)
        .then((res) => {
          if (res.status == 200) {
            setPageData(res.data.data);
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          alert("sap server");
        });
    }

  }, [categoryId]);
  return (
    <div>
      <div className='container'>
        {pageData?.map((product: Product) => (
          <div
            key={Date.now() * Math.random()} className='container_product'
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <img src={product.avatar} alt="" />
            <p>{product.name}</p>
            <div>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <p>${product.price}</p>
            <button>View Product</button>
          </div>
        ))}

      </div>
    </div>
  )
}
