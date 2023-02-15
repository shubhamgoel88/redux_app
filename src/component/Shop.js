import React from 'react'
import { useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import { useSelector } from 'react-redux'
import { actionCreators } from '../state';
const Shop = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount)
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators ,dispatch);
  return (
    <div>
        <h2>Deposit/Withdrawl</h2>
      <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}}>-</button>
       Balance Update: ({balance})
      <button className='btn btn-primary mx-2' onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
