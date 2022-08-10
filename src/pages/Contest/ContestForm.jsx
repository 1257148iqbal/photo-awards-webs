import React, { useState } from "react";
import { Sidebar } from "react-feather";
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import CreateableSelect from 'react-select/creatable';
import {
  Button, Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import "../../../src/assets/scss/custom-form.scss";


const ContestForm = (props) => {

  const {isOpenSidebar, selectedItem, setIsOpenSidebar} = props;

  const { register, handleSubmit } = useForm();

 const [processType, setProcessType] = useState(null)



  const onSubmit = ()=>{
    
  }
  
  return (
    <Sidebar
    size="lg"
    title="New Production Sub Process"
    headerClassName="mb-1"
    contentClassName="pt-0"
    style={{ transition: '0.5s all ease' }}
    open={isOpenSidebar}
    toggleSidebar={() => setIsOpenSidebar(!isOpenSidebar)}
  >
    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="productionProcess">Production Process</Label>
        <CreateableSelect
          id="productionProcess"
          isSearchable
          isClearable
          // isLoading={loading}
          // theme={selectThemeColors}
          // options={dropDownItems}
          // classNamePrefix="select"
          // value={productionProcess}
          // onChange={onProductionProcessChange}
          // onCreateOption={onCreateProductionProcess}
        />
      </FormGroup>

      <FormGroup>
        <Label for="name">Process Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter process name"
          defaultValue={selectedItem ? selectedItem.name : ''}
          innerRef={register({ required: true })}
        />
      </FormGroup>

      <FormGroup>
        <Label for="shortCode">Short Code</Label>
        <Input
          id="shortCode"
          name="shortCode"
          type="text"
          placeholder="Enter short code"
          defaultValue={selectedItem ? selectedItem.shortCode : ''}
          innerRef={register({ required: true })}
        />
      </FormGroup>

      <FormGroup>
        <Label for="processType">Process Type</Label>
        <Select
          id="processType"
          isSearchable
          isClearable
          options={[]}
          classNamePrefix="select"
          style={{ zIndex: 22 }}
          value={processType}
          onChange={data => setProcessType(data)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="details">
          <span>Description</span>
        </Label>
        <Input
          name="details"
          id="details"
          placeholder="Details"
          defaultValue={selectedItem ? selectedItem.details : ''}
          innerRef={register({ required: false })}
        />
      </FormGroup>

      <FormGroup>
        <Label for="status">
          <Input
            style={{ marginLeft: '5px' }}
            id="status"
            name="status"
            type="checkbox"
            defaultChecked={selectedItem ? selectedItem.status : true}
            innerRef={register({ required: false })}
          />
          <span style={{ marginLeft: '25px' }}> Is Active </span>
        </Label>
      </FormGroup>

      <Button type="submit" className="mr-1" color="primary">
        Submit
      </Button>
    </Form>
  </Sidebar>
  );
};

export default ContestForm;
