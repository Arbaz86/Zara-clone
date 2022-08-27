export const saveLocalData = (key, data) => {
  if (key && data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getLocalData = (key) => {

  var datas = (localStorage.getItem(key));
  var data = datas;
  return data;
};
