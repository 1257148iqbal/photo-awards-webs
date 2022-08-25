import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { Edit, FileText, PlusSquare, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button, Card, CardHeader, CardTitle } from "reactstrap";
import "../../../../src/assets/scss/custom-form.scss";
import ContestSectionDetails from "../details/ContestSectionDetails";
import { deleteContestSection, fetchContestSection, fetchContestSectionDetailsByID } from "../store/actions";


const ActiveContesSectiontList = () => {
//#region Hooks
const history = useHistory();
const dispatch = useDispatch();
const {items, isOpenModal, selectItemsDetails} = useSelector(({contestSectionReducer})=> contestSectionReducer);
//#endregion

//#region State
//#endregion

//#region Use Effect
useEffect(() => {
  dispatch(fetchContestSection)
}, [dispatch])

//#endregion

//#region Events
const onNewPage=()=>{
  history.push('/contest-section-page');
}


const columns = [
  {
    name: "Contest Name",
    selector: row => row.contestName
  },
  {
    name: 'Actions',
    maxWidth: '100px',
    cell: row => (
      <div className="d-flex gap-2">
          <div style={{cursor: 'pointer'}} className="w-100"  onClick={()=> dispatch(fetchContestSectionDetailsByID(row))}>
            <FileText color="skyBlue" size={20} className="mr-50"  />            
          </div>
          <div style={{cursor: 'pointer'}} className="w-100"  onClick={() => {}} >
            <Edit color="green" size={20} className="mr-50" />
          </div>
          <div style={{cursor: 'pointer'}} className="w-100" onClick={()=> dispatch(deleteContestSection(row.id))}>
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
        data={items}
      />
    </Card>
    
    {isOpenModal && selectItemsDetails && <ContestSectionDetails isOpenModal={isOpenModal}  selectItems={selectItemsDetails} />}
    </div>
  );
};

export default ActiveContesSectiontList;
