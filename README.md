# builtin-request
This package is a simple and tiny package to send request using node.js builtin features

Send baseUrl in constructor is optional and you can send `options.hostname` instead of that
<br />
<br />

---
## Some Examples:
---
<br />

### Execute:
With this method you can run any type of request.
```javascript
// An example of execute get request
(async () => {
  const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/todos',
    method: 'GET'
  }
  const request = new Request()
  request
    .execute(options)
    .then((response) => console.log({ response }))
    .catch((error) => console.log({ error }))
})()

// An example of execute post request 
(async () => {
  const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/todos',
    method: 'POST',
  }
  const data = { title: 'Do something' }

  const request = new Request()
  request
    .execute(options, data)
    .then((response) => console.log({ response }))
    .catch((error) => console.log({ error }))
})()
```
<br />

### Get:
This method is syntactic sugar of execute method. it's helping us to send `get` request more effective
```javascript
(async () => {
  const request = new Request('jsonplaceholder.typicode.com')
  await request
    .get('/todos')
    .then((response) => console.log({ response }))
    .catch((error) => console.log({ error }))
})()
```
<br />

### Post:
This method is syntactic sugar of execute method. it's helping us to send `post` request more effective
```javascript
(async () => {
  const data = { title: 'Do something' }

  const request = new Request('jsonplaceholder.typicode.com')
  request
    .post('/todos', data)
    .then((response) => console.log({ response }))
    .catch((error) => console.log({ error }))
})()
```
<br />

### Put:
This method is syntactic sugar of execute method. it's helping us to send `put` request more effective
```javascript
(async () => {
  const data = { title: 'Do something' }

  const request = new Request('jsonplaceholder.typicode.com')
  request
    .put('/todos/1', data)
    .then((response) => console.log({ response }))
    .catch((error) => console.log({ error }))
})()
```
<br />

### Patch:
This method is syntactic sugar of execute method. it's helping us to send `patch` request more effective
```javascript
(async () => {
  const data = { title: 'Do something' }

  const request = new Request('jsonplaceholder.typicode.com')
  request
    .patch('/todos/1', data)
    .then((response) => console.log({ response }))
    .catch((error) => console.log({ error }))
})()
```
<br />

### Delete:
This method is syntactic sugar of execute method. it's helping us to send `delete` request more effective
```javascript
(async () => {
  const data = { title: 'Do something' }

  const request = new Request('jsonplaceholder.typicode.com')
  request
    .delete('/todos/1', data)
    .then((response) => console.log({ response }))
    .catch((error) => console.log({ error }))
})()
```
<br />