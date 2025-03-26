import './App.css'
import { Homework1 } from './homeworks/hw-1/homework-1.tsx'
import { Homework2 } from './homeworks/hw-2/homework-2.tsx'
import { Homework4 } from './homeworks/hw-4/homework-4.tsx'
import { Homework3 } from './homeworks/hw-3/homework-3.tsx'

export function App() {
  return (
    <>
      <h1>Frontend homeworks</h1>
      <Homework1 />
      <Homework2 />
      <Homework3 />
      <Homework4 />
    </>
  )
}
