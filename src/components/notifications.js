import React from 'react'

const Notification = ({ message }) => {
  const notificationStyle = {
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  if (message === null) {
    return null
  }

  return (
    <div style={notificationStyle} className="error">
      {message}
    </div>
  )
}

export default Notification