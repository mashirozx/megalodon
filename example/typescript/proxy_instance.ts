import Mastodon, { Instance, ProxyConfig } from 'megalodon'

declare var process: {
  env: {
    PROXY_HOST: string
    PROXY_PORT: number
    PROXY_PROTOCOL: 'http' | 'https' | 'socks4' | 'socks4a' | 'socks5' | 'socks5h' | 'socks'
  }
}

const BASE_URL: string = 'http://mastodon.social'

const proxy: ProxyConfig = {
  host: process.env.PROXY_HOST,
  port: process.env.PROXY_PORT,
  protocol: process.env.PROXY_PROTOCOL
}

Mastodon.get<Instance>('/api/v1/instance', {}, BASE_URL, proxy).then(res => {
  console.log(res)
})
