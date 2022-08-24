import React, { useState } from "react";
import { MinusCircle, PlusCircle } from "react-feather";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import CreateableSelect from "react-select/creatable";
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
    imageCount: "4",
    imageLength: "1080",
    imageWidth: "1920",
    imageSize: "2",
  },
];

const ContestSectionForm = () => {

  //#region Hooks
  const history = useHistory();
  const {items} = useSelector(({contestReducer}) => contestReducer);
  const contestDDL= items.map(item=>({
    label: item.contestName,
    value: item.id,
  }))
  //#endregion
  const {handleSubmit } = useForm();
  //#region State
  const [state, setState] = useState(initialState);
  const [contest, setContest] = useState(null);
  //#endregion
  //#region UDFs

  //#endregion
  //#region  Events
  // add new row

  const handleAdd = (section, idx) => {
    const newIndex = idx + 1;
    state.splice(newIndex, 0, { ...section, rowId: uuid(), sectionName: "" });
    setState((prev) => [...prev]);
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
    const isValid = state.every((i) => i.sectionName);
    if (isValid) {
      const payload = {
        contestName: contest.label,
        sectionInfos: state.map((d) => ({
          ...d,
        })),
      };
      console.log(payload);
      history.goBack();
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
            <Col xs="12" sm="12" md="6" lg="6" xl="6" className='mb-3'>
              <FormGroup>
                <Label for="contestName">
                  <span>Contest Name</span>
                </Label>
                <CreateableSelect
                  name="contestName"
                  id="contestName"
                  isSearchable
                  isClearable
                  classNamePrefix="select"
                  options={contestDDL}
                  value={contest}
                  onChange={data => setContest(data)}
                  
                />
              </FormGroup>
            </Col>
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
                    <Label for="imageSize">Image Size(MB)</Label>
                    <Input
                      name="imageSize"
                      id="imageSize"
                      value={section.imageSize}
                      onChange={(e) => onChangeEvents(e, section.rowId)}
                      placeholder="Image Size"
                    />
                  </FormGroup>
                  <FormGroup tag={Col} xs={12} sm={6} md={2} lg={2} xl={2}>
                    <Label for="imageLength">Image Length(px)</Label>
                    <Input
                      name="imageLength"
                      id="imageLength"
                      value={section.imageLength}
                      onChange={(e) => onChangeEvents(e, section.rowId)}
                      placeholder="Image Length"
                    />
                  </FormGroup>
                  <FormGroup tag={Col} xs={12} sm={6} md={2} lg={2} xl={2}>
                    <Label for="imageWidth">Image Width(px)</Label>
                    <Input
                      name="imageWidth"
                      id="imageWidth"
                      value={section.imageWidth}
                      onChange={(e) => onChangeEvents(e, section.rowId)}
                      placeholder="Image Width"
                    />
                  </FormGroup>

                  <FormGroup tag={Col} xs={1} className="d-flex gap-1">
                    <button
                      disabled={state.length === 1}
                      className="mt-4 bg-danger text-white"
                      onClick={() => handleDelete(idx)}
                    >
                      <MinusCircle size={16} />
                    </button>
                    {state.length === idx + 1 && (
                      <button
                        type="button"
                        className="mt-4 bg-primary text-white"
                        onClick={() => handleAdd(section, idx)}
                      >
                        <PlusCircle size={16} />
                      </button>
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
          <Button type="cancel" color="danger" outline onClick={() => history.goBack()}>
            Cancel
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ContestSectionForm;
