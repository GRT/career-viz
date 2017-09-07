const doGet = function doGet(err, path, callback) {
  const r = new XMLHttpRequest();
  const url = 'https://6oykdedc0i.execute-api.us-east-1.amazonaws.com/latest/' + path;
  r.open('GET', url, true);
  r.onreadystatechange = () => {
    if (r.readyState !== 4 || r.status !== 200) {
      return;
    }
    callback(JSON.parse(r.responseText));
  };
  r.send();
};


export { doGet };
