import React, {useEffect, useState} from 'react';
import { ethers, utils } from "ethers";
import { formatEther } from 'ethers/lib/utils';

function WalletConnector(props) {
    const [userAddress, setUserAddress] = useState("");
    const [userBalance, setUserBalance] = useState(0);

    let provider;
    window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));
    const signer = provider.getSigner();

    useEffect(() => {
        async function getUserAddress() {
            await signer.getAddress().then(result => {
                setUserAddress(result);
            })
        }
        getUserAddress()

        async function getUserBalance() {
            await signer.getBalance().then(result => {
                var ether = formatEther(result);
                var num = parseFloat(ether, 10).toFixed(4);
                setUserBalance(num);
            })
        }
        getUserBalance()
      }, []);

    return(
    <div className="WalletConnector">
        {provider == null ? 
            <div className="button">
                Connect wallet
            </div> :
            <div className="userInfo">
                <div className="userBalance">{userBalance + " ETH"}</div>
                <div className="userAddress">{userAddress}</div>
            </div>
        }
    </div>)
    
}

export default WalletConnector;