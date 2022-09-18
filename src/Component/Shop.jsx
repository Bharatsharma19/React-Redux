import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {

    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)

    return (
        <div className="container text-center my-4">
            <h2>Deposit / Withdraw Money</h2>
            <div className='my-4' style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                <hr /><br />
                <button className="btn btn-primary mx-2" onClick={() => { (withdrawMoney(1000)) }}> - </button>
                <b> <h4> Update </h4> </b>
                <button className="btn btn-primary mx-2" onClick={() => { (depositMoney(1000)) }}> + </button>
            </div>
        </div>
    )
}

export default Shop
