import { Table } from "antd";
import './Table.css';

function IFitTable(props) {
  const cols = props.columns;
  const data = props.dataSource;

  return (
    <div className="outer">
      <div className="dark-table-container">
        <Table
          columns={cols}
          dataSource={data}
          pagination={{
            pageSize: 10, // Customize rows per page
            responsive: true,
          }}
          scroll={{
            x: 1000, // Ensure table scrolls horizontally when needed
          }}
          sticky
        />
      </div>
    </div>
  );
}

export default IFitTable;
