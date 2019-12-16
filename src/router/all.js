const allRouter = [
  {
    path: 'digital-clock',
    name: 'DigitalClock',
    component: () => import(/* webpackChunkName: 'clock' */ '@/views/DigitalClock')
  },
  {
    path: 'animation-text',
    name: 'animationText',
    component: () => import(/* webpackChunkName: 'animationText' */ '@/views/AnimationText')
  },
  {
    path: 'grid',
    name: 'draggableGrid',
    component: () => import(/* webpackChunkName: 'draggableGrid' */ '@/views/DraggableGrid')
  },
  {
    path: 'js-cube',
    name: 'jsCube',
    component: () => import(/* webpackChunkName: 'js-cube' */ '@/views/JSCube')
  }
]
export default allRouter
