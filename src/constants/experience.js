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
      'Designed an **Azure Front Door** feature that routes requests to external endpoints for verification before they reach the origin',
      'Implemented E2E support across the **control plane (C#)** and **data plane (C, Rust)**, providing the design and proof of concept for Azure Front Door Edge Actions',
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
      'Completed the E2E **redline obligation extraction** flow, using an LLM to extract critical data from edited contracts',
      'Reduced malformed responses to **0.0%**, improved extraction accuracy to **86%** via model tuning on **1,000+ obligations** (Python)',
      'Cut integration time by **72%** across **50+ obligation types** with type-safe Gemini library (Java)',
    ],
  },
  {
    title: 'Software Engineer',
    subtitle: 'Azure Front Door',
    company_name: 'Microsoft',
    icon: microsoft,
    iconBg: '#D3D3D3',
    date: 'September 2025 - September 2026',
    points: [
      'Built **Osmosis**, an E2E agent linking control-plane and data-plane repositories that cut feature development from **2 weeks to 2 days**',
      'Implemented **Traffic Replayer** to clone **0.01% of production traffic** into pre-production for A/B validation and risk-free custom build testing',
      'Increased total code coverage by **6%** and saved **500+ engineering hours** with RCM Tester, a framework for automatically generating tests',
    ],
  },
  {
    title: 'Software Engineer',
    subtitle: 'Google Cloud Business Partners',
    company_name: 'Google',
    icon: googlelogo,
    iconBg: '#D3D3D3',
    date: 'September 2026 - Current',
    points: [],
  },
];