import { useState, useEffect } from 'react'
import api from '@/services/api';
import './listProduct.scss'


export default function ListProduct() {
    const [maxItemPage, setMaxItemPage] = useState(5);
    const [skipItem, setSkipItem] = useState(0);
    const [maxPage, setMaxPage] = useState<any[]>([]);
    const [products, setProducts] = useState([]);
    console.log("🚀 ~ file: ListProduct.tsx:18 ~ ListProduct ~ products:", products)
    useEffect(() => {
        api.productApi.findMany(maxItemPage, skipItem)
            .then(res => {
                if (res.status == 200) {
                    console.log("res.data", res.data)
                    let maxPageArr: any[] = [];
                    for (let i = 0; i < res.data.maxPage; i++) {
                        maxPageArr.push({
                            number: Number(i) + 1,
                            skip: res.data.data.length * Number(i)
                        })
                    }
                    setMaxPage(maxPageArr);
                    setSkipItem(res.data.data.length)
                    setProducts(res.data.data)
                }
            })
    }, [])

    function changePage(pageItemObj: any) {
        api.productApi.findMany(maxItemPage, pageItemObj.skip)
            .then(res => {
                if (res.status == 200) {
                    console.log("res.data", res.data)
                    let maxPageArr: any[] = [];
                    for (let i = 0; i < res.data.maxPage; i++) {
                        maxPageArr.push({
                            number: Number(i) + 1,
                            skip: res.data.data.length * Number(i)
                        })
                    }
                    setMaxPage(maxPageArr);
                    setSkipItem(res.data.data.length)
                    setProducts(res.data.data)
                }
            })
    }


    return (
        <div className="form_listProduct">
            <h1>List Product</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">UpDate</th>

                    </tr>
                </thead>
                <tbody >
                    {products.map((product: any, index) => (
                        <tr
                            key={Date.now() * Math.random()}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <img
                                    style={{
                                        width: "180px",
                                        height: "100px",
                                        borderRadius: "1%",
                                        padding: "10px"
                                    }}
                                    src={product.avatar}
                                    alt=""
                                />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.des}</td>
                            <td>{product.price}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-info"
                                >
                                    UpDate
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div className='page_box'>
                {
                    maxPage.map(item => {
                        return (
                            <span style={{ marginRight: "15px", cursor: "pointer" }} onClick={() => {
                                changePage(item)
                            }}>{item.number}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}
