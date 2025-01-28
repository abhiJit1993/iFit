import React, { useState, useEffect } from "react";
import IFitTable from "../../Utility Components/Table";
import planAPIService from "../../Services/planServices";
import "./planGrid.css";

const __getPlanRowStyle = (plan) => {
  if (plan.PlanTypeId === 1) {
    return { backgroundColor: "#007bff", color: "white" };
  } else if (plan.PlanTypeId === 2) {
    return { backgroundColor: "#ffc107", color: "black" };
  } else {
    return { backgroundColor: "#17a2b8", color: "white" };
  }
};

function Plans() {
  const [plans, setPlans] = useState([]); // State for data source
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch plans
  const _getPlans = async () => {
    try {
      const response = await planAPIService.getPlans();     
       setPlans(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false); // Stop loading once data fetch is complete
    }
  };

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data
    _getPlans();
  }, []); // Empty dependency array ensures it runs once on component mount

  // Define table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      render: (text, record) => (
        <span>{text}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "Plan_Charges",
      key: "Plan_Charges",
      render: (Plan_Charges) => `$${Plan_Charges} / month`,
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Discount",
      dataIndex: "Discount",
      key: "Discount",
      render: (discount) => (discount ? `${discount}%` : "N/A"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div>
          <div style={{ 'float': 'left' }}>
            <button
              className="subscribe-button"
              style={__getPlanRowStyle(record)}
            >
              Edit
            </button>
          </div >
          <div style={{ 'float': 'right' }}>
            <button
              className="subscribe-button"
              style={__getPlanRowStyle(record)}
            >
              Delete
            </button>
          </div>

        </div>

      ),
    },
  ];

  return (
    <div className="planpage">
      <IFitTable
        columns={columns}
        dataSource={plans.map((plan) => ({
          ...plan,
          key: plan.Id, // AntD requires a unique key for each row
        }))}
        loading={loading}
      />
    </div>
  );
}

export default Plans;
