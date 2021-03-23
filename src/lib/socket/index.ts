import { Client } from '@stomp/stompjs'
// import SockJS from 'sockjs-client'

const client = new Client({
  brokerURL: '/api/ws',
  connectHeaders: {
    login: 'user',
    passcode: 'password',
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
