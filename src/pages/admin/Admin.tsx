import { Outlet } from 'react-router-dom'
import './admin.scss'

export default function Admin() {
    //const navigate = useNavigate();
    return (
        // <div className='container'>
        //     <div className='container_admin'>
        //         <div className='container_admin_text'>
        //             <h1>ADMIN</h1>

        //             <input type="text" placeholder='Search' />
        //         </div>
        //         <div className='container_manager'>
        //             <div className='container_manager_detail'>
        //                 <ul>
        //                     <li onClick={() => {
        //                         navigate("productManager");
        //                     }}>Add Products</li>
        //                     <li onClick={() => {
        //                         navigate("listProduct");
        //                     }}>List Products</li>
        //                     <li onClick={() => {
        //                         navigate("userManager");
        //                     }}>Customers</li>
        //                 </ul>
        //             </div>
        //             <div>
        //                 <Outlet></Outlet>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='container'>
            <div className='container_title'>
                <div className='addmin'>
                    <h1>ADMIN</h1>
                </div>
                <div className='Manager'>
                    <div className="dropdown">
                        <button
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Product Manager
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="productManager">
                                Add Product
                            </a>
                            <a className="dropdown-item" href="listProduct">
                                List Product
                            </a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button
                            className="dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            User Manager
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container_content'>
                <div className='container_content_search'>
                    <input type="text" placeholder='Search' />
                </div>
                <div className='container_content_manager'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
