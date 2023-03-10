
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { currency: "CAD", style: "currency"})

export const formatCurrency = (num: number) => {
  return CURRENCY_FORMATTER.format(num)
}
