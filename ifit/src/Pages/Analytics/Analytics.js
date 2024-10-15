import { Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import showNotification from "../../Utility Components/iFitNotification";
import { setTheme } from '../../Store/Actions/appActions';

const showNot = (currentTheme) => {
  showNotification('error', 'bottomRight');
}

function Analytics() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state => state.app.theme));

  const handleButtonClick = () => {
    showNot(currentTheme); // Show notification
    dispatch(setTheme(currentTheme)); // Dispatch the action to update the theme
  };

  return (
    <div className='analyticsPage'>
      Analytics PAGE - {currentTheme}
      <Button onClick={handleButtonClick}>Show Notification</Button>
    </div>
  );
}

export default Analytics;
