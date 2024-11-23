import { Button } from "antd";
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import showNotification from "../../Utility Components/iFitNotification";
import { setTheme } from '../../Store/Actions/appActions';
import axios from "axios"; 

const showNot = (currentTheme) => {
  showNotification('error', 'bottomRight');
}

function Analytics() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state => state.app.theme));

  useEffect(() => {
    axios.get('https://reimagined-tribble-pp67x7pj9q73rxg-5000.app.github.dev/', {
      headers: {
          'Content-Type': 'application/json',
      },
      withCredentials: true, // Include cookies if needed
  })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

  }, );


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
