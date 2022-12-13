const Notification = ({ message, color }) => {
    if (message === null) {
        return null
    }
    if (color === 'green')
        return (

            <div className='error'> {message}</div>

        )
    else if (color === 'red') return (<div className='errorRed'> {message}</div>)
}

export default Notification