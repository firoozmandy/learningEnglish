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
      <label
        className="label flex h-8 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1 shadow dark:bg-gray-200 dark:shadow-gray-800"
        htmlFor="chk"
        data-fc-trigger="switch"
        data-fc-type="theme_switcher"
        onClick={() =>
          themeMode === 'light' ? updateTheme('dark') : updateTheme('light')
        }>
        {themeMode === 'light' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            stroke-width="2">
            <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"></path>
            <path d="M6.343 17.657l-1.414 1.414"></path>
            <path d="M6.343 6.343l-1.414 -1.414"></path>
            <path d="M17.657 6.343l1.414 -1.414"></path>
            <path d="M17.657 17.657l1.414 1.414"></path>
            <path d="M4 12h-2"></path>
            <path d="M12 4v-2"></path>
            <path d="M20 12h2"></path>
            <path d="M12 20v2"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            className='text-gray-700'
            stroke-width="2">
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
            <path d="M19 11h2m-1 -1v2"></path>
          </svg>
        )}
      </label>
    </span>
  )
}

export default ThemeToggle
