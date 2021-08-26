import React, {useState} from 'react';


function UserOperationForm(props) {
    const [target, setTarget] = useState("");
    const [callData, setCallData] = useState("");
    const [maxFeePerGas, setMaxFeePerGas] = useState(0);
    const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] = useState(0); 

    return(
        <form className="form">
            <div className="formInput">
                <label>Target address  <input type="text"/>
                </label>
            </div>
            <div className="formInput">
                <label>Send to  <input type="text" />
                </label>
            </div>
            <div className="formInput">
                <label>Amount  <input type="text" />
                </label>
            </div>
            <div className="formInput">
                <label>Token  <input type="text"  />
                </label>
            </div>
      </form>
    )
}

export default UserOperationForm;