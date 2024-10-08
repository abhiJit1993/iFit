import { Button } from "antd";
import showNotification from "../../Utility Components/iFitNotification";

const  showNot = () => {
  showNotification('error','bottomRight')
}
function Analytics (){
    return(
      <div className='analyticsPage'>
   Analytics PAGE <Button onClick={showNot}>Show Notification</Button>
      </div>
           
    
    )
     
    }
    export default Analytics;