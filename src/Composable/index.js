
// timestamp function 
export function  formateDate (d) {
  
    const date= new Date(d).getDate();
    const month= new Date(d).getMonth();
    const year= new Date(d).getFullYear();
  
    return `${date}/ ${month}/ ${year}`
   }