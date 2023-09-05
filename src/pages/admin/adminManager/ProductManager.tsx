import { useEffect, useState, useRef } from 'react'
import api from '@/services/api';
import './ProductManager.scss'

interface Category {
    id: string;
    title: string;
    avatar: string;
}
interface Picture {
    file: File;
    url: string;
}

export default function ProductManager() {

    const imgPreviewRef = useRef();
    const [categories, setCategories] = useState([]);
    const [pictures, setPictures] = useState<Picture[]>([]);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    useEffect(() => {
        api.categoryApi.findMany()
            .then(res => {
                if (res.status != 200) {
                    alert(res.data.message)
                } else {
                    setCategories(res.data.data)
                }
            })
    }, [])
    function addNewProduct(e: FormDataEvent) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("product", JSON.stringify({
            categoryId: (e.target as any).categoryId.value,
            name: (e.target as any).name.value,
            des: (e.target as any).des.value,
            price: (e.target as any).price.value,
        }))
        formData.append("imgs", avatarFile!)
        for (let i in pictures) {
            formData.append("imgs", pictures[i].file)
        }

        api.productApi.create(formData)
            .then(res => {
                console.log("res", res)
            })
            .catch(err => {

            })

        window.alert("OK")
    }

    return (
        <div>
            <div className="form_container">
                <h1>Add Product</h1>
                <form onSubmit={(e) => {
                    addNewProduct(e);
                }}
                    className="form_add"

                >
                    <div className="form_add_product">
                        <select
                            name='categoryId'
                            style={{
                                border: "1px solid black",
                                borderRadius: "5px",
                            }}
                        >

                            {
                                categories.map(category => <option key={Math.random() * Date.now()} value={(category as Category).id}>{(category as Category).title}</option>)
                            }

                        </select>
                        <br />
                        <input type="text" placeholder="Name Product" name="name"></input>

                        <input type="text" placeholder="Des" name="des"></input>

                        <input type="text" placeholder="Price" name="price"></input>

                        <button className="btn btn-info" type="submit">
                            Add
                        </button>
                    </div>
                    <div className="form_add_avatar">
                        <div>
                            Avatar
                            <input name='imgs' type="file" onChange={(e) => {
                                if (e.target.files) {
                                    if (e.target.files.length > 0) {
                                        (imgPreviewRef.current! as HTMLImageElement).src = URL.createObjectURL(e.target.files[0]);
                                        setAvatarFile(e.target.files[0])
                                    }
                                }
                            }} />
                            <img ref={imgPreviewRef} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                        </div>
                        <div>
                            Pictures
                            <input name="imgs" type="file" multiple onChange={(e) => {
                                if (e.target.files) {
                                    if (e.target.files.length > 0) {
                                        let tempPictures: Picture[] = [];
                                        for (let i in e.target.files) {
                                            if (i == "length") {
                                                break
                                            }
                                            tempPictures.push({
                                                file: e.target.files[i],
                                                url: URL.createObjectURL(e.target.files[i])
                                            })
                                        }
                                        setPictures(tempPictures)
                                    }
                                }
                            }} />
                            <div>
                                {
                                    pictures.map(picture => <img src={picture.url} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />)
                                }
                            </div>
                        </div>
                        <br />
                    </div>

                </form>
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
                                {/* <th scope="col">Stock</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            <tr key={Date.now() * Math.random()}>
                                <th scope="row">1</th>
                                <td>
                                    <img
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            borderRadius: "50%",
                                        }}
                                        src=''
                                        alt=""
                                    />
                                </td>

                                <td>hhhhh</td>
                                <td>hhhhhhhhhhhhhhhh</td>
                                <td>345</td>
                                <td>
                                    <span style={{ margin: "0px 30px" }}>
                                        6
                                    </span>
                                    <button

                                        type="button"
                                        className="btn btn-info"
                                    >
                                        UpDate
                                    </button>
                                </td>



                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
