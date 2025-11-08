// hooks/useAuthForm.ts
import { useState, type ChangeEvent } from "react";

export const useAuthForm = (initialFields: Record<string, string>) => {
  const [formData, setFormData] = useState(initialFields);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const validate = () => {
    if (Object.values(formData).some((v) => !v)) {
      setError("Please fill in all fields");
      return false;
    }
    return true;
  };

  return { formData, error, setError, handleChange, validate };
};