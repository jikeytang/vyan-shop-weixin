/**
 * @description 更新标题
 * @param {String} title 标题
 */
export function title (titleText) {
  const processTitle = process.env.VUE_APP_TITLE || 'SimpleAdmin'
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
export function open (url) {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'simple-menu-link')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('simple-menu-link'))
}
