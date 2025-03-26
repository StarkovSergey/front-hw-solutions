import { ChangeEvent, useState } from 'react'

export const Homework3 = () => {
  const [currentText, setCurrentText] = useState('')
  const [texts, setTexts] = useState<string[]>(['Прочитать раздел документации React "Describing the UI" на react.dev'])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value)
  }

  const handleSave = () => {
    setTexts([...texts, currentText])
    setCurrentText('')
  }

  return (
    <div id={'hw03'}>
      <h3>Homework 3</h3>

      {currentText ? (
        <p id={'hw03-text'}>{currentText}</p>
      ) : (
        <p id={'hw03-default-text'}>Здесь появится новое дело</p>
      )}

      <input id={'hw03-input'} type="text" value={currentText} onChange={handleChange} />

      <button id={'hw03-button'} onClick={handleSave}>
        Сохранить
      </button>

      <h4>Список дел на день:</h4>

      <ol id={'hw03-tasks'}>
        {texts.map((el, index) => {
          return (
            <li key={index} id={`hw03-task-${index}`}>
              {el}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
