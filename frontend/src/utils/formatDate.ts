const formater = (date: string[], time: string[]) => {
    const dayAndTime = {
      day: '',
      time: '',
    };
  
    dayAndTime.day = `${date[2]}/${date[1]}/${date[0]}`;
    dayAndTime.time = `${time[0]}:${time[1]}`;
  
    return dayAndTime;
  };
  
  export const formatDate = (date?: string) => {
    const today = new Date();
    const stringToday = today.toISOString();
    let insertDate;
  
    if (date) {
      insertDate = date.split('T');
    } else {
      insertDate = stringToday.split('T');
    }
    const onlyDate = insertDate[0].split('-');
    let onlyTime = insertDate[1].split('Z');
    onlyTime = onlyTime[0].split(':');
    return formater(onlyDate, onlyTime);
  };
