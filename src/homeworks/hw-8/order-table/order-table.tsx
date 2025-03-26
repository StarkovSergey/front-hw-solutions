import React from 'react'

import { Button } from '../../hw-7/button/button.tsx'
import { Actions, Order, removeOrder, updateOrderStatus } from '../model/orders-reducer.ts'
import s from './order-table.module.css'

export const OrderTable = ({
  orders,
  handleRemoveOrder,
  handleUpdateOrderStatus,
}: {
  orders: Order[]
  handleRemoveOrder: (id: string) => void
  handleUpdateOrderStatus: (id: string) => void
}) => {
  return (
    <table id="hw8-order-table" className={s.ordersTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Напиток</th>
          <th>Количество</th>
          <th className={s.statusTh}>Статус</th>
          <th className={s.actionsTh}>Действия</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} id={`hw8-order-row-${order.id}`}>
            <td>{order.id}</td>
            <td>{order.drink}</td>
            <td>{order.quantity}</td>
            <td>{order.status}</td>
            <td>
              {order.status !== 'completed' && (
                <button
                  id={`hw8-update-order-button-${order.id}`}
                  onClick={() => handleUpdateOrderStatus(order.id)}
                  className={s.buttonUpdate}>
                  {order.status === 'pending' ? 'Начать приготовление' : 'Завершить заказ'}
                </button>
              )}
              <button
                id={`hw8-remove-order-button-${order.id}`}
                onClick={() => handleRemoveOrder(order.id)}
                className={s.buttonRemove}>
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
