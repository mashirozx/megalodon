import generator, { MegalodonInterface, Entity, Response } from 'megalodon'

declare var process: {
  env: {
    MASTODON_ACCESS_TOKEN: string
    SNS: 'mastodon' | 'pleroma'
  }
}

const BASE_URL: string = 'https://mastodon.social'

const access_token: string = process.env.MASTODON_ACCESS_TOKEN

const client: MegalodonInterface = generator(process.env.SNS, BASE_URL, access_token)

client.getPublicTimeline().then((resp: Response<Array<Entity.Status>>) => {
  console.log(resp.data)
})
