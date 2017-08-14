import {
    Platform
} from 'react-native';

const _fetch = (requestPromise, timeout) => {
  let timeoutAction = null;
  const timerPromise = new Promise((resolve, reject) => {
    timeoutAction = () => {
      reject('请求超时');
    }
  })
  setTimeout(()=>{
    timeoutAction()
  }, timeout)
  return Promise.race([requestPromise,timerPromise]);
}


export const request = (url, method, body) => {
  var param = JSON.parse(body);
  var device = '';
  if (Platform.OS == 'ios') {
      device = 'IOS'
  }else {
      device = 'ANDROID'
  }
  param['encrypt'] = 'none';
  param['version'] = '1.0.0';
  param['deviceType'] = device;
  param['appType'] = 'C';

  const myFetch = fetch(url,{
    method: method,
    headers:{
      "Accept": "application/json",
      "Content-Type" : "application/json"
    },
    body:JSON.stringify(param)
  });
  console.log(url);
  console.log(JSON.stringify(param));
  return new Promise((resolve, reject) => {
    _fetch(myFetch, 30000)
        .then(response => {
          return response.json();
        })
        .then(responseData=>{
          // 1表示成功
          if (responseData.code == 1) {
            resolve(responseData);
          } else {
            reject(responseData);
          }
          // resolve(responseData)
        })
        .catch(error=>{
          reject(error);
        });
  });

};


export const request_weChat_userInfo = (url, method) => {
  const myFetch = fetch(url, {
    method: method,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  console.log(url);
  return new Promise((resolve, reject) => {
    _fetch(myFetch, 30000)
        .then(response => {
          return response.json();
        })
        .then(responseData=> {
          resolve(responseData);
        })
        .catch(error=> {
          reject(error);
        });
  });
}