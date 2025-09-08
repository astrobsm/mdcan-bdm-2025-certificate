import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './CertificateGenerator.css';

const CertificateGenerator = ({ participantName, setParticipantName, showPreview, setShowPreview }) => {
  const [certificateType, setCertificateType] = useState('participation');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleNameChange = (e) => {
    setParticipantName(e.target.value);
  };

  const handlePreview = () => {
    if (participantName.trim()) {
      setShowPreview(true);
    } else {
      alert('Please enter a participant name first.');
    }
  };

  const handleDownload = async () => {
    if (!participantName.trim()) {
      alert('Please enter a participant name first.');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Create a temporary div for rendering the certificate
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '-9999px';
      tempDiv.style.width = '1122px'; // A4 landscape width (297mm at 96 DPI)
      tempDiv.style.height = '794px'; // A4 landscape height (210mm at 96 DPI)
      tempDiv.style.padding = '0';
      tempDiv.style.margin = '0';
      tempDiv.style.boxSizing = 'border-box';
      tempDiv.style.overflow = 'visible';
      tempDiv.innerHTML = generateCertificateHTML();
      document.body.appendChild(tempDiv);
      
      // Wait for images to load
      const images = tempDiv.querySelectorAll('img');
      await Promise.all(Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      }));

      // Generate canvas from the temporary div
      const canvas = await html2canvas(tempDiv, {
        width: 1400,
        height: 1000,
        scale: 1.2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        windowWidth: 1400,
        windowHeight: 1000,
        logging: false,
        removeContainer: false,
        foreignObjectRendering: false
      });

      // Create PDF with custom dimensions
      const pdf = new jsPDF('landscape', 'mm', [420, 297]); // A3 landscape for better quality
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // Calculate dimensions to fit the PDF
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Download the PDF
      const filename = `${participantName.replace(/[^a-zA-Z0-9]/g, '_')}_${certificateType}_certificate.pdf`;
      pdf.save(filename);

      // Clean up
      document.body.removeChild(tempDiv);
    } catch (error) {
      console.error('Error generating certificate:', error);
      alert('Error generating certificate. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateCertificateHTML = () => {
    const commonStyles = `
      <style>
        .certificate-download {
          width: 1400px;
          height: 1000px;
          background: 
            linear-gradient(45deg, #0d7330 0%, #0d7330 15px, #ffffff 15px, #ffffff 30px, #0d7330 30px, #0d7330 45px, transparent 45px),
            linear-gradient(-45deg, #0d7330 0%, #0d7330 15px, #ffffff 15px, #ffffff 30px, #0d7330 30px, #0d7330 45px, transparent 45px),
            linear-gradient(135deg, #0d7330 0%, #0d7330 15px, #ffffff 15px, #ffffff 30px, #0d7330 30px, #0d7330 45px, transparent 45px),
            linear-gradient(225deg, #0d7330 0%, #0d7330 15px, #ffffff 15px, #ffffff 30px, #0d7330 30px, #0d7330 45px, transparent 45px),
            radial-gradient(circle at 70px 70px, rgba(212, 175, 55, 0.1) 0%, transparent 80px),
            radial-gradient(circle at calc(100% - 70px) 70px, rgba(212, 175, 55, 0.1) 0%, transparent 80px),
            radial-gradient(circle at 70px calc(100% - 70px), rgba(212, 175, 55, 0.1) 0%, transparent 80px),
            radial-gradient(circle at calc(100% - 70px) calc(100% - 70px), rgba(212, 175, 55, 0.1) 0%, transparent 80px),
            linear-gradient(45deg, transparent 40%, rgba(212, 175, 55, 0.03) 50%, transparent 60%),
            linear-gradient(-45deg, transparent 40%, rgba(212, 175, 55, 0.03) 50%, transparent 60%),
            linear-gradient(135deg, #fefefe 0%, #f8f9fa 50%, #fefefe 100%);
          background-size: 
            120px 120px, 120px 120px, 120px 120px, 120px 120px,
            100% 100%, 100% 100%, 100% 100%, 100% 100%,
            100% 100%, 100% 100%,
            100% 100%;
          background-position:
            top left, top right, bottom left, bottom right,
            0 0, 0 0, 0 0, 0 0,
            0 0, 0 0,
            0 0;
          background-repeat: no-repeat;
          border: 12px solid;
          border-image: linear-gradient(45deg, #d4af37, #ffd700, #e6c560, #ffd700, #d4af37) 1;
          padding: 25px;
          font-family: 'Times New Roman', serif;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-sizing: border-box;
          min-height: 794px;
        }
        .certificate-download::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          bottom: 20px;
          border: 2px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
          pointer-events: none;
        }
        .certificate-download::after {
          content: '';
          position: absolute;
          top: 28px;
          left: 28px;
          right: 28px;
          bottom: 28px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 4px;
          pointer-events: none;
        }
        .certificate-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; position: relative; z-index: 2; }
        .logo-image { width: 100px; height: 100px; object-fit: contain; background: transparent; }
        .golden-seal { width: 120px; height: 120px; border-radius: 50%; background: radial-gradient(circle, #ffd700 0%, #d4af37 100%); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3); }
        .seal-text { color: #8b4513; font-size: 16px; font-weight: bold; text-align: center; line-height: 1.2; }
        .certificate-title { font-size: 32px; font-weight: bold; color: #2c3e50; text-align: center; margin: 15px 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.1); position: relative; z-index: 2; }
        .certificate-text { font-size: 18px; color: #34495e; text-align: center; margin: 8px 0; line-height: 1.3; position: relative; z-index: 2; }
        .participant-name { font-size: 26px; font-weight: bold; color: #d4af37; text-align: center; margin: 12px 0; text-decoration: underline; text-decoration-color: #d4af37; text-shadow: 1px 1px 2px rgba(0,0,0,0.1); position: relative; z-index: 2; }
        .conference-details { text-align: center; margin: 12px 0; position: relative; z-index: 2; }
        .event-name { font-size: 20px; font-weight: bold; color: #2c3e50; margin-bottom: 4px; line-height: 1.3; position: relative; z-index: 2; }
        .cpd-units { text-align: center; margin: 20px auto; padding: 12px; background: linear-gradient(45deg, #d4af37, #ffd700); border-radius: 20px; box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3); display: inline-block; width: fit-content; min-width: 180px; position: relative; z-index: 2; }
        .cpd-text { font-size: 18px; font-weight: bold; color: #2c3e50; text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8); letter-spacing: 1.5px; }
        .signatures { display: flex; justify-content: space-around; margin-top: 25px; margin-bottom: 10px; position: relative; z-index: 2; position: absolute; bottom: 80px; left: 25px; right: 25px; background: rgba(255, 255, 255, 0.95); padding: 15px; border-radius: 10px; }
        .signature { text-align: center; width: 200px; }
        .signature-image { width: 160px; height: 50px; object-fit: contain; margin-bottom: 8px; background: transparent; display: block; margin-left: auto; margin-right: auto; }
        .signature-name { font-size: 16px; font-weight: bold; color: #2c3e50; margin-bottom: 4px; }
        .signature-title { font-size: 14px; color: #34495e; font-style: italic; line-height: 1.2; }
      </style>
    `;
    
    if (certificateType === 'participation') {
      return `
        ${commonStyles}
        <div class="certificate-download">
          <div class="certificate-content">
            <div class="certificate-header">
              <img src="/mdcan_logo.png" alt="MDCAN Logo" class="logo-image" />
              <div class="golden-seal">
                <div class="seal-text">MDCAN<br/>BDM<br/>2025</div>
              </div>
              <img src="/coal_city_logo.png" alt="Coal City Logo" class="logo-image" />
            </div>
            
            <div class="certificate-title">CERTIFICATE OF PARTICIPATION</div>
            <div class="certificate-text">This is to certify that</div>
            <div class="participant-name">${participantName}</div>
            <div class="certificate-text">participated in the</div>
            
            <div class="conference-details">
              <div class="event-name">MEDICAL AND DENTAL CONSULTANTS' ASSOCIATION OF NIGERIA</div>
              <div class="event-name">14th Biennial Delegates' Meeting and SCIENTIFIC Conference</div>
              <div class="certificate-text">Held at the multipurpose hall of the international conference centre, Enugu on 1st–6th September, 2025.</div>
            </div>
            
            <div class="cpd-units">
              <div class="cpd-text">CPD UNITS: 10</div>
            </div>
          </div>
          
          <div class="signatures">
            <div class="signature">
              <img src="/president-signature.png" alt="President Signature" class="signature-image" />
              <div class="signature-name">Prof. Aminu Mohammed</div>
              <div class="signature-title">MDCAN President</div>
            </div>
            <div class="signature">
              <img src="/chairman-signature.png" alt="Chairman Signature" class="signature-image" />
              <div class="signature-name">Prof. Appolos Ndukuba</div>
              <div class="signature-title">LOC Chairman</div>
            </div>
          </div>
        </div>
      `;
    } else {
      return `
        ${commonStyles}
        <div class="certificate-download">
          <div class="certificate-content">
            <div class="certificate-header">
              <img src="/mdcan_logo.png" alt="MDCAN Logo" class="logo-image" />
              <div class="golden-seal">
                <div class="seal-text">MDCAN<br/>BDM<br/>2025</div>
              </div>
              <img src="/coal_city_logo.png" alt="Coal City Logo" class="logo-image" />
            </div>
            
            <div class="certificate-title">ACKNOWLEDGEMENT OF SERVICE</div>
            <div class="certificate-text">This is to acknowledge and appreciate</div>
            <div class="certificate-text">the exceptional service of</div>
            <div class="participant-name">${participantName}</div>
            <div class="certificate-text">towards the successful hosting of the</div>
            
            <div class="conference-details">
              <div class="event-name">MEDICAL AND DENTAL CONSULTANTS' ASSOCIATION OF NIGERIA</div>
              <div class="event-name">14th Biennial Delegates' Meeting and SCIENTIFIC Conference</div>
              <div class="certificate-text">Held at the multipurpose hall of the international conference centre, Enugu on 1st–6th September, 2025.</div>
            </div>
            
            <div class="cpd-units">
              <div class="cpd-text">CPD UNITS: 10</div>
            </div>
          </div>
          
          <div class="signatures">
            <div class="signature">
              <img src="/chairman-signature.png" alt="Chairman Signature" class="signature-image" />
              <div class="signature-name">Prof. Appolos Ndukuba</div>
              <div class="signature-title">LOC Chairman</div>
            </div>
            <div class="signature">
              <img src="/secretary-signature.png" alt="Secretary Signature" class="signature-image" />
              <div class="signature-name">Dr. Augustine Duru</div>
              <div class="signature-title">LOC Secretary<br/>MDCAN Sec. Gen.</div>
            </div>
          </div>
        </div>
      `;
    }
  };

  return (
    <div className="certificate-generator">
      <div className="form-container">
        <h2>Generate Your Certificate</h2>
        
        <div className="form-group">
          <label htmlFor="participantName">Participant Name:</label>
          <input
            type="text"
            id="participantName"
            value={participantName}
            onChange={handleNameChange}
            placeholder="Enter your full name"
            className="name-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="certificateType">Certificate Type:</label>
          <select
            id="certificateType"
            value={certificateType}
            onChange={(e) => setCertificateType(e.target.value)}
            className="type-select"
          >
            <option value="participation">Certificate of Participation</option>
            <option value="service">Acknowledgement of Service</option>
          </select>
        </div>

        <div className="button-group">
          <button
            onClick={handlePreview}
            className="preview-btn"
            disabled={!participantName.trim()}
          >
            Preview Certificate
          </button>
          
          <button
            onClick={handleDownload}
            className="download-btn"
            disabled={!participantName.trim() || isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Download PDF'}
          </button>
        </div>

        {showPreview && (
          <button
            onClick={() => setShowPreview(false)}
            className="hide-preview-btn"
          >
            Hide Preview
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificateGenerator;
