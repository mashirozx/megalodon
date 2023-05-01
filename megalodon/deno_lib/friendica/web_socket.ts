import { WebSocketInterface } from '../megalodon.ts'
import { EventEmitter } from 'node:events'
import { ProxyConfig } from '../proxy_config.ts'

export default class WebSocket extends EventEmitter implements WebSocketInterface {
  constructor(
    _url: string,
    _stream: string,
    _params: string | undefined,
    _accessToken: string,
    _userAgent: string,
    _proxyConfig: ProxyConfig | false = false
  ) {
    super()
  }
  public start() {}
  public stop() {}
}
