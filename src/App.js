import React, { useState } from 'react';
import './App.css';
import CertificateGenerator from './components/CertificateGenerator';
import CertificatePreview from './components/CertificatePreview';

function App() {
  const [participantName, setParticipantName] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MDCAN BDM 2025 Certificate Generator</h1>
        <p>Generate your certificate of participation or service acknowledgement</p>
      </header>
      
      <main className="App-main">
        <CertificateGenerator 
          participantName={participantName}
          setParticipantName={setParticipantName}
          showPreview={showPreview}
          setShowPreview={setShowPreview}
        />
        
        {showPreview && (
          <CertificatePreview participantName={participantName} />
        )}
      </main>
    </div>
  );
}

export default App;
