import { lazy } from 'react'
import type { RouteProps } from 'react-router-dom'

const HomePage = lazy(() => import('@/app/(home)/page'))

//pages
const Pricing1 = lazy(() => import('@/app/(demos)/pricing-1/page'))
const Pricing2 = lazy(() => import('@/app/(demos)/pricing-2/page'))
const Pricing3 = lazy(() => import('@/app/(demos)/pricing-3/page'))
const Pricing4 = lazy(() => import('@/app/(demos)/pricing-4/page'))
const Pricing5 = lazy(() => import('@/app/(demos)/pricing-5/page'))

const Pricing6 = lazy(() => import('@/app/(demos)/pricing-6/page'))

export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}

const demoPages: RoutesProps[] = [
  {
    path: '/',
    name: 'root',
    element: <HomePage />,
  },
  {
    path: '/Live-classes',
    name: 'Pricing 1',
    element: <Pricing1 />,
  },
  {
    path: '/IELTS-preparation',
    name: 'Pricing 2',
    element: <Pricing2 />,
  },
  {
    path: '/Personal-tutoring',
    name: 'Pricing 3',
    element: <Pricing3 />,
  },
  {
    path: '/Activate-your-English',
    name: 'Pricing 4',
    element: <Pricing4 />,
  },
  {
    path: '/Grammar',
    name: 'Pricing 5',
    element: <Pricing5 />,
  },
  {
    path: '/Vocabulary',
    name: 'Pricing 5',
    element: <Pricing6 />,
  },
]

export const appRoutes = [...demoPages]
