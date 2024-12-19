import { Button, Icon, notification, Divider, message } from 'antd';

const showNotification = (type , placement, message,description) => {
notification[type]({
    message,
    description,
    placement,
})
}

export default showNotification