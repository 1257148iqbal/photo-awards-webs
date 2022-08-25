import React from "react";
import { useDispatch } from "react-redux";
import { Card, Col, Label, Row } from "reactstrap";
import Sidebar from "../../../components/custom/Sidebar";
import { toggleContestSectionModal } from "../store/actions";

const ContestSectionDetails = (props) => {
  const { isOpenModal, selectItems } = props;

  const dispatch = useDispatch();
  //#endregion

  return (
    <Sidebar
      size="lg"
      title="New Contest Form"
      headerClassName="mb-1"
      contentClassName="pt-0"
      style={{ transition: "0.5s all ease" }}
      open={isOpenModal}
      toggleSidebar={() => dispatch(toggleContestSectionModal(!isOpenModal))}
    >
      <Card className='p-2'>
        <Row>
          <Col xs={12}>
            <h4 className="mb-2">{`Contest Name : ${selectItems?.contestName}`}</h4>
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
          </Col>
        </Row>
      </Card>
    </Sidebar>
  );
};

export default ContestSectionDetails;
