import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialState);
  };

  const setLoadingState = (isLoading) => {
    setLoading(isLoading);
  };

  return {
    form,
    loading,
    handleChange,
    resetForm,
    setLoadingState
  };
};

export default useForm; 