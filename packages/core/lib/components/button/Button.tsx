import type { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

export interface Test {
  className?: string
}

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props
  
  return <button className={`${styles.button} ${className || ''}`} {...rest} />
}
