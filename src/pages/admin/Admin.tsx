import { Outlet, useNavigate } from 'react-router-dom'
import './admin.scss'

export default function Admin() {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='container_admin'>
                <div className='container_admin_text'>
                    <h1>Admin</h1>
                </div>
                <div className='container_manager'>
                    <div className='container_manager_detail'>
                        <ul>
                            <li onClick={() => {
                                navigate("productManager");
                            }}>Products</li>
                            <li onClick={() => {
                                navigate("userManager");
                            }}>Customers</li>
                        </ul>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    )
}
