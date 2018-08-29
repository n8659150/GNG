import axios from 'axios'
axios.defaults.baseURL = 'http://www.jackyangli.com:8089/'
//设置默认请求头
// axios.defaults.headers = {
//     "Content-Type": "application/x-www-form-urlencoded"
// }
// axios.defaults.withCredentials = true

function getImgByQID(url,qid,limit=100,offset=0) {
    let fullUrl = `${url}?questionId=${qid}&limit=${limit}&offset=${offset}`;
    return axios.get(fullUrl)
}

export default getImgByQID