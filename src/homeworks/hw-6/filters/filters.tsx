import s from './filters.module.css'
import { Genre } from '../homework-6.tsx'
import { getGenreEmoji } from '../utils/get-genre-emoji.ts'

type FiltersProps = {
  filter: Genre | null
  setFilter: (filter: Genre | null) => void
}

const genres: { label: string; value: Genre | null; emoji?: string }[] = [
  { label: 'All', value: null },
  { label: `Dev ${getGenreEmoji('Dev')}`, value: 'Dev' },
  { label: `Fantasy ${getGenreEmoji('Fantasy')}`, value: 'Fantasy' },
  { label: `Classic ${getGenreEmoji('Classic')}`, value: 'Classic' },
]

export const Filters = ({ filter, setFilter }: FiltersProps) => {
  return (
    <ul className={s.list}>
      {genres.map(({ label, value }) => (
        <li key={label} className={filter === value ? s.active : ''}>
          <button id={`hw6-filter-${value || 'all'}`} onClick={() => setFilter(value)}>
            {label}
          </button>
        </li>
      ))}
    </ul>
  )
}
