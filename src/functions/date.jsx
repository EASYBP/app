export const getDate = (data) => {
  var today = new Date(data);
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  //   var time =
  //     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date;
  //+ " " + time;
};
