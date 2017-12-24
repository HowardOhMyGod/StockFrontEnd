// const domain = 'http://140.117.178.182:5000'
const domain = 'http://127.0.0.1:5000'

export const breakCheck = function(self, payload) {
  return new Promise((resolve, reject) => {
    let vue = self

    vue.$http.post(`${domain}/breakcheck`, payload).then((res) => {
      if (res.status == 200) {
        resolve(res.body)
      } else {
        reject("Request /breakcheck failed...")
      }
    })
  })
}

export const basicResult = function(self, payload) {
  return new Promise((resolve, reject) => {
    let vue = self

    vue.$http.post(`${domain}/basic`, payload).then((res) => {
      if (res.status == 200) {
        resolve(res.body)
      } else {
        reject("Request /basic failed...")
      }
    })
  })
}
