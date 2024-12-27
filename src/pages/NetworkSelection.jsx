import './NetworkSelection.css'

export default function NetworkSelection() {
  return (
    <div className="network-selection">
      <div className="container">
        <div className="selection-content">
          <h1 className="title">Select Your Wallet</h1>
          <p className="subtitle">
            Choose your preferred wallet to connect to Ghost Network
          </p>
          
          <div className="network-cards">
            <div className="network-card xumm">
              <div className="card-content">
                <div className="network-logo">
                  <img src="/xumm-logo.png" alt="XUMM" />
                </div>
                <p className="network-description">
                  Securely connect using the XUMM Wallet
                </p>
                <button className="select-button">
                  Connect with XUMM
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>

            <div className="network-card stargazer">
              <div className="card-content">
                <div className="network-logo">
                  <img src="/stargazer-logo.png" alt="Stargazer" />
                </div>
                <p className="network-description">
                  Securely connect using the Stargazer Wallet
                </p>
                <button className="select-button">
                  Connect with Stargazer
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
