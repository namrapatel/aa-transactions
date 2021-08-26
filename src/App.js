import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";
import './components/WalletConnector';
import WalletConnector from './components/WalletConnector';
import UserOperationForm from './components/UserOperationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">Account Abstraction tx</div>
        <WalletConnector></WalletConnector>
      </header>
      <body>
        <UserOperationForm></UserOperationForm>
      </body>
    </div>
  );
}

export default App;
