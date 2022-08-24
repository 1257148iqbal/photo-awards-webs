import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Edit, FileText, PlusSquare, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardHeader, CardTitle } from "reactstrap";
import "../../../../src/assets/scss/custom-form.scss";
import ContestDetails from "../details/ContestDetails";
import ContestForm from "../form/ContestForm";
import { deleteContest, fetchActiveContest, fetchContestByID, toggleContestModal } from "../store/actions";

const ActiveContestList = () => {
//#region Hooks
const dispatch = useDispatch();
const {items, isOpenModal, selectItemEdit} = useSelector(({contestReducer}) => contestReducer);
//#endregion

//#region State
  const [isOpenModalDetails, setIsOpenModalDetails] = useState(false);
  const [selectItemsDetails, setSelectItemsDetails] = useState({});
//#endregion

//#region Use Effect
useEffect(() => {
  dispatch(fetchActiveContest())
}, [dispatch])

//#endregion

//#region Events

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
          <div style={{cursor:'pointer'}} className="w-100 cursor-pointer"  onClick={() => dispatch(fetchContestByID(row))} >
            <Edit color="green" size={20} className="mr-50" />
          </div>
          <div style={{cursor:'pointer'}} className="w-100 cursor-pointer" onClick={() => dispatch(deleteContest(row.id))}>
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
          <Button onClick={()=>dispatch(toggleContestModal(!isOpenModal))}>
              <PlusSquare size={24} />
          </Button>
      </CardHeader>
      
      <DataTable 
        columns={columns} 
        data={items}
      />
    </Card>
    {isOpenModal && <ContestForm selectItems={selectItemEdit} />}
    {isOpenModalDetails && <ContestDetails isOpenSidebar={isOpenModalDetails} setIsOpenSidebar={setIsOpenModalDetails} selectItems={selectItemsDetails} />}
    </div>
  );
};

export default ActiveContestList;
