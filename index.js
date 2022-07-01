const http = require('https')

class Request {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl
  }

  /**
   * @param { {hostname: string, port: number, path: string, method: string} } options
   * @returns { Promise<any> }
   */
  execute(options, data = {}) {
    return new Promise((resolve, reject) => {
      const hasData = data && Object.keys(data).length
      data = JSON.stringify(data)
      if (hasData) {
        Object.assign(options, {
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
          },
        })
      }

      const req = http
        .request(options, (res) => {
          let result = ''
          res.on('data', (chunk) => (result += chunk))
          res.on('end', () => resolve(JSON.parse(result)))
        })
        .on('error', (err) => reject(err))

      if (hasData) req.write(data)
      req.end()
    })
  }

  /**
   * @param { string } path
   * @param { {hostname?: string, port?: number, path?: string, method?: string} } options
   * @returns { Promise<any> }
   */
  get(path, options) {
    return new Promise((resolve, reject) => {
      options = Request.optionGenerator(this.baseUrl, path, options)
      options.method = 'GET'

      http
        .request(options, (res) => {
          let result = ''
          res.on('data', (chunk) => (result += chunk))
          res.on('end', () => resolve(JSON.parse(result)))
        })
        .on('error', (err) => reject(err))
        .end()
    })
  }

  /**
   * @param { string } path
   * @param { {hostname?: string, port?: number, path?: string, method?: string} } options
   * @param {*} data
   * @returns { Promise<any> }
   */
  post(path, data = {}, options = {}) {
    return new Promise((resolve, reject) => {
      options = Request.optionGenerator(this.baseUrl, path, options)
      options.method = 'POST'

      this.execute(options, data)
        .then((response) => console.log({ response }))
        .catch((error) => console.log({ error }))
    })
  }

  /**
   * @param { string } path
   * @param { {hostname?: string, port?: number, path?: string, method?: string} } options
   * @param {*} data
   * @returns { Promise<any> }
   */
  put(path, data = {}, options = {}) {
    return new Promise((resolve, reject) => {
      options = Request.optionGenerator(this.baseUrl, path, options)
      options.method = 'PUT'

      this.execute(options, data)
        .then((response) => console.log({ response }))
        .catch((error) => console.log({ error }))
    })
  }

  /**
   * @param { string } path
   * @param { {hostname?: string, port?: number, path?: string, method?: string} } options
   * @param {*} data
   * @returns { Promise<any> }
   */
  patch(path, data = {}, options = {}) {
    return new Promise((resolve, reject) => {
      options = Request.optionGenerator(this.baseUrl, path, options)
      options.method = 'PATCH'

      this.execute(options, data)
        .then((response) => console.log({ response }))
        .catch((error) => console.log({ error }))
    })
  }

  /**
   * @param { string } path
   * @param { {hostname?: string, port?: number, path?: string, method?: string} } options
   * @param {*} data
   * @returns { Promise<any> }
   */
  delete(path, data = {}, options = {}) {
    return new Promise((resolve, reject) => {
      options = Request.optionGenerator(this.baseUrl, path, options)
      options.method = 'DELETE'

      this.execute(options, data)
        .then((response) => console.log({ response }))
        .catch((error) => console.log({ error }))
    })
  }

  /**
   * @param { string } hostname
   * @param { string } path
   * @param { {hostname: string, port: number, path: string, method: string} } options
   * @returns { string }
   */
  static optionGenerator(hostname, path, options) {
    const lastHostNameIndex = hostname.length - 1
    if (hostname && hostname.length && hostname[lastHostNameIndex] === '/')
      hostname = hostname.slice(0, lastHostNameIndex)

    const requestOptions = {
      hostname,
      port: 443,
      path: path || '/',
    }
    Object.assign(requestOptions, options)

    return requestOptions
  }
}

module.exports = Request
