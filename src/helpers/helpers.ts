export const getYear = (data?: string | null) => {
  const date = data && new Date(data).getFullYear();
  return date || null;
};
