import React from "react";
import { Card, Col, Label, Row } from "reactstrap";
import Sidebar from "../../../components/custom/Sidebar";

const ContestDetails = (props) => {
  const { isOpenSidebar, setIsOpenSidebar, selectItems } = props;

  //#endregion

  return (
    <Sidebar
      size="lg"
      title="New Contest Form"
      headerClassName="mb-1"
      contentClassName="pt-0"
      style={{ transition: "0.5s all ease" }}
      open={isOpenSidebar}
      toggleSidebar={() => setIsOpenSidebar(!isOpenSidebar)}
    >
      <Card className='p-2'>
        <Row>
          <Col xs={12}>
            <h4>{`Contest Name : ${selectItems?.contestName}`}</h4>
            {
              selectItems?.contestSections ? 
              <>
              {selectItems?.contestSections?.map((item) => (
                  <div key={item.id}>
                    <div className="custom-form-main">
                      <Label className="custom-form-label">Section Name</Label>
                      <Label className="custom-form-colons"> : </Label>
                      <div className="custom-form-group">{item?.sectionName}</div>
                    </div>
                    <div className="custom-form-main">
                      <Label className="custom-form-label">Image Count</Label>
                      <Label className="custom-form-colons"> : </Label>
                      <div className="custom-form-group">{item?.imageCount}</div>
                    </div>
                  </div>
                ))}
              </>: 
              <div>
                <h5>There have no contest!!</h5>
              </div>
            }
          </Col>
        </Row>
      </Card>
    </Sidebar>
  );
};

export default ContestDetails;
