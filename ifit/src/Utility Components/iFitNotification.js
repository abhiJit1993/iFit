import { Button, Icon, notification, Divider } from 'antd';

const showNotification = (type , placement) => {
notification[type]({
    message: `iFit Notification`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
})
}

export default showNotification