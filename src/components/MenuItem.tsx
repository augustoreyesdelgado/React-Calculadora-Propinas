import { menuItem } from "../types"

type MenuItemProps = {
  item: menuItem,
  addItem: (item: menuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button className="border-2 rounded-md border-teal-200 hover:bg-teal-100 w-full p-3 flex justify-between"
    onClick={()=>addItem(item)}>
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
