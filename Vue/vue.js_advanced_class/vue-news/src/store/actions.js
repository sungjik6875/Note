import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchAskInfo } from '../api/index.js';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        console.log(data);
        commit('SET_NEWS', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        console.log(data);
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        console.log(data);
        commit('SET_ASK', data);
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => {
        console.log(data);
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ASKINFO({ commit }, askId) {
    fetchAskInfo(askId)
      .then(({ data }) => {
        console.log(data);
        commit('SET_ASKINFO', data);
      })
      .catch(error => {
        console.log(error);
      })
  }
}