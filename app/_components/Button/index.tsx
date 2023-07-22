'use client'

import NextLink from 'next/link'
import styles from './index.module.css'

type ButtonProps = {
  children: string
} & (OnClickProps | HrefProps)

type OnClickProps = {
  as: 'button'
  onClick: () => void
}

type HrefProps = {
  as: 'link'
  href: string
}

export const Button = ({children, ...props}: ButtonProps) => {
  
  if (props.as === 'button') return <button className={styles.button} onClick={props.onClick}>children</button>

  return <NextLink className={styles.button} href={props.href}>{children}</NextLink>
}
