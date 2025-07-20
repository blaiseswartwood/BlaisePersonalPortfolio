# Development Guidelines

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Format code
npm run format

# Check formatting
npm run format:check

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── SectionHeader.jsx
│   ├── canvas/          # 3D components
│   └── [other components]
├── constants/
│   ├── data.js          # Static data
│   └── index.js         # Asset imports
├── hooks/               # Custom hooks
├── utils/               # Utility functions
└── styles.js            # Global styles
```

## 🎨 Coding Standards

### Component Structure
```jsx
import React from 'react';
import { cn } from '../utils/classNames';

const ComponentName = ({ prop1, prop2, ...props }) => {
  // Hooks first
  const [state, setState] = useState();
  
  // Event handlers
  const handleClick = () => {
    // logic
  };
  
  // Render helpers
  const renderItem = (item) => (
    <div key={item.id}>{item.name}</div>
  );
  
  return (
    <div className={cn("base-classes", props.className)}>
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### Class Names
- Use `cn()` utility for conditional classes
- Keep classes organized and readable
- Use Tailwind's responsive prefixes

### File Naming
- Components: `PascalCase.jsx`
- Utilities: `camelCase.js`
- Constants: `camelCase.js`

## 🔧 Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use composition over inheritance
   - Extract reusable logic into hooks

2. **Performance**
   - Use lazy loading for large components
   - Memoize expensive calculations
   - Optimize re-renders with React.memo

3. **Code Quality**
   - Write descriptive variable names
   - Add JSDoc comments for complex functions
   - Keep functions pure when possible

4. **Styling**
   - Use Tailwind classes consistently
   - Create reusable component variants
   - Follow the design system

## 🚀 Deployment

```bash
# Build and deploy to Firebase
npm run build
firebase deploy
```

## 📝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run format` and `npm run lint`
4. Test your changes
5. Submit a pull request 