export  function convertNumber(value:any){
    return parseInt(value, 10);
}

export function truncateString(text:any, maxLength = 50) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }