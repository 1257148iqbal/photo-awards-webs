import React, { useState } from "react";
import { MinusCircle, PlusCircle } from "react-feather";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import { v4 as uuid } from "uuid";

const initialState = [
  {
    rowId: uuid(),
    sectionName: "",
    imageCount: 0,
    imageLength: 0,
    imageWidth: 0,
    imageSize: 0,
  },
];

const ContestSectionForm = () => {
  const { handleSubmit } = useForm();
  //#region State
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState(initialState);
  //#endregion
  //#region UDFs

  //#endregion
  //#region  Events
  // add new row
  const isValid = state.every((i) => i.sectionName);

  const handleAdd = () => {
    const section = {
      rowId: uuid(),
      sectionName: "",
      imageCount: 0,
      imageLength: 0,
      imageWidth: 0,
      imageSize: 0,
    };
    setState((prev) => [...prev, section]);
  };

  // remove  row
  const handleDelete = (idx) => {
    const _sectionInfo = [...state];
    _sectionInfo.splice(idx, 1);
    setState(_sectionInfo);
  };

  const onChangeEvents = (e, rowId) => {
    const { name, value } = e.target;
    const _sectionInfo = [...state];
    _sectionInfo.map((item) => {
      if (item.rowId === rowId) {
        item[name] = value;
      }
      return item;
    });
    setState(_sectionInfo);
  };

  // for submit
  const handleModalSubmit = () => {
    if (isValid) {
      const payload = {
        sectionInfos: state.map((d) => ({
          ...d,
        })),
      };
      console.log(payload);
    } else {
      alert("Please fill all  fields!!!");
    }
  };

  //#endregion
  return (
    <div className="page-content m-auto">
      <Card className="mt-4">
        <CardBody className="card-body-override">
          <Form onSubmit={handleSubmit(handleModalSubmit)}>
            <Col xs="12" sm="12" md="12" lg="12" xl="12">
              {state.map((section, idx) => (
                <Row key={section.rowId} className="rounded rounded-3 mr-1">
                  <FormGroup tag={Col} xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Label for="sectionName">Section Name</Label>
                    <Input
                      name="sectionName"
                      id={`sectionName${section.rowId}`}
                      value={section.sectionName}
                      onChange={(e) => onChangeEvents(e, section.rowId)}
                      placeholder="Section Name"
                    />
                  </FormGroup>
                  <FormGroup tag={Col} xs={12} sm={6} md={2} lg={2} xl={2}>
                    <Label for="imageCount">Image Count</Label>
                    <Input
                      name="imageCount"
                      id="imageCount"
                      value={section.imageCount}
                      onChange={(e) => onChangeEvents(e, section.rowId)}
                      placeholder="Image Count"
                    />
                  </FormGroup>
                  <FormGroup tag={Col} xs={12} sm={6} md={2} lg={2} xl={2}>
                    <Label for="imageSize">Image Size</Label>
                    <Input
                      name="imageSize"
                      id="imageSize"
                      value={section.imageSize}
                      onChange={(e) => onChangeEvents(e, section.rowId)}
                      placeholder="Image Size"
                    />
                  </FormGroup>
                  <FormGroup tag={Col} xs={12} sm={6} md={2} lg={2} xl={2}>
                    <Label for="imageLength">Image Length</Label>
                    <Input
                      name="imageLength"
                      id="imageLength"
                      value={section.imageLength}
                      onChange={(e) => onChangeEvents(e, section.rowId)}
                      placeholder="Image Length"
                    />
                  </FormGroup>
                  <FormGroup tag={Col} xs={12} sm={6} md={2} lg={2} xl={2}>
                    <Label for="imageWidth">Image Width</Label>
                    <Input
                      name="imageWidth"
                      id="imageWidth"
                      value={section.imageWidth}
                      onChange={(e) => onChangeEvents(e, section.rowId)}
                      placeholder="Image Width"
                    />
                  </FormGroup>

                  <FormGroup tag={Col} xs={1} className="d-flex">
                    <Button
                      color="danger"
                      className="btn-icon mt-3 w-50"
                      disabled={state.length === 1}
                      onClick={() => handleDelete(idx)}
                    >
                      <MinusCircle size={16} className="me-40" />
                    </Button>
                    {state.length === idx + 1 && (
                      <Button
                        className="btn-icon mt-3"
                        color="primary"
                        onClick={handleAdd}
                      >
                        <PlusCircle size={16} className="me-50" />
                      </Button>
                    )}
                  </FormGroup>
                </Row>
              ))}
            </Col>
          </Form>

          <Button
            type="submit"
            className="mr-1"
            color="primary"
            onClick={handleModalSubmit}
          >
            Submit
          </Button>
          <Button type="cancel" color="danger" outline onClick={() => {}}>
            Cancel
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ContestSectionForm;
