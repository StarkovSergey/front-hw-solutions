import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './button.module.css'

type DefaultButtonProps = ComponentPropsWithoutRef<'button'>

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends DefaultButtonProps {
  fullWidth?: boolean
  /** "primary" | "secondary" | "outlined"; */
  variant?: ButtonVariant
}

export const Button = ({ className, fullWidth, variant = 'primary', ...rest }: ButtonProps) => {
  const classNames = {
    root: clsx(s.button, s[variant], fullWidth && s.fullWidth, className),
  }

  return <button className={classNames.root} {...rest} />
}
