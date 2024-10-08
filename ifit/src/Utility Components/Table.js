import { Table } from "antd";
import './Table.css'
// import 'antd/dist/antd.css';
function IFitTable(props) {

    
    const cols = props.columns;
    const data = props.dataSource;

    return (
        <div className="outer" > 
   <div className="dark-table-container" >

<Table   columns={cols}
         dataSource={data}
         
></Table>
 
        </div>
        </div>
     
          )


}
export default IFitTable;