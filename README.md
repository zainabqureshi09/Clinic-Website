# BSRV Medical & Dental Office Website

Website for BSRV Medical & Dental Office - a walk-in clinic in Toronto.

## About

BSRV Medical & Dental Office is a family medical clinic in Scarborough, Toronto. We provide healthcare services with a focus on patient satisfaction.

**Location:** 3430 Finch Ave E, Suite 6A, Scarborough, ON M1W 2R5  
**Phone:** 416-649-6388  
**Email:** bsrvmedical@gmail.com

## Features

- Responsive design for all devices
- Dark mode support
- Online appointment requests via EmailJS
- Google Maps integration
- Multilingual staff support
- Fast loading with Vite

## Tech Stack

- React 18.3.1
- React Router DOM 7.13.2
- Tailwind CSS 3.4.17
- Framer Motion 11.15.0
- Lucide React icons
- Vite 6.0.3
- EmailJS for emails
- Deployed on Netlify

## Services

### General Medicine
- Family Medicine & Primary Care
- Chronic Disease Management
- Children & Adult Care
- Acute Care for Illnesses
- Preventive Health & Annual Physicals
- Vaccinations & Immunizations
- Women's Health
- Minor Procedures

### Nephrology
- Chronic Kidney Disease (Stages 1–5)
- Hypertension Management
- Kidney Stones Prevention
- Electrolyte Disorders
- Dialysis Support

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm

### Installation

1. Clone the repo
```bash
git clone https://github.com/zainabqureshi09/Clinic-Website.git
cd Clinic-Website
```

2. Install dependencies
```bash
npm install
```

3. Set up EmailJS (for appointment form)

Edit `src/config/emailjs.js` with your credentials:
```javascript
export const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
};
```

To get EmailJS credentials:
- Sign up at emailjs.com
- Create a Gmail service
- Create an email template
- Get API keys from Account Settings

4. Start dev server
```bash
npm run dev
```

5. Open http://localhost:3000

## Build & Deploy

### Production build
```bash
npm run build
```

### Deploy to Netlify

The site auto-deploys when you push to master.

Build settings:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 20

## Project Structure

```
Clinic-Website/
├── public/              # Static files
├── src/
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── config/          # Config files (emailjs.js)
│   ├── context/         # React Context
│   ├── layouts/         # Layout components
│   ├── App.jsx          # Main app
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── netlify.toml         # Netlify config
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Pages

- Home - Hero section and stats
- Our Doctors - Doctor profiles
- Specialists - Nephrology info
- Services - Service details
- Appointment - Booking form
- Contact - Contact info and map

## Email Template

For EmailJS, use these variables:
- `{{patient_name}}` - Patient name
- `{{patient_email}}` - Patient email
- `{{patient_phone}}` - Patient phone
- `{{department}}` - Department
- `{{preferred_date}}` - Date
- `{{preferred_time}}` - Time
- `{{message}}` - Notes
- `{{to_email}}` - bsrvmedical@gmail.com

## Support

For questions:
- Email: bsrvmedical@gmail.com
- Phone: 416-649-6388

---

© 2024 BSRV Medical & Dental Office. All rights reserved.
