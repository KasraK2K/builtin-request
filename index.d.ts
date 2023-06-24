declare class Request {
  constructor(baseUrl?: string)

  execute(options: IOpions): Promise<any>

  get(path: string, options?: IOpions): Promise<any>

  post(path: string, data?: any, options?: IOpions): Promise<any>
  put(path: string, data?: any, options?: IOpions): Promise<any>
  patch(path: string, data?: any, options?: IOpions): Promise<any>
  delete(path: string, data?: any, options?: IOpions): Promise<any>
}

interface IOpions {
  hostname?: string
  port?: number
  path?: string
  method?: string
}

export { IOpions }
export default Request
