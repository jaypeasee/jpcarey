import UIfx from 'uifx'
import btnClick from './btnClick.mp3'
import btnTick from './btnTick.mp3'

const click = new UIfx(btnClick, {
      volume: .1
  })

const tick = new UIfx(btnTick, {
    volume: .1
})

export { click, tick }