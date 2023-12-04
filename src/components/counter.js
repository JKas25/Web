import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0);
    const handleDecrement = ()=>{
        if(count > 0){
            setCount(count - 1);
        }
    }
    const handleIncrement = ()=>{
        if(count < 99) {
            setCount(count + 1)
        }
    }
    
    return(
        <div className="d-flex flex-row mx-5 justify-content-center mb-3 align-items-center">
            <div className="me-1">QTY:</div>
            <button onClick={handleDecrement} className="btn btn-outline-secondary border-0">
                <i class="bi bi-dash-circle-fill"></i>
            </button>
              <input style={{width: 60}} step={1} type="number" class="form-control" value={count} id="cart-number" placeholder="0" />
              <button onClick={handleIncrement} className="btn btn-outline-primary border-0">
              <i class="bi bi-plus-circle-fill"></i>
            </button>
        </div>

        
    )
}

export default Counter;