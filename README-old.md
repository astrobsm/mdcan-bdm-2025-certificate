# MDCAN BDM 2025 Certificate Generator

A React-based web application for generating certificates of participation and service acknowledgements for the MDCAN BDM 14th - 2025 conference held in Enugu.

## Features

- **Interactive Certificate Generation**: Enter participant names and generate personalized certificates
- **Two Certificate Types**: 
  - Certificate of Participation
  - Acknowledgement of Service
- **Live Preview**: Preview certificates before downloading
- **PDF Download**: Generate high-quality PDF certificates
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional Design**: Features golden borders, seals, and elegant typography

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Usage

1. **Enter Participant Name**: Type the full name of the certificate recipient
2. **Select Certificate Type**: Choose between "Certificate of Participation" or "Acknowledgement of Service"
3. **Preview**: Click "Preview Certificate" to see how the certificate will look
4. **Download**: Click "Download PDF" to generate and download the certificate as a PDF file

## Certificate Design Features

The certificates include:

- **Golden Border & Seal**: Elegant gold gradient borders and central golden seal
- **Professional Layout**: Modern design with proper spacing and typography
- **Official Signatures**: Designated spaces for Prof. Aminu Mohammed (MDCAN President) and Prof. Appolos Ndukuba (LOC Chairman)
- **Event Details**: MDCAN BDM 14th – 2025, held in Enugu on 1st – 6th September, 2025
- **Logo Placeholders**: Spaces for MDCAN and Coal City logos

## Customization

### Adding Logo Images

To add actual logos instead of placeholders:

1. Place high-resolution PNG images in the `public` folder:
   - `mdcan-logo.png` - MDCAN official logo
   - `coalcity-logo.png` - Coal City logo
   - `president-signature.png` - Prof. Aminu Mohammed's signature
   - `chairman-signature.png` - Prof. Appolos Ndukuba's signature

2. Update the logo placeholders in the components to use these images

### Modifying Certificate Content

Certificate content can be modified in:
- `src/components/CertificateGenerator.js` - PDF generation logic
- `src/components/CertificatePreview.js` - Preview display
- `src/components/CertificatePreview.css` - Styling

## Technical Details

### Dependencies

- **React**: Frontend framework
- **html2canvas**: Convert HTML elements to canvas for PDF generation
- **jsPDF**: Generate PDF files in the browser
- **CSS**: Custom styling for professional certificate design

### Project Structure

```
src/
├── components/
│   ├── CertificateGenerator.js    # Main form and PDF generation
│   ├── CertificateGenerator.css   # Styling for generator
│   ├── CertificatePreview.js      # Certificate preview component
│   └── CertificatePreview.css     # Styling for preview
├── App.js                         # Main application component
├── App.css                        # Global application styles
├── index.js                       # Application entry point
└── index.css                      # Global styles
```

## Browser Support

This application works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- HTML5 Canvas API

## License

This project is created for the MDCAN BDM 2025 conference. Please ensure proper authorization before using for other events.

## Support

For technical support or questions about this certificate generator, please contact the conference organizers.
