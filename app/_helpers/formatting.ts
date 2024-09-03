export const formatCurrency = (value: number | string) => {
  if (value === "" || Number.isNaN(+value)) {
    return null
  }
  return (+value).toFixed(2)
}

export const formatAmount: BadgeText = (count = 0, { notation = "standard", currency } = {}) =>
  Number.isNaN(+count)
    ? "--"
    : new Intl.NumberFormat(["en"], { notation, ...(currency && { style: "currency", currency }) }).format(count)

type BadgeText = (
  count: number,
  props?: {
    notation?: "standard" | "compact"
    currency?: "EUR" | "UAH"
  }
) => string
