import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchAskInfo, fetchList } from '../api/index.js';

export default {
  // FETCH_NEWS({ commit }) {
  //   fetchNewsList()
  //     .then(({ data }) => {
  //       // console.log(data);
  //       commit('SET_NEWS', data);
  //       return data;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  // FETCH_JOBS({ commit }) {
  //   fetchJobsList()
  //     .then(({ data }) => {
  //       // console.log(data);
  //       commit('SET_JOBS', data);
  //       return data;
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  // FETCH_ASK({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => {
  //       // console.log(data);
  //       commit('SET_ASK', data);
  //       return data;
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => {
        // console.log(data);
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_ASKINFO({ commit }, askId) {
    fetchAskInfo(askId)
      .then(({ data }) => {
        // console.log(data);
        commit('SET_ASKINFO', data);
      })
      .catch(error => {
        console.log(error);
      })
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => {
        // console.log(data);
        commit('SET_LIST', data);
      })
      .catch(error => {
        console.log(error);
      })
  }
}