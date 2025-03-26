import { useDispatch } from 'react-redux'
import { TextField } from '../../../../sprint-2/hw-7/text-field/text-field.tsx'
import { FormEvent, useState } from 'react'
import { addHabitAC } from '../../model/habits-reducer.ts'
import { Button } from '../../../../sprint-2/hw-7/button/button.tsx'
import s from './NewHabitForm.module.css'

export const NewHabitForm = () => {
  const dispatch = useDispatch()

  const [newHabitTitle, setNewHabitTitle] = useState('')

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setNewHabitTitle(e.currentTarget.value)
  }

  const handleAddHabit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newHabitTitle.trim() === '') return
    dispatch(addHabitAC(newHabitTitle))
    setNewHabitTitle('')
  }

  return (
    <form className={s.form} onSubmit={handleAddHabit}>
      <TextField
        label="Ваша новая привычка"
        className={s.input}
        value={newHabitTitle}
        onChange={handleChange}
        name="title"
      />
      <Button type="submit">Добавить</Button>
    </form>
  )
}
