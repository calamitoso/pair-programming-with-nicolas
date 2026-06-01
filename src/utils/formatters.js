export function formatNumber(value) {
  return new Intl.NumberFormat('en-CA').format(value)
}
