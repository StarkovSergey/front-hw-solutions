import { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'
import s from './card.module.css'

type CardProps = {
  headerContent?: ReactNode
  children: ReactNode
  footerContent?: ReactNode
} & ComponentProps<'div'>

export const Card = ({ headerContent, footerContent, children, className, ...props }: CardProps) => {
  return (
    <div className={clsx(s.box, className)} {...props}>
      {headerContent && <header>{headerContent}</header>}
      {children}
      {footerContent && <footer>{footerContent}</footer>}
    </div>
  )
}
