import alohapacific from '../assets/company/alohapacific.png';
import googlelogo from '../assets/company/google.webp';
import microsoft from '../assets/company/microsoft.png';
import purdue from '../assets/company/purdue.png';

export const experiences = [
  {
    title: 'IT Intern',
    subtitle: '',
    company_name: 'Aloha Pacific Federal Credit Union',
    icon: alohapacific,
    iconBg: '#FFFFFF',
    date: 'June 2021 - August 2021',
    points: [
      'Built an **inventory management program** (Python front-end, SQL back-end) to organize hardware assets',
      'Assisted in general maintenance and inventory keeping of **IT equipment**',
    ],
  },
  {
    title: 'Research Intern',
    subtitle: '',
    company_name: 'Purdue University',
    icon: purdue,
    iconBg: '#CEB888',
    date: 'June 2023 - August 2023',
    points: [
      'Presented at NDiSTEM Conference — awarded **travel scholarship**',
      'Retained **98%** algorithm performance using only **5 features** via ML (Python, R)',
      'Improved open-source project ranking for the **Open Source Security Foundation**',
    ],
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Azure Networking',
    company_name: 'Microsoft',
    icon: microsoft,
    iconBg: '#D3D3D3',
    date: 'June 2024 - August 2024',
    points: [
      'Designed new **Azure Front Door** feature routing requests to external endpoints for pre-origin verification',
      'Built **two-rule system** enabling URL redirect, cache control, header modification & more',
      'Implemented E2E across **control plane (C#)** and **data plane (C, Rust)**',
    ],
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Google Cloud Business Partner',
    company_name: 'Google',
    icon: googlelogo,
    iconBg: '#D3D3D3',
    date: 'June 2025 - August 2025',
    points: [
      'Reduced malformed responses to **0.0%**, improved extraction accuracy to **86%** via model tuning on **1,000+ obligations** (Python)',
      'Cut integration time by **72%** across **50+ obligation types** with type-safe Gemini library (Java)',
      'Shipped first **E2E redline obligation extraction** flow in pre-production',
    ],
  },
  {
    title: 'Software Engineer',
    subtitle: 'Azure Front Door',
    company_name: 'Microsoft',
    icon: microsoft,
    iconBg: '#D3D3D3',
    date: 'September 2025 - Current',
    points: [
      'Built **traffic replayer** forking prod traffic to pre-prod for **A/B pre-release validation**',
      'Boosted config coverage **24% → 91%** and dev efficiency **~62%** with automated Perl testing framework',
    ],
  },
];