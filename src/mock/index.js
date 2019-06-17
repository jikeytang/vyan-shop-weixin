import Mock from 'mockjs'
import loginAPI from './api/login'
import sidebarAPI from './api/sidebar'

import dashboardAPI from './api/home/dashboard'

Mock.mock(/\/login\/login/, 'post', loginAPI.loginSystemData)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logoutData)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfoData)

Mock.mock(/\/sidebar\/files\.*/, 'get', sidebarAPI.getFilesData)

Mock.mock(/\/dashboard\/activity\.*/, 'get', dashboardAPI.getActivitiesData)
