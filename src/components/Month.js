const Month =({loadPrevMonth, month})=>{
  return(
    <div className={"border border-primary d-flex justify-content-around p-4"}>
      <button onClick={loadPrevMonth}> prev </button>
      <span>{month}</span>
      <button> next </button>

      </div>
  )
} 

export default Month