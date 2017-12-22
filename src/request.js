const domain = 'http://140.117.178.182:5000/breakcheck'

export const breakCheck = function(self, payload) {
  return new Promise((resolve, reject) => {
    let vue = self

    vue.$http.post(domain, payload).then((res) => {
      if (res.status == 200) {
        resolve(res.body)
      } else {
        reject("Request failed...")
      }
    })
  })
}
