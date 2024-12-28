'use client'
import { useLayoutContext } from '@/context/useLayoutContext'
import { useEffect } from 'react'

const ThemeToggle = () => {
  const { themeMode, updateTheme } = useLayoutContext()
  useEffect(() => {
    document.body.classList.add(
      'relative',
      'z-50',
      'dark:text-gray-300',
      'dark:bg-neutral-900',
    )
    return () => {
      document.body.classList.add(
        'relative',
        'z-50',
        'dark:text-gray-300',
        'dark:bg-neutral-900',
      )
    }
  }, [])
  return (
    <span className="fixed end-3 top-3 z-50 cursor-pointer">
      <input
        className="relative h-7 w-[52px] cursor-pointer appearance-none rounded-full border-2 border-transparent bg-slate-200 transition-colors ease-in-out before:inline-block before:h-6 before:w-6 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:transition before:duration-200 before:ease-in-out checked:bg-indigo-500 checked:bg-none checked:before:translate-x-full checked:before:bg-indigo-200 dark:bg-slate-700 dark:before:bg-slate-400 dark:checked:bg-indigo-500 dark:checked:before:bg-indigo-200"
        data-fc-trigger="switch"
        data-fc-type="theme_switcher"
        type="checkbox"
        onChange={() =>
          themeMode === 'light' ? updateTheme('dark') : updateTheme('light')
        }
      />
    </span>
  )
}

export default ThemeToggle
