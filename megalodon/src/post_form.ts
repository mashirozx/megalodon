import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

type Options = Pick<AxiosRequestConfig, 'headers' | 'maxContentLength' | 'maxBodyLength' | 'httpAgent' | 'httpsAgent'>

export const postForm = async <T>(url: string, params = {}, options: Options) => {
  return axios.postForm<T>(url, params, options)
}
