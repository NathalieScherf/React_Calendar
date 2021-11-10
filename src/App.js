import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';

import { Day } from './components/Day'
import Month from './components/Month'


class App extends React.Component {
  state = {
    week: ['Mon', 'Tues', 'Wed', "Thurs", 'Fri', 'Sat', 'Sun'],
    months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    currentDate: new Date().getDate(),
    currentMonth: ''
  }

  getMonthToDisplay = (monthNr) => {
    let currentMonth = this.state.months.filter((month, index) => index === monthNr)
    this.setState({
      currentMonth: currentMonth
    });
  }

  getDaysInMonth = (year, month) => {
    // googeled this function, year, month +1 (we are at 10 nov), but we pass in +1, to get next mont, dand then using 0, we get the last day of the previous month, aka, the last date of november! Get date gives us the date of the last day, e.g. also the lenght of the month. 
    let days = new Date(year, month + 1, 0).getDate()
    // Once we have this, we put it into state, to use it to loop over an array of this lenght and render the correct number of days for the displayed month
    this.setState({
      days: days
    })
  }
  // For button: get prev mont
  loadPrevMonth = () => {
    let prevMonth = this.state.monthNr-1
    this.getMonthToDisplay(prevMonth)
    this.getDaysInMonth(this.state.year, prevMonth)
    // change the month in state, in order to reuse when we click againg. 
    this.setState({
      monthNr: prevMonth,
    })
  }

  // add component did mount to load date when app loads
  componentDidMount() {
    let monthNr = new Date().getMonth()
    let year = new Date().getFullYear()
    this.getMonthToDisplay(monthNr)
    this.getDaysInMonth(year, monthNr)
    this.setState({
      monthNr: monthNr,
      year: year
    })
  }

  render() {
    return (
      <div className="App container">
        <div className=' '>
          <Month month={this.state.currentMonth} loadPrevMonth={this.loadPrevMonth} />
          {/* create an array as long as the month and let it display the day component  */}
          <div className='m-2 d-flex align-content-start flex-wrap'>
            {[...Array(this.state.days)].map((day, index) =>
              <Day day={index + 1} key={index} currentDate={this.state.currentDate === index+1}/>
            )}
          </div>

        </div>



      </div>
    )
  }
}

export default App;
