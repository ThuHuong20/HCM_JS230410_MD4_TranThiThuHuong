import './searchProduct.scss'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next'
import api from '@services/api';
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
// Define a union type for the allowed placement values
type OffcanvasPlacement = 'top' | 'bottom' | 'start' | 'end';

interface OffCanvasExampleProps {
    name: string;
    placement: OffcanvasPlacement | undefined; // Use the defined union type
}
interface Product {
    id: string;
    name: string;
    avatar: string;
    price: number;
    des: string;
}

function OffCanvasExample({ placement }: OffCanvasExampleProps) {

    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { t } = useTranslation();

    /* Search */

    const [searchStatus, setSearchStatus] = useState(false);
    const [searchData, setSearchData] = useState<Product[]>([]);;



    let timeOut: any;
    function search(e: any) {
        clearTimeout(timeOut);
        if (e.target.value == "") {
            setSearchData([])
            return;
        };
        timeOut = setTimeout(async () => {
            //  call api
            setSearchStatus(true)
            try {
                if (searchStatus) {
                    return
                }
                let result = await api.productApi.search(e.target.value);
                if (result.status == 200) {
                    // sau 1.5s set lai data & tat loading
                    setTimeout(() => {
                        setSearchStatus(false);
                        setSearchData(result.data.data);

                    }, 1500)

                } else {
                    // failed
                }
            } catch (err) {
                console.log("loi call api search");

            }
        }, 600)

    }


    return (
        <>
            <Button onClick={handleShow} className="input">
                <input style={{ padding: "5px", borderRadius: "10px", border: "1px solid black" }} type="text" placeholder={t('search')} />
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement={placement}>
                <Offcanvas.Header style={{ display: "flex", justifyContent: "center", gap: "30px" }} closeButton>
                    <Offcanvas.Title> <input onChange={(e) => {
                        search(e);
                    }} style={{ width: '400px', padding: "5px 10px", border: "1px solid black", borderRadius: "5px", height: "40px", marginTop: "5px" }} type="text" placeholder={t('search')} /> </Offcanvas.Title>
                    <Button variant="outline-secondary" onClick={handleClose} className='close-button'>
                        <i className="fa-solid fa-xmark"></i>
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='product_container'>

                        {searchData.length > 0 ? (
                            searchData.map((product) => (
                                <div onClick={() => {
                                    window.open("/products/" + product.id, "_blank");
                                }} className='product'>
                                    <img src={product.avatar} alt="" />
                                    <div className='product_text'>
                                        <h3>{product.name}</h3>
                                        <p><b>${product.price}</b></p>
                                        <p>{product.des}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <></>
                            // <div
                            //     style={{
                            //         textAlign: "center",
                            //         fontSize: "25px",
                            //         fontWeight: "bold",
                            //     }}
                            // >
                            //     Not product found!
                            // </div>
                        )}
                        {searchStatus ? (
                            <div className="loading">
                                <Spin indicator={antIcon} />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>

                </Offcanvas.Body>

            </Offcanvas>

        </>
    );
}

function SearchProduct() {
    return (
        <>
            <OffCanvasExample placement="top" name="top" />
        </>
    );
}

export default SearchProduct;