const userMap = {
  roles: ['admin'],
  token: 'admin',
  introduction: '我是管理员',
  avatar: 'https://upload.jianshu.io/users/upload_avatars/1009031/0076cac5b7dc.png',
  name: 'Admin'
}

export default {
  loginSystemData (config) {
    const { userName } = JSON.parse(config.body)
    if (userName === 'admin') {
      return userMap
    } else {
      return null
    }
  },
  getUserInfoData (config) {
    return userMap
  },
  logoutData: () => 'success'
}
