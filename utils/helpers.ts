export function truncateString(str:string, length: number) {
    if (str.length > length) {
      return str.slice(0, length) + "...";
    } else {
      return str;
    }
  }
 
export const formatCurrency = (value: number) =>   {
    let USD = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    return USD.format(value)
}