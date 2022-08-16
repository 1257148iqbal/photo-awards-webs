import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Edit, FileText, PlusSquare, Trash2 } from "react-feather";
import { useHistory } from "react-router";
import { Button, Card, CardHeader, CardTitle } from "reactstrap";
import { v4 as uuid } from 'uuid';
import "../../../../src/assets/scss/custom-form.scss";
import ContestSectionDetails from "../details/ContestSectionDetails";
import ContestSectionForm from "../form/ContestSectionForm";

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

const ActiveContesSectiontList = () => {
//#region Hooks
const history = useHistory();
//#endregion

//#region State
  const [state] = useState(initialState);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenModalDetails, setIsOpenModalDetails] = useState(false);
  const [selectItems, setSelectItems] = useState([]);
//#endregion

//#region Use Effect
// useEffect(() => {
  
// }, [initialState])

//#endregion

//#region Events
const onNewPage=()=>{
  history.push('/contest-section-page');
}
const toggleModalDetails=(row)=>{
  setSelectItems(row)
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
          <div className="w-100 cursor-pointer"  onClick={()=> toggleModalDetails(row)}>
            <FileText color="skyBlue" size={20} className="mr-50"  />            
          </div>
          <div className="w-100 cursor-pointer"  onClick={() => {}} >
            <Edit color="green" size={20} className="mr-50" />
          </div>
          <div className="w-100 cursor-pointer" onClick={() => {}}>
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
          <CardTitle tag="h4">Contest Section List</CardTitle>
          <Button onClick={onNewPage}>
              <PlusSquare size={24} />
          </Button>
      </CardHeader>
      
      <DataTable 
        columns={columns} 
        data={state}
      />
    </Card>
    {isOpenSidebar && <ContestSectionForm isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />}
    {isOpenModalDetails && <ContestSectionDetails isOpenSidebar={isOpenModalDetails} setIsOpenSidebar={setIsOpenModalDetails} selectItems={selectItems} />}
    </div>
  );
};

export default ActiveContesSectiontList;
