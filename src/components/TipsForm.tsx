import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipsFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipsForm({setTip, tip}: TipsFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl pb-2">Propina:</h3>

        <form>
            {tipOptions.map( tipOption =>(
                <div className="flex gap-2">
                    <label>{tipOption.label}</label>
                    <input
                    id={tipOption.id}
                    type="radio"
                    name="tip"
                    value={tipOption.value}
                    onChange={e => setTip(+e.target.value)}
                    checked={tipOption.value===tip}
                    />
                </div>
            ))}
            
        </form>

    </div>
  )
}
