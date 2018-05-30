// import moment from 'momment'
// this import will not work since it will call the function below
// and that will caus a faluire, instead we will use this call to
// require the actual library
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
  return moment(timestamp)
}