import { ComponentProps } from 'react'
import s from './custome-input.module.css'

type CustomInputProps = ComponentProps<'input'> // Получаем все пропсы из стандартного компонента input

export const CustomInput = (props: CustomInputProps) => {
  // {...props} - передаем все пропсы, которые пришли в компонент в стандартный компонент input
  // сохраняем возможность добавлять пользовательские классы для стилизации
  return <input {...props} className={`${s.input} ${props.className || ''}`} />
}
