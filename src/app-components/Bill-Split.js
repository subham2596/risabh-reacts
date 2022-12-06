import React, {useRef, useState} from 'react'
import './billSplit.css'

const BillSplit = () => {
    // let calculation = 0
    const price = useRef(null);
    const [priceInput, setPriceInput] = useState(null)

    
    const [totalInput, setTotalInput] = useState(0)
    const totalPrice = useRef(totalInput)

    const count = useRef(null)
    const [splitAmount, setSplitAmount] = useState(`Rs 0.00 /-`)
    const [makeNull, setNull] = useState(null)

    function addHandler(){
        let value = price.current.value
        let totalValue = totalPrice.current.value
        console.log(value)
        console.log(totalValue)
        let calculation = parseInt(totalValue) + parseInt(value)
        setTotalInput(calculation)
        // setPriceInput(null) // trying to clear the input value, not working

    }



    function resetHandler(){
        setTotalInput(0)
        setPriceInput(null)
    }

    function splitHandler(){
        let amountToBeSplitted = totalPrice.current.value
        let peopleCount = count.current.value
        let amountAfterSplit = (amountToBeSplitted / peopleCount).toFixed(2)
        setSplitAmount(`Rs ${amountAfterSplit} /-`)
    }

    function clearHandler(){
        setTotalInput(0)
        setPriceInput(null)
        setNull(null)
        setSplitAmount(`Rs 0.00 /-`)
    }

  return (

    <React.Fragment>

        <div className="split-container">
            <h3 className='title'>Quick-Split</h3>

            <div className='w-600'>
                <label>Add your prices :</label>
                <input type="number" placeholder='Enter price value...' ref={price} value={priceInput}/>

            </div>
            
            <div className="w-600">
                <div>
                    <button className='btn-calculation' onClick={addHandler}>Add</button>
                    <button className='btn-calculation'>Deduct</button>

                </div>
            </div>

            <div className='w-600'>
                <label>Your total bill :</label>
                <input type="number" placeholder='Amount...' ref={totalPrice} value={totalInput} disabled/>

            </div>

            <div className="w-600 reset">
                <button className='btn-calculation' onClick={resetHandler}>Reset</button>
            </div>

            <h4>Your total bill is {totalInput}</h4>

            <div className='w-600'>
                <label>Split between</label>
                <input type="number" placeholder='Count...' ref={count} className="splitInput" value={makeNull}/>
                <label>people</label>
                <button className='btn-calculation changeColor' onClick={splitHandler}>Quick Split</button>


            </div>

            <h4>Amount after split:- <span className='finalValue'>{splitAmount}</span></h4>
            <button className='btn-calculation m-top' onClick={clearHandler}>Clear All</button>
            
        </div>



    </React.Fragment>
  )
}

export default BillSplit