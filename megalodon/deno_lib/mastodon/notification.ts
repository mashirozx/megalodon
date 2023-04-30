import MastodonEntity from './entity.ts'

namespace MastodonNotificationType {
  export const Mention: MastodonEntity.NotificationType = 'mention'
  export const Reblog: MastodonEntity.NotificationType = 'reblog'
  export const Favourite: MastodonEntity.NotificationType = 'favourite'
  export const Follow: MastodonEntity.NotificationType = 'follow'
  export const Poll: MastodonEntity.NotificationType = 'poll'
  export const FollowRequest: MastodonEntity.NotificationType = 'follow_request'
  export const Status: MastodonEntity.NotificationType = 'status'
  export const Update: MastodonEntity.NotificationType = 'update'
}

export default MastodonNotificationType
