import React from "react";
import { ReactMUIDatatable } from "react-material-ui-datatable";
import IconButton from "@material-ui/core/IconButton";
import EventBusyIcon from '@material-ui/icons/EventBusy';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import DeleteIcon from "@material-ui/icons/Delete";
import users from "./stub.json";
import RowsDialog from "./RowsDialog";

const addColoums = (() => ({
  field: {
      render: [
        {firstname: 'firstName', 
        lastName: 'lastName', 
        jobTitle: 'jobTitle', 
        age:'age', 
        availability: 'availability'}
        ]
      },
  }));


const columns = [
  { name: "firstName", label: "First name", id: "firstName" },
  { name: "lastName", label: "Last name", id: "lastName" },
  { name: "jobTitle", label: "Job title", id: "jobTitle" },
  { name: "age", label: "Age", id:"age" },
  { name: "availability", label: "Availability", id:"availability" },
];

const customCell = ({ value, column, row }) => {
  if (column.name === "availability") {
    return value === "Available" ? <EventAvailableIcon /> 
    :  "Not available" ? <EventBusyIcon /> 
    : <NotInterestedIcon />;
  }

  return value;
};

const customToolbarSelectActions = ({
  data,
  selectedData,
  updateSelectedData,
  handleDelete
}) => (
  <React.Fragment>
    <IconButton
      onClick={() => {
        const nextSelectedData = data.reduce((nextSelectedData, row) => {
          if (!selectedData.includes(row)) {
            nextSelectedData.push(row);
          }

          return nextSelectedData;
        }, []);

        updateSelectedData(nextSelectedData);
      }}
    >
      <SwapHorizIcon />
    </IconButton>
    <IconButton
      onClick={() => {
        handleDelete(selectedData);
      }}
    >
      <DeleteIcon />
    </IconButton>
  </React.Fragment>
);

const rows = [
  {firstname: '', lastName: '', jobTitle: '', age:'', availability: ''}
]

const data = [
  {firstname: '', lastName: '', jobTitle: '', age:'', availability: ''}
]

const reset = [
  {firstname: '', lastName: '', jobTitle: '', age:'', availability: ''}
]

const setValue = [
  {firstname: '', lastName: '', jobTitle: '', age:'', availability: ''}
]

const Demo = () => (
  <div className={"App"}> 
    <RowsDialog 
      data={data}
      reset={reset}
      setValue={setValue}
    />
     
    <ReactMUIDatatable
      title={""}                      
      render={({ field }) => <RowsDialog {...field} />}
      addColoums={addColoums}      
      rows={rows}      
      data={users}
      columns={columns}
      customCell={customCell}
      toolbarSelectActions={customToolbarSelectActions}
    />                
  </div>
);

export default Demo;
