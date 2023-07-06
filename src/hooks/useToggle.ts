import {useState, useCallback} from 'react'

export const useToggle = (initialChecked: boolean): [boolean, () => void] => {
  const [checked, setChecked] = useState<boolean>(initialChecked)
  const toggleChecked = useCallback(() => setChecked(checked => !checked), [])
  return [checked, toggleChecked]
}
