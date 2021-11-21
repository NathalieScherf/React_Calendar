import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';

import { Day } from './components/Day'
import Month from './components/Month'


function App() {

  const [currentDate, setDate] = useState(new Date().getDate())
  const [currentMonth, setCurrentMonth] = useState('')
  const [days, setDays] = useState(31)
  const [monthNr, setMonthNr] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())
  const [week, setWeek] = useState(['Mon', 'Tues', 'Wed', "Thurs", 'Fri', 'Sat', 'Sun'])
  const [months] = useState(['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'])

  const getMonthToDisplay = (monthNr) => {
    let currentMonth = months.filter((month, index) => index === monthNr)
    setCurrentMonth(currentMonth)
  }

  const getDaysInMonth = (year, month) => {
    let days = new Date(year, month + 1, 0).getDate()
    // Once we have this, we put it into state, to use it to loop over an array of this lenght and render the correct number of days for the displayed month
    setDays(days)
  }
  // For button: get prev mont
  const loadPrevMonth = () => {
    let prevMonth = monthNr - 1
    getMonthToDisplay(prevMonth)
    getDaysInMonth(year, prevMonth)
    setMonthNr(prevMonth)
  }

  useEffect(() => {
    console.log('use effect');
    getMonthToDisplay(monthNr)
    getDaysInMonth(year, monthNr)
  },[])

  return (
    <div className="App container">
      <div className=' '>
        <Month month={currentMonth} loadPrevMonth={loadPrevMonth} />
        {/* create an array as long as the month and let it display the day component  */}
        <div className='m-2 d-flex align-content-start flex-wrap'>
          {[...Array(days)].map((day, index) =>
            <Day day={index + 1} key={index} currentDate={currentDate === index + 1} />
          )}
        </div>

      </div>

    </div>
  )

}

export default App;
