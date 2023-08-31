import { Outlet } from 'react-router-dom'
import './admin.scss'

export default function Admin() {
    return (
        <div className='container'>
            <div className='container_admin'>
                <div className='container_admin_text'>
                    <h1>Admin</h1>
                </div>
                <div className='container_manager'>
                    <div>
                        <ul>
                            <li>Product Manager</li>
                            <li>User Manager</li>
                        </ul>
                    </div>
                    <div>
                        content
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    )
}
