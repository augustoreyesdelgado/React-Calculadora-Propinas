import { formarCurrency } from "../helpers"
import { menuItem, orderItem } from "../types"

type OrderContentsProps = {
    order: orderItem[],
    removeItem: (id: menuItem['id']) => void
}

export default function OrderContents({order, removeItem}: OrderContentsProps) {
  
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-5">
                {order.map( item => (
                    <div 
                    className="flex justify-between items-center border-t border-gray-400 py-5 last-of-type:border-b"
                    key={item.id}>
                        <div>
                        <p className="text-lg">{item.name} - {formarCurrency(item.price)}</p>
                        <p className="font-black">Cantidad: {item.quantity} = {formarCurrency(item.price*item.quantity)}</p>
                        </div>
                        <button className="bg-red-600 h-8 w-8 rounded-full text-white"
                        onClick={()=>removeItem(item.id)}>X</button>
                    </div>
                ))}
        </div>
    </div>
  )
}
