import { UserItem } from './user-item.tsx'

type Address = {
  street: string
  city: string
}

type User = {
  id: number
  name: string
  age: number
  address: Address
}

type UserListProps = {
  users: User[]
  filterLosAngelesUsers: () => void
}

export const UserList = (props: UserListProps) => {
  return (
    <div id={'hw02-users'}>
      <button id={'hw02-filter-button'} onClick={props.filterLosAngelesUsers}>
        Show me only users from Los Angeles 🌴
      </button>

      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}
