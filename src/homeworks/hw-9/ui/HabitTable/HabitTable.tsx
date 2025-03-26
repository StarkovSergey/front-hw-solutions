import { Habit } from '../../model/habits-reducer.ts'
import s from './HabitTable.module.css'
import { HabitTableRow } from './HabitTableRow/HabitTableRow.tsx'

const DAY_LABELS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

type HabitTableProps = { habits: Habit[] }

export const HabitTable = ({ habits }: HabitTableProps) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Привычка</th>
          {DAY_LABELS.map((label) => (
            <th key={label}>{label}</th>
          ))}
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {habits.map((habit) => (
          <HabitTableRow key={habit.id} habit={habit} />
        ))}
      </tbody>
    </table>
  )
}
