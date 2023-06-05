export function getFormatedDate(timestamp: number | string):string{
    const d = new Date(timestamp)    
   return `${d.toLocaleString().replace(" ", "").replace(","," - ")}`
}