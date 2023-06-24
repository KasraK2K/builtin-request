declare class Request {
  constructor(baseUrl?: string)

  execute(options: IOptions): Promise<any>

  get(path: string, options?: IOptions): Promise<any>

  post(path: string, data?: any, options?: IOptions): Promise<any>
  put(path: string, data?: any, options?: IOptions): Promise<any>
  patch(path: string, data?: any, options?: IOptions): Promise<any>
  delete(path: string, data?: any, options?: IOptions): Promise<any>
}

interface IOptions {
  hostname?: string
  port?: number
  path?: string
  method?: string
}

export { IOptions as IOpions }
export default Request
