export type OrderStatus = 'pending' | 'in-progress' | 'completed'

export interface Order {
  id: string
  drink: string
  quantity: number
  status: OrderStatus
}

export type State = {
  orders: Order[]
}

export const initialOrdersState: State = {
  orders: [],
}

export const ordersReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'add_order': {
      const newOrder: Order = {
        id: action.payload.id,
        drink: action.payload.drink,
        quantity: action.payload.quantity,
        status: 'pending',
      }
      return { ...state, orders: [...state.orders, newOrder] }
    }
    case 'update_order_status': {
      const updatedOrders = state.orders.map((order) => {
        if (order.id === action.payload.id) {
          let newStatus: OrderStatus

          if (order.status === 'pending') {
            newStatus = 'in-progress'
          } else if (order.status === 'in-progress') {
            newStatus = 'completed'
          } else {
            newStatus = order.status
          }

          return { ...order, status: newStatus }
        }
        return order
      })
      return { ...state, orders: updatedOrders }
    }
    case 'remove_order': {
      return { ...state, orders: state.orders.filter((order) => order.id !== action.payload.id) }
    }
    case 'reset': {
      return initialOrdersState
    }
    default:
      return state
  }
}

export type Actions =
  | ReturnType<typeof addOrder>
  | ReturnType<typeof updateOrderStatus>
  | ReturnType<typeof removeOrder>
  | ReturnType<typeof resetOrders>

/* ACTION CREATORS */
export const addOrder = (drink: string, quantity: number) => {
  const id = crypto.randomUUID()

  return {
    type: 'add_order' as const,
    payload: { drink, quantity, id },
  }
}

export const updateOrderStatus = (id: string) => ({
  type: 'update_order_status' as const,
  payload: { id },
})

export const removeOrder = (id: string) => ({
  type: 'remove_order' as const,
  payload: { id },
})

export const resetOrders = () => ({
  type: 'reset' as const,
})
