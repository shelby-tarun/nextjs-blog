export const getDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
}