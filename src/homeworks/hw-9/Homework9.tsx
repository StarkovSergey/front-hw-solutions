import { useSelector } from 'react-redux'
import { RootState } from '../../../app/store'
import { NewHabitForm } from './ui/NewHabitForm/NewHabitForm.tsx'
import { HabitTable } from './ui/HabitTable/HabitTable.tsx'
import s from './Homework9.module.css'

export const Homework9 = () => {
  const habits = useSelector((state: RootState) => state.quiz)

  return (
    <section id="hw9">
      <h3>Homework 9 - Трекер привычек</h3>
      <div className={s.box}>
        <NewHabitForm />
        {habits.length === 0 ? <p>Добавьте первую привычку!</p> : <HabitTable habits={habits} />}
      </div>
    </section>
  )
}
