// @ts-nocheck
import type { AxiosRequestConfig } from 'axios'

type Options = Pick<AxiosRequestConfig, 'headers' | 'maxContentLength' | 'maxBodyLength' | 'httpAgent' | 'httpsAgent'>

export const postForm = async <T>(url: string, formData = new FormData(), options: Options): Promise<Response<T, any>> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: options.headers,
    body: formData
  })

  const data = await response.json()

  return {
    data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  }
}
