# MDCAN BDM 2025 Certificate Generator

A professional React-based certificate generator for the Medical and Dental Consultants' Association of Nigeria (MDCAN) 14th Biennial Delegates' Meeting and Scientific Conference, held at the multipurpose hall of the international conference centre, Enugu on 1st–6th September, 2025.

## 🎯 Features

- **Two Certificate Types**: 
  - Certificate of Participation
  - Acknowledgement of Service
- **Professional Design**: 
  - Classic certificate layout with green and white ribbon corners
  - Golden seal with MDCAN BDM 2025 branding
  - Official logos (MDCAN and Coal City)
  - Digital signatures from conference officials
- **PDF Generation**: High-quality PDF certificates for download and printing
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Preview**: See certificate before generating PDF

## 🖼️ Certificate Features

### Design Elements
- **Size**: A3 landscape format (1400x1000px) for optimal quality
- **Background**: Professional gradient with decorative corner ribbons
- **Logos**: MDCAN logo and Coal City logo
- **Golden Seal**: Central MDCAN BDM 2025 seal
- **Typography**: Professional serif fonts with proper hierarchy

### Certificate Types

#### 1. Certificate of Participation
- For conference attendees
- Signed by MDCAN President
- Confirms participation in the conference

#### 2. Acknowledgement of Service
- For service contributors
- Signed by LOC Chairman and Secretary
- Acknowledges exceptional service

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/mdcan-bdm-2025-certificate.git
cd mdcan-bdm-2025-certificate
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/
│   ├── CertificateGenerator.js    # Main certificate generation logic
│   ├── CertificateGenerator.css   # Certificate styling
│   ├── CertificatePreview.js      # Preview component
│   └── CertificatePreview.css     # Preview styling
├── App.js                         # Main application component
├── App.css                        # Application styling
├── index.js                       # Application entry point
└── index.css                      # Global styles

public/
├── mdcan_logo.png                 # MDCAN official logo
├── coal_city_logo.png            # Coal City logo
├── chairman-signature.png        # LOC Chairman signature
├── president-signature.png       # MDCAN President signature
├── secretary-signature.png       # LOC Secretary signature
└── index.html                     # HTML template
```

## 🛠️ Technologies Used

- **React** (v18+) - Frontend framework
- **html2canvas** - HTML to canvas conversion for PDF generation
- **jsPDF** - PDF generation library
- **CSS3** - Advanced styling with gradients and animations
- **Create React App** - Project bootstrapping

## 🎨 Design Specifications

- **Certificate Dimensions**: 1400x1000px (A3 landscape)
- **Color Scheme**: 
  - Primary: #d4af37 (Gold)
  - Secondary: #2c3e50 (Dark Blue)
  - Accent: #0d7330 (Green)
- **Fonts**: Times New Roman (serif)
- **Background**: Professional gradient with corner ribbons

## 📋 Usage

1. **Enter Participant Name**: Type the full name of the certificate recipient
2. **Select Certificate Type**: Choose between "Participation" or "Service"
3. **Preview**: Click "Preview Certificate" to see the design
4. **Generate PDF**: Click "Download Certificate" to generate and download PDF

## 🔧 Configuration

### Adding New Signatures
Place signature images in the `public/` folder and update the component references.

### Customizing Design
Modify the CSS files in `src/components/` to change colors, fonts, or layout.

### Updating Conference Details
Edit the conference information in the certificate generation components.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for the Medical and Dental Consultants' Association of Nigeria (MDCAN) BDM 2025 conference.

## 👥 Conference Officials

- **LOC Chairman**: Prof. Appolos Ndukuba
- **LOC Secretary**: Dr. Augustine Duru (MDCAN Sec. Gen.)
- **MDCAN President**: Prof. Aminu Mohammed

## 📞 Support

For technical support or questions about the certificate generator, please contact the conference organizing committee.

## 🏆 Event Details

**MEDICAL AND DENTAL CONSULTANTS' ASSOCIATION OF NIGERIA**  
**14th Biennial Delegates' Meeting and SCIENTIFIC Conference**  
**Held at the multipurpose hall of the international conference centre, Enugu on 1st–6th September, 2025.**

---

Built with ❤️ for MDCAN BDM 2025
