export const getYear = (data?: string | null) => {
  if (!data) {
    return null;
  }
  const date = new Date(data);
  return date.getFullYear();
};
