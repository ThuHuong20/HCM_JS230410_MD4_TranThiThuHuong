import React from 'react'

export default function Recipts() {
    return (
        <>
            <div className="informationLine_receipts">
                <div className="informationLine_h2">
                    <h2>Purchase History</h2>
                </div>
                <div>
                    {/* Noi hien thi history */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <div className="tableContent">#</div>
                                </th>
                                <th scope="col">
                                    <div className="tableContent">Receipt Id</div>
                                </th>
                                <th scope="col">
                                    <div className="tableContent">Total</div>
                                </th>
                                <th scope="col">
                                    <div className="tableContent">Paid Status</div>
                                </th>
                                <th scope="col">
                                    <div className="tableContent">Paid Mode</div>
                                </th>
                                <th scope="col">
                                    <div className="tableContent">Create Time</div>
                                </th>

                                <th scope="col">
                                    <div className="tableContent">Detail</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr key={Date.now() * Math.random()}>
                                <th scope="col">
                                    <div className="tableContent">1</div>
                                </th>
                                <td scope="col">
                                    <div className="tableContent">333</div>
                                </td>
                                <td scope="col">
                                    <div className="tableContent" style={{ color: "red" }}>
                                        333
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="tableContent">
                                        {/* {receipt.paid ? "Paid" : "Un paid"} */}
                                    </div>
                                </td>
                                <td scope="col">
                                    <div className="tableContent">hhhh</div>
                                </td>
                                <td scope="col">
                                    <div className="tableContent">hhhhh</div>
                                </td>
                                <td scope="col">
                                    <div className="tableContent">
                                        <button
                                            style={{ backgroundColor: "rgb(10, 88, 202)" }}
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            Details
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="informationLine_Continue">
                    <button
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </>


    )
}
