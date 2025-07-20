/**
 * Utility function to conditionally join class names
 * @param {...any} classes - Class names to join
 * @returns {string} - Joined class names
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Create a class name with conditional variants
 * @param {string} base - Base class name
 * @param {Object} variants - Conditional variants
 * @returns {string} - Final class name
 */
export const createClassName = (base, variants = {}) => {
  const classes = [base];
  
  Object.entries(variants).forEach(([key, value]) => {
    if (value) {
      classes.push(key);
    }
  });
  
  return classes.join(' ');
}; 