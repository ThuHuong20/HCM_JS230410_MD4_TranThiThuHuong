import './ProductManager.scss'

export default function ProductManager() {
    return (
        <div>

            <div className="form_container">
                <h1>Add Product</h1>
                <form
                    className="form_add"

                >
                    <div className="form_add_avatar">
                        <img
                            style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                            }}

                            src="https://content.gobsn.com/i/bodyandfit/no-xplode_Image_01?layer0=$PDP$"
                        />
                        <br />

                        <input
                            name="avatar"

                            type="file"
                        />
                        <br />
                    </div>
                    <div className="form_add_product">
                        <select
                            name="category_id"
                            style={{
                                border: "1px solid black",
                                borderRadius: "5px",
                            }}
                        >

                            <option >
                                hhhhh
                            </option>

                        </select>
                        <br />
                        <input type="text" placeholder="Name Product" name="name"></input>
                        <br />
                        <input type="text" placeholder="Des" name="des"></input>
                        <br />
                        <input type="text" placeholder="Price" name="price"></input>
                        <br />
                        <button className="btn btn-info" type="submit">
                            Add
                        </button>
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
