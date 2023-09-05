import DatePicker, { registerLocale } from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import pt from 'date-fns/locale/pt-BR'
import { CalendarBlank } from '@phosphor-icons/react'
import { IDateProps } from '../../../Booking/SelectDateBooking/IDateProps'

export function InputSelectData({ date }: IDateProps) {
  const [startDate, setStartDate] = useState<Date | null>(null)
  registerLocale('pt-BR', pt)
  return (
    <div className="relative w-full">
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        placeholderText="Data"
        minDate={new Date()}
        onChange={(data: Date) => {
          setStartDate(data)
          date(data.toLocaleDateString('pt-br').split('/').reverse().join('-'))
        }}
        className="h-12 rounded-l border-0 pr-4 pl-12 font-light text-gray-700 w-full placeholder:text-gray-700"
        locale="pt-BR"
        id="dataRetirada"
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
