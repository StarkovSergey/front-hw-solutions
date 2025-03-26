import { Genre } from '../homework-6.tsx'

export const getGenreEmoji = (genre: Genre) => {
  switch (genre) {
    case 'Dev':
      return '💻'
    case 'Fantasy':
      return '🧙'
    case 'Classic':
      return '📚'
    default:
      return ''
  }
}
