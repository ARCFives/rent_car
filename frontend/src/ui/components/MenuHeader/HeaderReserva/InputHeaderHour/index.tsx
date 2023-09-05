import { hoursOpen } from '../../../../../data/contexts/HoursOpen/hours.ts'

interface InputHeaderHourProps {
  frota?: boolean
  hour: (hour: string) => void
}

export function InputSelectHour({ frota, hour }: InputHeaderHourProps) {
  return (
    <div>
      <select
        className={`w-[7.5rem] h-12 rounded-r
       text-gray-700 border-0 ${
         frota && '!h-10 bg-gray-100 !border border-gray-300'
       }`}
        onChange={e => hour(e.target.value)}
      >
        <option value="" selected hidden>
          --:--
        </option>
        {hoursOpen.map((hour: string) => {
          return (
            <option value={hour} key={hour}>
              {hour}
            </option>
          )
        })}
      </select>
    </div>
  )
}
