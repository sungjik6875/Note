import axios from 'axios';

// 1. http Request & Response와 관련된 기본설정
const config = {
  baseURL: 'https://api.hnpwa.com/v0/'
}


// 2. API 메소드를 정리
const fetchUserInfo = async (userName) => {
  try {
    const response = await axios.get(`${config.baseURL}user/${userName}.json`);
    return response;

  } catch(error) {
    console.log(error);
  }
}

const fetchAskInfo = async (askId) => {
  try {
    const response = await axios.get(`${config.baseURL}item/${askId}.json`);
    return response;

  } catch(error) {
    console.log(error);
  }
}

const fetchList = async (pageName) => {
  try {
    const response = await axios.get(`${config.baseURL}${pageName}/1.json`);
    return response;

  } catch(error) {
    console.log(error);
  } 
}

export {
  fetchUserInfo,
  fetchAskInfo,
  fetchList
}

