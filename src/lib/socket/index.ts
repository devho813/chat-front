import { Client, IFrame } from '@stomp/stompjs'

const client = new Client({
  brokerURL: `${process.env.NEXT_PUBLIC_API_URL}/api/ws`,
  connectHeaders: {
    'auth-chat': `${process.env.NEXT_PUBLIC_AUTH_CHAT}`,
  },
  debug: function (str: string) {
    console.warn(str)
  },
  reconnectDelay: undefined,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
})

client.onConnect = function () {
  console.log('connect!')
}

client.onStompError = function (frame: IFrame) {
  console.error('Broker reported error: ' + frame.headers['message'])
  console.error('Additional details: ' + frame.body)
}

export default client
