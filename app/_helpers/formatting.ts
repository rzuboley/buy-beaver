export const formatCurrency = (value: number | string) => {
  if (value === "" || Number.isNaN(+value)) {
    return null
  }
  return (+value).toFixed(2)
}
