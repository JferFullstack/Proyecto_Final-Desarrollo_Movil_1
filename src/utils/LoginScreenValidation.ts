export const validateEmail = (email: string): boolean => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

export const validatePassword = (password: string): string | null => {
  if (!password) return "La contraseña es obligatoria.";
  if (password.length < 6) return "La contraseña debe tener al menos 6 caracteres.";
  return null;
};