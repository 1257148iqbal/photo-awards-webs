import moment from 'moment';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { v4 as uuid } from 'uuid';
import CustomDatePicker from "../../../components/custom/CustomDatePicker";
import Sidebar from "../../../components/custom/Sidebar";

const ContestForm = (props) => {
  const { isOpenSidebar, setIsOpenSidebar } = props;

  const { handleSubmit } = useForm();
const defaultDate = moment(new Date()[0]).format("yyyy-MM-DD");
  //#region  States
  const [startDate, setStartDate] = useState(defaultDate);
  const [endDate, setEndDate] = useState(defaultDate);
  const [contestName, setContestName] = useState('');
  const [isActive, setIsActive] = useState(true);
  //#endregion

  //#region Events
  const onStartDateChange = (dates) => {
    const startDates = moment(dates[0]).format("yyyy-MM-DD");
    setStartDate(startDates);
    setEndDate(startDates);
  };
  
  const onEndDateChange = (dates) => {
    const startDates = moment(dates[0]).format("yyyy-MM-DD");
    setEndDate(startDates);
  };

  const onSubmit = () => {
    const payload={
      id: uuid(), 
      contestName,
      startDate,
      endDate,
      isActive
    }
    console.log(payload);
    setIsOpenSidebar(!isOpenSidebar)
  };
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
      <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className='mt-3'>
          <Label for="contestName">Contest Name</Label>
          <Input
            id="contestName"
            name="contestName"
            type="text"
            placeholder="Enter contest name"
            defaultValue={contestName}
            onChange={e=>setContestName(e.target.value)}
          />
        </FormGroup>

        <FormGroup className='mt-3'>
          <CustomDatePicker
            name="startDate"
            title="Start Date"
            value={startDate}
            onChange={onStartDateChange}
          />
        </FormGroup>

        <FormGroup className='mt-3'>
          <CustomDatePicker
            name="endDate"
            title="End Date"
            minDate={startDate}
            value={endDate}
            onChange={onEndDateChange}
            
          />
        </FormGroup>

        <FormGroup className='mt-3 mb-3'>
          <Label for="status">
            <Input
              style={{ marginLeft: "5px" }}
              id="status"
              name="status"
              type="checkbox"
              defaultChecked={isActive}
              onChange={e=>setIsActive(e.target.checked)}
            />
            <span style={{ marginLeft: "25px" }}> Is Running </span>
          </Label>
        </FormGroup>

        <Button type="submit" className="mr-1" color="primary">
          Submit
        </Button>
        <Button
          type="cancel"
          color="danger"
          outline
          onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        >
          Cancel
        </Button>
      </Form>
    </Sidebar>
  );
};

export default ContestForm;
