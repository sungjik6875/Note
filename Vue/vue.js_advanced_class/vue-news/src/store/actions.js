import { fetchUserInfo, fetchAskInfo, fetchList } from '../api/index.js';

export default {
  async FETCH_USER({ commit }, userName) {
    try {
      const response = await fetchUserInfo(userName)
      commit('SET_USER', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  },

  async FETCH_ASKINFO({ commit }, askId) {
    try {
      const response = await fetchAskInfo(askId)
      commit('SET_ASKINFO', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  },

  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName)
      commit('SET_LIST', response.data);
      return response;
    } catch(error) {
      console.log(error);
    }
  }
}