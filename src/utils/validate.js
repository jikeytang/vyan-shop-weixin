export function isvalidUsername (str) {
  const validmap = ['admin', 'editor']
  return validmap.indexOf(str.trim()) >= 0
}
