const MsToMinute = {}

MsToMinute.install = function (Vue) {
  Vue.prototype.$MsToMinute = function (time) {
    return parseFloat((time / 1000) / 60).toFixed(2).toString().replace('.', ':')
  }
}

export default MsToMinute
