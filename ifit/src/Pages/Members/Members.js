import React, { useState, useEffect } from "react";

import { Card, Container, Row, Col } from 'react-bootstrap';
import './planGrid.css';

import planAPIService from "../../Services/planServices";
import IFitCards from "../../Utility Components/Cards";
import { genStyleHooks } from "antd/es/theme/internal";


const __getPLanCardStyle = (plan)=>{
  let style = {text : 'dark'}
  if(plan.p_level_id === 0 ){
    style.border = 'secondary'
    style.backgroundColor = '#007bff'
  }else if(plan.p_level_id === 1){
    style.border = 'info'
    style.backgroundColor = '#ffc107'
  }else{
    style.border = 'warning'
    style.backgroundColor = '#17a2b8'
  }
 return style
}


const __generateInnerTextForPlanCards = (plan) =>{
  let cardStyles = __getPLanCardStyle(plan)
  return (
    <Container className="mt-4">
    <Row>
     
        <Col key={plan.id} xs={12} sm={6} md={6} lg={6} xl={6} className="mb-4">
          <Card
            border={cardStyles.border}
            text="dark"
            className="plan-card"
          >
            <Card.Header className="plan-header" style={{backgroundColor :cardStyles.backgroundColor}}>{plan.name}</Card.Header>
            <Card.Body>
              <Card.Title className="plan-price">${plan.price} / month</Card.Title>
              <Card.Text className="plan-description">{plan.desc}</Card.Text>
              {plan.discount && (
                <div className="plan-discount">Discount: {plan.discount}%</div>
              )}
              <button className="subscribe-button">Subscribe Now</button>
            </Card.Body>
          </Card>
        </Col>
  
    </Row>
  </Container>

  )
}
function Plans() {
  const [styles, setStyles] = useState([]); // State for columns
  const [plans, setPlans] = useState([]); // State for data source
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch plans
  const _getPlans = async () => {
    try {
      let plans = await planAPIService.getPlans();
       setPlans(plans);
      setStyles(styles)
      // Update state with fetched plans
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false); // Stop loading once data fetch is complete
    }
  };

  // // Fetch columns
  // const _getColumns = async () => {
  //   try {
  //     const columns = await planAPIService.getPlanCols();
  //     setColumns(columns); // Update state with fetched columns
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data
    _getPlans();
    // _getColumns();
  }, []); // Empty dependency array ensures it runs once on component mount

  return (
    <div className="planpage">{
      plans.map((plan)=>{
        return  (
          <IFitCards
          style={__getPLanCardStyle(plan)}
          innerText = {__generateInnerTextForPlanCards(plan)}
           >
             
           </IFitCards>
        )
      })
    
    }
      
      {/* <IFitTable
        columns={columns}
        dataSource={dataSource}
        loading={loading} // Pass loading state to the table if it supports it
      /> */}
    </div>
  );
}

export default Plans;
