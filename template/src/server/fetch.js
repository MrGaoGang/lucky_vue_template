const METHODS = {
  GET: "GET",
  POST: "POST"
};

const defaultParmas = {
  headers: {
    'content-type': 'application/json'
  },
  method: METHODS.GET, // *GET, POST, PUT, DELETE, etc.
};


/**
 * 简单封装了一下网络请求
 * @param {*} url 
 * @param {*} params 
 * {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }
 */
export default function (url, method = METHODS.GET, data = {}) {

  let params = defaultParmas;
  if (method == METHODS.POST) {
    params.method = METHODS.POST
    params.data = JSON.stringify(data);
  }


  return new Promise((resolve, reject) => {
    fetch(url, params)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          return JSON.stringify({});
        }
      })
      .then(data => {
        resolve(data)
      }).catch(error => {
        reject(error);
      })
  })
}
