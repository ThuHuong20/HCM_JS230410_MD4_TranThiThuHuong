import './searchProduct.scss'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Define a union type for the allowed placement values
type OffcanvasPlacement = 'top' | 'bottom' | 'start' | 'end';

interface OffCanvasExampleProps {
    name: string;
    placement: OffcanvasPlacement | undefined; // Use the defined union type
}

function OffCanvasExample({ placement }: OffCanvasExampleProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} className="input">
                <input style={{ padding: "5px", borderRadius: "10px", border: "1px solid black" }} type="text" placeholder='Search' />
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement={placement}>
                <Offcanvas.Header style={{ display: "flex", justifyContent: "center", gap: "30px" }} closeButton>
                    <Offcanvas.Title> <input style={{ width: '400px', padding: "5px 10px", border: "1px solid black", borderRadius: "5px", height: "40px", marginTop: "5px" }} type="text" placeholder='Search...' /> </Offcanvas.Title>
                    <Button variant="outline-secondary" onClick={handleClose} className='close-button'>
                        <i className="fa-solid fa-xmark"></i>
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='product_container'>
                        <div className='product'>
                            <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Pre-Sliced-Vegan-Chocolate-Cake-300x225.jpg" alt="" />
                            <div className='product_text'>
                                <h3>Pre-Sliced Vegan Chocolate Cake</h3>
                                <p><b>$120</b></p>
                                <p>Des:If frozen, leave at room temperature for 4-5 hours before serving. If refrigerated, leave at room temperature for 1 hour before serving for best serving texture</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Pre-Sliced-Vegan-Chocolate-Cake-300x225.jpg" alt="" />
                            <div className='product_text'>
                                <h3>Pre-Sliced Vegan Chocolate Cake</h3>
                                <p><b>$120</b></p>
                                <p>Des:If frozen, leave at room temperature for 4-5 hours before serving. If refrigerated, leave at room temperature for 1 hour before serving for best serving texture</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Pre-Sliced-Vegan-Chocolate-Cake-300x225.jpg" alt="" />
                            <div className='product_text'>
                                <h3>Pre-Sliced Vegan Chocolate Cake</h3>
                                <p><b>$120</b></p>
                                <p>Des: If frozen, leave at room temperature for 4-5 hours before serving. If refrigerated, leave at room temperature for 1 hour before serving for best serving texture</p>
                            </div>
                        </div>
                        <div className='product'>
                            <img src="https://cakerun.com.au/wp-content/uploads/2022/09/Pre-Sliced-Vegan-Chocolate-Cake-300x225.jpg" alt="" />
                            <div className='product_text'>
                                <h3>Pre-Sliced Vegan Chocolate Cake</h3>
                                <p><b>$120</b></p>
                                <p>Des: If frozen, leave at room temperature for 4-5 hours before serving. If refrigerated, leave at room temperature for 1 hour before serving for best serving texture</p>
                            </div>
                        </div>
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