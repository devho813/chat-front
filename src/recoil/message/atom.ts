import { atom } from 'recoil'

interface Message {
  sender: string
  message: string
}

const messageAtom = atom<Message[]>({
  key: 'messageAtom',
  default: [],
})

export default messageAtom
