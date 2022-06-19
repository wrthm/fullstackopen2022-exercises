const Notification = ({ data }) => {
  if (data === null) {
    return null
  }
  else {
    const notificationClass = data.success ? 'notification-success' : 'notification-failure'

    return (
      <div className={`notification ${notificationClass}`}>
        {data.message}
      </div>
    )
  }
}

export default Notification