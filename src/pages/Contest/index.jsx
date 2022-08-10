import React, { useState } from "react";
import {
    Card,
    Col, Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
} from "reactstrap";
import "../../../src/assets/scss/custom-form.scss";
import ActiveContestList from "./ActiveContestList";
import ArchiveContestList from "./ArchiveContestList";


const Contest = () => {

//#region State
  const [active, setActive] = useState("1");
//#endregion

//#region Events
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
//#endregion

  return (
    <div>
      <Card className="page-content m-auto mt-5">
        <Row className="rounded rounded-3 p-1">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={active === "1"}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <span>Active</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "2"}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Archive
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={active} className="border p-3">
              <TabPane tabId="1">
                    <ActiveContestList/>
              </TabPane>

              <TabPane tabId="2">
                    <ArchiveContestList/>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Contest;
