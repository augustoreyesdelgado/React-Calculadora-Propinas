import { useMemo } from "react"
import { orderItem } from "../types"
import { formarCurrency } from "../helpers"

type OrderTotalProps = {
    order: orderItem[],
    tip: number,
    placeOrder: ()=>void
}

export default function OrderTotal({order, tip, placeOrder}: OrderTotalProps) {

  const subTotalAmount = useMemo(() => order.reduce((total, item)=>total+(item.price*item.quantity), 0), [order])
  const tipAmount = useMemo(()=> tip*subTotalAmount, [tip, order])
  const totalAmount = useMemo(()=> tipAmount+subTotalAmount, [tip, order])

  return (
    <>
    <div className="space-y-3 text-lg">
        <h2 className="font-black">Totales y Propina:</h2>
        <p>Subtotal a pagar:
            <span className="font-bold">{ formarCurrency(subTotalAmount)}</span>
        </p>

        <p>Propina:
            <span className="font-bold">{ formarCurrency(tipAmount)}</span>
        </p>

        <p>Total a pagar:
            <span className="font-bold">{ formarCurrency(totalAmount)}</span>
        </p>

    </div>

    <button className="w-full bg-slate-500 p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
    disabled={totalAmount===0}
    onClick={()=>placeOrder()}
    >Guardar Orden
    </button>
    </>
  )
}
