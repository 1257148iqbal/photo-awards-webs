import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Edit, FileText, PlusSquare, Trash2 } from "react-feather";
import { Button, Card, CardHeader, CardTitle } from "reactstrap";
import { v4 as uuid } from 'uuid';
import "../../../../src/assets/scss/custom-form.scss";
import ContestDetails from "../details/ContestDetails";
import ContestForm from "../form/ContestForm";

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

const ActiveContestList = () => {
//#region Hooks

//#endregion

//#region State
  const [state] = useState(initialState);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenModalDetails, setIsOpenModalDetails] = useState(false);
  const [selectItemsDetails, setSelectItemsDetails] = useState({});
  const [selectItemEdit, setSelectItemsEdit] = useState({});
//#endregion

//#region Use Effect
// useEffect(() => {
  
// }, [initialState])

//#endregion

//#region Events
const toggleSidebar=()=>{
  setIsOpenSidebar(!isOpenSidebar)
}

const toggleEdit=(row)=>{
  setIsOpenSidebar(!isOpenSidebar);
  setSelectItemsEdit(row)
}

const toggleModalDetails=(row)=>{
  setSelectItemsDetails(row)
  setIsOpenModalDetails(!isOpenModalDetails);
}

const columns = [
  {
    name: "Contest Name",
    selector: row => row.contestName
  },
  {
    name: "Start Date",
    selector: row => row.startDate
  },
  {
    name: "End Date",
    selector: row => row.endDate
  },
  {
    name: 'Actions',
    maxWidth: '100px',
    cell: row => (
      <div className="d-flex gap-2">
          <div style={{cursor:'pointer'}} className="w-100"  onClick={()=> toggleModalDetails(row)}>
            <FileText color="skyBlue" size={20} className="mr-50"  />            
          </div>
          <div style={{cursor:'pointer'}} className="w-100 cursor-pointer"  onClick={() => toggleEdit(row)} >
            <Edit color="green" size={20} className="mr-50" />
          </div>
          <div style={{cursor:'pointer'}} className="w-100 cursor-pointer" onClick={() => {}}>
            <Trash2 color="red" size={20} className="mr-50" />
          </div>
      </div>
    )
  }
]; 
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
    {isOpenSidebar && <ContestForm isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} selectItems={selectItemEdit} />}
    {isOpenModalDetails && <ContestDetails isOpenSidebar={isOpenModalDetails} setIsOpenSidebar={setIsOpenModalDetails} selectItems={selectItemsDetails} />}
    </div>
  );
};

export default ActiveContestList;
