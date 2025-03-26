import { useState } from 'react'
import { Filters } from './filters/filters.tsx'
import { BookList } from './book-list/book-list.tsx'

/*
 * Не изменяйте эти данные! Они нужны для тестов.
 * */
const BOOKS: Book[] = [
  { id: 1, title: 'Grokking Algorithms', genre: 'Dev' },
  { id: 2, title: 'The Hobbit', genre: 'Fantasy' },
  { id: 3, title: 'The Great Gatsby', genre: 'Classic' },
  { id: 4, title: 'Clean Code', genre: 'Dev' },
  { id: 5, title: 'The Catcher in the Rye', genre: 'Classic' },
]

export type Book = {
  id: number
  title: string
  genre: Genre
}

export type Genre = 'Dev' | 'Fantasy' | 'Classic'

export const Homework6 = () => {
  const [filter, setFilter] = useState<Genre | null>(null)
  const [books, setBooks] = useState(BOOKS)

  const handleDeleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id))
  }
  const filteredBooks = filter ? books.filter((book) => book.genre === filter) : books

  return (
    <section id={'hw6'}>
      <h3>Homework 6</h3>
      <Filters filter={filter} setFilter={setFilter} />
      <BookList books={filteredBooks} handleDeleteBook={handleDeleteBook} />
    </section>
  )
}
