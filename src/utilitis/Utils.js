import moment from "moment";

export const serverDate = (date, format = 'yyyy-MM-DD') => {
    return moment(date).format(format);
  };
  
  export const serverTime = (time, format = 'HH:MM') => {
    return moment(time).format(format);
  };
  
  export const formattedDate = (date, format = 'DD-MMM-yyyy') => {
    // get formatted, set default format : 13-Mar-2022
    return moment(date).format(format);
  };
  export const formattedTime = (time, format = 'hh:mm A') => {
    return moment(time, 'HH:mm:ss').format(format);
  };
  
  export const timeDiff = (to, from) => {
    const duration = moment(to, 'HH:mm:ss').diff(moment(from, 'HH:mm:ss'), 'minutes');
    return duration;
  };