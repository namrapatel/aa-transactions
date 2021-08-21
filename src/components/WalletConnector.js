import React from 'react';
import { ethers } from "ethers";

function WalletConnector(props) {
    let provider;
    window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));
    const signer = provider.getSigner();

    return(
    <div className="WalletConnector">
        {provider == null ? 
            <div className="button">
                Connect wallet
            </div> :
            <div>
                {signer.getAddress()}
            </div>
        }
       
    </div>)
    
}

export default WalletConnector;