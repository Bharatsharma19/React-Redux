import React from 'react'

const Shop = () => {
    return (
        <div className="container text-center my-4">
            <h2>Deposit / Withdraw Money</h2>
            <div className='my-4' style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                <hr /><br />
                <button className="btn btn-primary mx-2"> - </button>
                <b> <h4> Update </h4> </b>
                <button className="btn btn-primary mx-2"> + </button>
            </div>
        </div>
    )
}

export default Shop
