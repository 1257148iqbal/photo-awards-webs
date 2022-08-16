import React from "react";
import {
  Card,
  Col, Row
} from "reactstrap";
import ActiveContesSectiontList from "../../parts/contestSection/list/ActiveContesSectiontList";

const ContestSection = () => {

  return (
      <Card className="page-content m-auto mt-5">
        <Row className="rounded rounded-3 p-1">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <ActiveContesSectiontList />
          </Col>
        </Row>
      </Card>
  );
};

export default ContestSection;
