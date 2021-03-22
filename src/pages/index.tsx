import styled from '@emotion/styled'
import React from 'react'
function Home() {
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
      <Form>
        <input type="text" />
        <button>전송</button>
      </Form>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const MessageList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 15px 10px;

  & > li {
    margin-bottom: 10px;
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
    border: 1px solid black;
    padding: 10px;
    outline: none;
  }

  button {
    position: absolute;
    display: inline-block;
    right: 0;
    height: 100%;
    min-width: 20%;
    border: none;
    outline: none;
    background-color: #1abc9c;
    color: white;
    font-weight: bold;
  }
`
