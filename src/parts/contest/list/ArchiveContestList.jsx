import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FileText } from "react-feather";
import { Card } from "reactstrap";
import { v4 as uuid } from "uuid";
import ContestDetails from "../details/ContestDetails";

const initialState = [
  {
    id: uuid(),
    contestName: "AWARD SEASONS 01",
    startDate: "02-02-2022",
    endDate: "02-12-2022",
    isRunning: true,
    contestSections: [
      {
        id: uuid(),
        sectionName: "Nature",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
      {
        id: uuid(),
        sectionName: "Animal",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
      {
        id: uuid(),
        sectionName: "Happiness",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
      {
        id: uuid(),
        sectionName: "Humanity",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
    ],
  },
  {
    id: uuid(),
    contestName: "AWARD SEASONS 02",
    startDate: "02-02-2020",
    endDate: "02-12-2021",
    isRunning: false,
    contestSections: [
      {
        id: uuid(),
        sectionName: "Nature",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
      {
        id: uuid(),
        sectionName: "Animal",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
      {
        id: uuid(),
        sectionName: "Happiness",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
    ],
  },
  {
    id: uuid(),
    contestName: "AWARD SEASONS 03",
    startDate: "02-02-2020",
    endDate: "02-12-2021",
    isRunning: false,
    contestSections: [
      {
        id: uuid(),
        sectionName: "Nature",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
      {
        id: uuid(),
        sectionName: "Animal",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
      {
        id: uuid(),
        sectionName: "Happiness",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
      {
        id: uuid(),
        sectionName: "Humanity",
        imageCount: 4,
        imageLength: "1920px",
        imageWidth: "1080px",
        imageSize: "2MB",
        status: true,
      },
    ],
  },
];
//Columns

const ArchiveContestList = () => {
  //#region Hooks

  //#endregion

  //#region State
  const [state] = useState(initialState);
  const [selectItemsDetails, setSelectItemsDetails] = useState({});
  const [isOpenModalDetails, setIsOpenModalDetails] = useState(false);

  //#endregion

  //#region Use Effect
  // useEffect(() => {

  // }, [initialState])

  //#endregion

  //#region Events
  const toggleModalDetails = (row) => {
    setSelectItemsDetails(row);
    setIsOpenModalDetails(!isOpenModalDetails);
  };
  //#endregion
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
      name: "Actions",
      maxWidth: "100px",
      cell: (row) => (
        <div className="d-flex gap-2">
          <div style={{cursor:'pointer'}}
            className="w-100"
            onClick={() => toggleModalDetails(row)}
          >
            <FileText color="skyBlue" size={18} className="mr-50" />
          </div>
        </div>
      ),
    },
  ];

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

      {isOpenModalDetails && (
        <ContestDetails
          isOpenSidebar={isOpenModalDetails}
          setIsOpenSidebar={setIsOpenModalDetails}
          selectItems={selectItemsDetails}
        />
      )}
    </Card>
  );
};

export default ArchiveContestList;
