import { utils } from 'ethers';
import React, {useState} from 'react';


function UserOperationForm(props) {
    const [target, setTarget] = useState("");
    const [callData, setCallData] = useState("");
    const [maxFeePerGas, setMaxFeePerGas] = useState(0);
    const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] = useState(0); 
    const [sendToAddress, setSendToAddress] = useState("");
    const [amount, setAmount] = useState(0);

    function createOp(target, callData, maxFeePerGas, maxPriorityFeePerGas) {
        this.target = target;
        this.callData = callData;
        this.maxFeePerGas = maxFeePerGas;
        this.maxPriorityFeePerGas = maxPriorityFeePerGas;
    }

    function updateOp(target, callData, maxFeePerGas, maxPriorityFeePerGas) {
        // TODO
    }

    var ops = [
        new createOp(
            target ,
            callData,
            maxFeePerGas,
            maxPriorityFeePerGas
        ),
    ]

    function generateCalldata() {
        const functionPrototype = utils.keccak256(utils.toUtf8Bytes("transfer(address payable, uint)"));
        // const trimmedPrototype  = functionPrototype.substring(0, length);
        const addressParam = utils.keccak256(utils.toUtf8Bytes(sendToAddress))
        const amountParam = utils.keccak256(utils.toUtf8Bytes(amount))
        // might need to pad the function selector to 32 bytes
        setCallData(functionPrototype+addressParam+amountParam);
    }

    const handleTargetChange = (e) => {
        setTarget(e.target.value);
    }

    const handleSendToChange = (e) => {
        setSendToAddress(e.target.value);
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const handleMaxFeeChange = (e) => {
        setMaxFeePerGas(e.target.value);
    }

    const handlePriorityFeeChange = (e) => {
        setMaxPriorityFeePerGas(e.target.value);
    }

    function handleSubmit() {
        console.log(callData);
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="formInput">
                <label>Target address  <input type="text" value={target} onChange={handleTargetChange}/>
                </label>
            </div>
            <div className="formInput">
                <label>Send to  <input type="text" value={sendToAddress} onChange={handleSendToChange}/>
                </label>
            </div>
            <div className="formInput">
                <label>Amount(ETH)  <input type="text" value={amount} onChange={handleAmountChange}/>
                </label>
            </div>
            <div className="formInput">
                <label>Max Fee Per Gas  <input type="text" value={amount} onChange={handleMaxFeeChange}/>
                </label>
            </div>
            <div className="formInput">
                <label>Max Priority Fee Per Gas  <input type="text" value={amount} onChange={handlePriorityFeeChange}/>
                </label>
            </div>
            <input type="submit" value="Submit" />
      </form>
    )
}

export default UserOperationForm;