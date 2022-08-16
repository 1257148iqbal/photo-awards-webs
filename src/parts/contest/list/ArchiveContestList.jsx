import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Edit, FileText, Trash2 } from "react-feather";
import { Card, DropdownItem } from "reactstrap";
import { v4 as uuid } from 'uuid';

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
  },
  {
    id: uuid(),
    contestName: "AWARD SEASONS 02",
    startDate: "02-02-2020",
    endDate: '02-12-2021',
    isRunning: false,
    contestSections: [
        {id: uuid(), sectionName: "Nature", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
        {id: uuid(), sectionName: "Animal", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
        {id: uuid(), sectionName: "Happiness", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true}
    ]
  },
  {
    id: uuid(),
    contestName: "AWARD SEASONS 03",
    startDate: "02-02-2020",
    endDate: '02-12-2021',
    isRunning: false,
    contestSections: [
        {id: uuid(), sectionName: "Nature", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
        {id: uuid(), sectionName: "Animal", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
        {id: uuid(), sectionName: "Happiness", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true},
        {id: uuid(), sectionName: "Humanity", imageCount: 4, imageLength: "1920px", imageWidth: "1080px", imageSize: '2MB', status: true}
    ]
  },
]
//Columns
const columns = [
  {
    name: "Contest Name",
    selector: "contestName",
    sortable: true
  },
  {
    name: "Start Date",
    selector: "startDate",
    sortable: true
  },
  {
    name: "End Date",
    selector: "endDate",
    sortable: true
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
const ArchiveContestList = () => {
//#region Hooks

//#endregion

//#region State
  const [state] = useState(initialState)
//#endregion

//#region Use Effect
// useEffect(() => {
  
// }, [initialState])

//#endregion

//#region Events

//#endregion

  return (
    <Card>
      <DataTable 
        title="Archive Contest List"
        columns={columns} 
        data={state}
        pagination
        selectableRows
        filterPlaceholder="bana"
      />
    </Card>
  );
};

export default ArchiveContestList;
