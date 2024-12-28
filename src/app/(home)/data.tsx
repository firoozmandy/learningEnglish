import demo1 from '@/assets/images/demo/1.png'
import demo2 from '@/assets/images/demo/2.png'
import demo3 from '@/assets/images/demo/3.png'
import demo4 from '@/assets/images/demo/4.png'
import demo5 from '@/assets/images/demo/5.png'
import demo6 from '@/assets/images/demo/6.png'

type PricingType = {
  name: string
  image: string
  path: string
}

export const pricingData: PricingType[] = [
  {
    name: 'Live classes',
    image: demo1,
    path: '/Live-classes',
  },
  {
    name: 'IELTS preparation',
    image: demo2,
    path: '/IELTS-preparation',
  },
  {
    name: 'Personal tutoring',
    image: demo3,
    path: '/Personal-tutoring',
  },
  {
    name: 'Activate your English',
    image: demo4,
    path: '/Activate-your-English',
  },
  {
    name: 'Grammar',
    image: demo5,
    path: '/Grammar',
  },
  {
    name: 'Vocabulary',
    image: demo6,
    path: '/Vocabulary',
  },
]
