const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.toLocaleString('en-US', {year: 'numeric'});

    return (
        <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
    )
}

export default ExpenseDate;