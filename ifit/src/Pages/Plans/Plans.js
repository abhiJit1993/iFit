import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./planGrid.css";
import planAPIService from "../../Services/planServices";

const __getPlanCardStyle = (plan) => {
  let style = {
    text: "light",
  };
  if (plan.PlanTypeId === 1) {
    style.border = "#6c757d"; // Gray
    style.backgroundColor = "#1f2937"; // Charcoal
  } else if (plan.PlanTypeId === 2) {
    style.border = "#4caf50"; // Green
    style.backgroundColor = "#2c3e50"; // Dark Blue-Gray
  } else {
    style.border = "#f39c12"; // Yellow-Orange
    style.backgroundColor = "#34495e"; // Slate Gray
  }
  return style;
};

function Plans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const _getPlans = async () => {
    try {
      const response = await planAPIService.getPlans();
      setPlans(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    _getPlans();
  }, []);

  return (
    <Container className="planpage">
      <Row>
        {plans.map((plan) => {
          const cardStyles = __getPlanCardStyle(plan);

          return (
            <Col
              key={plan.Id}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className="mb-4"
            >
              <Card
                className="plan-card"
                style={{
                  backgroundColor: cardStyles.backgroundColor,
                  color: cardStyles.text,
                  borderColor: cardStyles.border,
                }}
              >
                <Card.Header
                  className="plan-header"
                  style={{
                    backgroundColor: cardStyles.border,
                    color: "white",
                  }}
                >
                  {plan.Name}
                </Card.Header>
                <Card.Body>
                  <Card.Title className="plan-price">
                    ${plan.Price} / month
                  </Card.Title>
                  <Card.Text className="plan-description">
                    {plan.Description}
                  </Card.Text>
                  {plan.discount && (
                    <div className="plan-discount">
                      Discount: {plan.Discount}%
                    </div>
                  )}
                  <button className="subscribe-button">Subscribe Now</button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Plans;
