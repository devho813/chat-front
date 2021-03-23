import styled from '@emotion/styled'
import { IMessage } from '@stomp/stompjs'
import React, { useCallback, useEffect, useState } from 'react'
import webSocketClient from '../lib/socket'

function Home() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    webSocketClient.activate()
    const subscription = webSocketClient.subscribe('/queue/test', subscriptionMessage)

    return () => {
      subscription.unsubscribe()
      webSocketClient.deactivate()
    }
  }, [])

  const onChangeMessage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      publishMessage(message)
    },
    [message]
  )

  const publishMessage = useCallback((message: string) => {
    webSocketClient.publish({
      destination: '/topic/general',
      body: message,
      headers: { 'content-type': 'text' },
    })
  }, [])

  const subscriptionMessage = useCallback((message: IMessage) => {
    console.log(message)
  }, [])

  return (
    <HomeContainer>
      <MessageList>
        <li>
          <span>손님_1sfkwd</span>: <span>안녕하세요?</span>
        </li>
        <li>
          <span>손님_1odowk</span>: <span>네 안녕하세요?</span>
        </li>
        <li>
          <span>손님_3ff0bz</span>: <span>안녕하세요?</span>
        </li>
        <li>
          <span>손님_5aswws</span>: <span>안녕하세요?</span>
        </li>
      </MessageList>
      <Form onSubmit={onSubmit}>
        <input type="text" onChange={onChangeMessage} value={message} />
        <button>전송</button>
      </Form>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 414px;
  height: 100%;
  border: 10px solid #1abc9c;
  border-radius: 15px 15px 0 0;
`

const MessageList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 15px 10px;

  & > li {
    margin-bottom: 10px;
  }

  & > li:nth-child(2n) {
    color: gray;
  }
`

const Form = styled.form`
  position: absolute;
  left: 0;
  bottom: 1px;
  width: 100%;

  input {
    width: 100%;
    height: 5vh;
    border: none;
    border-top: 10px solid #1abc9c;
    border-radius: 0 0 15px 15px;
    padding: 10px;
    outline: none;
  }

  button {
    position: absolute;
    display: inline-block;
    right: 0;
    top: 1px;
    height: 100%;
    min-width: 25%;
    border: none;
    outline: none;
    background-color: #1abc9c;
    color: white;
    font-weight: bold;
  }
`
