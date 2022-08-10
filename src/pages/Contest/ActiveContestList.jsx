import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Edit, FileText, PlusSquare, Trash2 } from "react-feather";
import { Button, Card, CardHeader, CardTitle, DropdownItem } from "reactstrap";
import { v4 as uuid } from 'uuid';
import "../../../src/assets/scss/custom-form.scss";
import ContestForm from "./ContestForm";

const initialState=[
  {
    id: uuid(),
    contestName: "AWARD SEASONS 01",
    startDate: "02-02-2022",
    endDate: '02-12-2022',
    isRunning: true,
    contestSections: [
        {id: uuid(), sectionName: "Nature", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
        {id: uuid(), sectionName: "Animal", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
        {id: uuid(), sectionName: "Happiness", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
        {id: uuid(), sectionName: "Humanity", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true}
    ]
  }
]
//Columns
const columns = [
  {
    name: "Contest Name",
    selector: "contestName"
  },
  {
    name: "Start Date",
    selector: "startDate"
  },
  {
    name: "End Date",
    selector: "endDate"
  },
  {
    name: 'Actions',
    maxWidth: '100px',
    cell: row => (
      <div className="d-flex gap-2">
          <DropdownItem className="w-100">
            <FileText color="skyBlue" size={18} className="mr-50" />            
          </DropdownItem>
          <DropdownItem className="w-100" >
            <Edit color="green" size={18} className="mr-50" />
          </DropdownItem>
          <DropdownItem className="w-100" onClick={() => {}}>
            <Trash2 color="red" size={18} className="mr-50" />
          </DropdownItem>
      </div>
    )
  }
]; 
const ActiveContestList = () => {
//#region Hooks

//#endregion

//#region State
  const [state] = useState(initialState);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
//#endregion

//#region Use Effect
// useEffect(() => {
  
// }, [initialState])

//#endregion

//#region Events
const toggleSidebar=()=>{
  setIsOpenSidebar(!isOpenSidebar)
}
//#endregion

  return (
    <div>
      <Card>
      <CardHeader className="d-flex justify-content-between">
          <CardTitle tag="h4">Acitve Contest List</CardTitle>

          <Button onClick={toggleSidebar}>
              <PlusSquare size={24} />
          </Button>
      </CardHeader>
      
      <DataTable 
        columns={columns} 
        data={state}
      />
    </Card>
    {isOpenSidebar && <ContestForm isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />}
    </div>
  );
};

export default ActiveContestList;
