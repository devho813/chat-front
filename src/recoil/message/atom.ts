import { atom } from 'recoil'

const messageAtom = atom({
  key: 'messageAtom',
  default: {
    name: 'message',
    value: [],
  },
})

export default messageAtom
