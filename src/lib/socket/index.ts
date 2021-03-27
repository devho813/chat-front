import { Client } from '@stomp/stompjs'

const client = new Client({
  brokerURL: '/api/ws',
  connectHeaders: {
    // TODO: 환경 변수 처리
    'auth-chat': 'asdasdasgtqraslkdmalvkle132415tlasd.asd41',
  },
  debug: function (str: string) {
    console.log(str)
  },
  reconnectDelay: 5000, //자동 재 연결
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
})

client.onConnect = function () {
  console.log('connect!')
}

client.onStompError = function (frame) {
  console.log('Broker reported error: ' + frame.headers['message'])
  console.log('Additional details: ' + frame.body)
}

export default client
