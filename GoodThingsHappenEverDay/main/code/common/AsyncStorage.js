import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

// 保存数据
export const saveItem = (key, value,calback) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(key, value, (error, result) => {
            if(!error) {
                resolve(result);
            } else {
                //提示错误直接用存储失败
                reject(new Error("存储失败"));
                // reject(error);
            }
        })
    })
}

// 获取数据
export const getItem = (key) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key, (error, result) => {
            if(!error) {
                resolve(result);
            } else {
                // reject(error)
                reject(new Error('获取失败'));
            }
        })
    })
}

// 删除数据
export const removeItem = (key) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem(key, (error) => {
            if(!error){
                //do nothing
                resolve()
            }else{
                reject(new Error('删除失败'));
            }
        })
    })
}

// 清除所有数据
export const clearItem = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.clear((error) => {
            if(!error){
                //do nothing
                resolve('ok')
            }else{
                reject(new Error('清除失败'));
            }
        }) 
    })
}

// 添加数组
export const multiSave = (arraykeyAndValue) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.multiSet(arraykeyAndValue,(error) => {
            if(!error) {
                //do nothing
            }else {
                reject(new Error('添加数组失败'));
            }
        })
    })
}

// 获取数组
export const multiGet = (arrayKey) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.multiGet(arrayKey,(error, result) => {
            if(!error) {
                resolve(result);
            }else {
                reject(new Error('获取数组失败'))
            }
        })
    })
}

//删除数组
export const multiRemove = (arrayKey) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.multiRemove(arrayKey, (error) => {
            if(!error) {
                // do nothing
            }else {
                reject(new Error('删除数组失败'));
            }
        })
    })
}

// 合并已有的值
export const multiMerge = (arrayKeyAndValue) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.multiMerge(arrayKeyAndValue, (error) => {
            if(!error) {
                // do nothing
            } else {
                reject(new Error('合并值失败'))
            }
        })
    })
}





// var storage = new Storage({
//     size: 1000,

//     storageBackend: AsyncStorage,

//     defaultExpires: 1000 * 36 * 24,

//     enableCache: true,

//     sync: {

//     }
// })

// export const saveItem = (key,id, data) => {
//     storage.save({
//         key,
//         data,
//         expires: 1000 * 3600
//     })
// }

// export const getItem = (key) => {
//     storage.load({
//         key,
//         autoSync: true,
//         syncInBackground: true,
//         syncParams: {
//             extraFetchOptions: {
//                 //
//             }
//             // someFlag: true
//         },
//     }).then((result) => {
        
//         // const return = JSON.parse(result);
//         // alert(return.name);

//         // return JSON.parse(result);
//         return result;
//     }).catch((err) => {
//         console.warn(err.message);
//         switch(err.name) {
//             case 'NotFoundError':
//                 break;
//             case 'ExpiredError':
//                 break;
//         }
//     })
// }