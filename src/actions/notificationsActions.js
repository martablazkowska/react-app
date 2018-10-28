export const notificationsActions = {
  notifySuccess: notifySuccess,
  notifyError: notifyError,
  clearAllNotifications: clearAllNotifications
}

function notifySuccess(message) {
  return {
    type: 'NOTIFY_SUCCESS',
    message: message
  }
}

function notifyError(message) {
  return {
    type: 'NOTIFY_ERROR',
    message: message
  }
}

function clearAllNotifications() {
  return {
    type: 'CLEAR_ALL_NOTIFICATIONS'
  }
}
