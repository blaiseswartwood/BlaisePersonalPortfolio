import backend from '../assets/backend.png';
import creator from '../assets/creator.png';
import mobile from '../assets/mobile.png';
import web from '../assets/web.png';

export const services = [
  { title: 'Software Engineering', icon: web },
  { title: 'AI Agents', icon: mobile },
  { title: 'Machine Learning', icon: creator },
  { title: 'Data Science', icon: backend },
];

export const stats = [
  { label: 'Research Papers', value: 3, icon: 'description' },
  { label: 'Cumulative GPA', value: 4.0, decimal: true, icon: 'school' },
  { label: 'Languages', value: 8, suffix: '+', icon: 'code' },
  { label: 'Projects Shipped', value: 15, suffix: '+', icon: 'rocket_launch' },
  { label: 'Internships', value: 3, icon: 'work' },
];