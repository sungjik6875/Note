import axios from 'axios';


// 1. http Request & Response와 관련된 기본설정
const config = {
  baseURL: 'https://api.hnpwa.com/v0/'
}


// 2. API 메소드를 정리
const fetchNewsList = () => {
  return axios.get(`${config.baseURL}news/1.json`);
}

const fetchJobsList = () => {
  return axios.get(`${config.baseURL}jobs/1.json`);
}

const fetchAskList = () => {
  return axios.get(`${config.baseURL}ask/1.json`);
}

const fetchUserInfo = (userName) => {
  return axios.get(`${config.baseURL}user/${userName}.json`)
}

const fetchAskInfo = (askId) => {
  return axios.get(`${config.baseURL}item/${askId}.json`)
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskInfo
}

