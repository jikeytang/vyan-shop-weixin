import { loginSystemData, getUserInfoData, logoutData } from '@/api/login'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: localStorage.getItem('token'),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    isLogined: false,
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_NAME (state, name) {
      state.name = name
    },
    SET_AVATAR (state, avatar) {
      state.avatar = avatar
    },
    SET_IS_LOGINED (state, logined) {
      state.isLogined = logined
    }
  },

  actions: {
    // 用户名登录
    loginSystem ({ commit }, userInfo) {
      const userName = userInfo.userName.trim()
      return new Promise((resolve, reject) => {
        loginSystemData(userName, userInfo.password).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          localStorage.setItem('token', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    getUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfoData(state.token).then(response => {
          if (!response.data) {
            reject(new Error('error'))
          }
          const data = response.data

          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    logOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logoutData(state.token).then(() => {
          commit('SET_TOKEN', '')
          localStorage.removeItem('token')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }

  }
}

export default user
