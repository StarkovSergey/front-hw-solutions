// habitSlice.ts
import { createAction, createReducer, nanoid } from '@reduxjs/toolkit'

export type Habit = {
  id: string
  title: string
  days: boolean[] // Массив длины 7: [Пн, Вт, Ср, Чт, Пт, Сб, Вс]
}

const initialState: Habit[] = [
  {
    id: nanoid(),
    title: 'Решать по 1 задаче на CodeWars',
    days: Array(7).fill(false),
  },
]

// Добавление привычки с пустыми значениями для дней (все false)
export const addHabitAC = createAction('habits/addHabit', (title: string) => {
  return { payload: { id: nanoid(), title, days: Array(7).fill(false) } }
})

// Удаление привычки по id
export const deleteHabitAC = createAction<{ id: string }>('habits/deleteHabit')

// Обновление названия привычки
export const updateHabitTitleAC = createAction<{ id: string; title: string }>('habits/updateHabitTitle')

// Переключение чекбокса для конкретного дня привычки
export const toggleHabitDayAC = createAction<{ id: string; dayIndex: number }>('habits/toggleHabitDay')

export const habitsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addHabitAC, (state, action) => {
      state.push(action.payload)
    })
    .addCase(deleteHabitAC, (state, action) => {
      const index = state.findIndex((habit) => habit.id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    })
    .addCase(updateHabitTitleAC, (state, action) => {
      const { id, title } = action.payload
      const habit = state.find((h) => h.id === id)
      if (habit) {
        habit.title = title
      }
    })
    .addCase(toggleHabitDayAC, (state, action) => {
      const { id, dayIndex } = action.payload
      const habit = state.find((h) => h.id === id)
      if (habit && dayIndex >= 0 && dayIndex < habit.days.length) {
        habit.days[dayIndex] = !habit.days[dayIndex]
      }
    })
})
