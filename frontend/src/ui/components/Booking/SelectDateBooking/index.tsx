import DatePicker, { registerLocale } from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import pt from 'date-fns/locale/pt-BR'
import { CalendarBlank } from '@phosphor-icons/react'
import { IDateProps } from './IDateProps'

export function SelectDateBooking({ date }: IDateProps) {
  const [startDate, setStartDate] = useState<Date | null>(null)
  registerLocale('pt-BR', pt)
  return (
    <div className="relative w-full">
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(data: Date) => {
          setStartDate(data)
          date(data.toLocaleDateString('pt-br').split('/').reverse().join('-'))
        }}
        placeholderText="Data"
        minDate={new Date()}
        className="rounded-l pr-4 pl-12 font-light text-gray-700 w-full placeholder:text-gray-700 
        h-10 bg-gray-100 border border-gray-300"
        locale="pt-BR"
      />
      <label htmlFor="dataRetirada">
        <CalendarBlank
          size={28}
          className="absolute top-2 left-2 fill-blue-900"
        />
      </label>
    </div>
  )
}
