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


export const uploadImages = (url, imgArray) => {
  let formData = new FormData();
  for(var i = 0; i< imgArray; i++) { //这里的是图片的绝对路径
    let file = {uri:imgArray[i], type: 'multipart/form-data',name:'image.png'}
    formData.append("files", file);  //这里的files就是后台所需要的key
  }
  return new Promise((resolve, reject) => {
    fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type':'multipart/form-data',
    }, 
    body: formData
    })
  }).then((response) => {
        return response.json();
      }).then((responseData) => {
        //1 表示成功
        if(responseData.code == 1) {
          resolve(responseData)
        }else {
          reject(responseData)
        }
      }).catch((error) => {
        reject(new Error("上传图片失败"))
      })
};