import React, { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import ButtonsResult from "./ButtonsResult";
import TextField from '@material-ui/core/TextField';


import "./RowsStyles.css";

const RowsDialog = () => {
  const defaultValues = {
    numberFormat: 123456789,
  };

  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);

  return (
    <form onSubmit={handleSubmit((data) => setData(data))} className="form">

      <label>First name</label>
      <Controller
        render={({ field }) => <Input {...field} />}
        name="firstName"
        control={control}
        defaultValue=""
        addColoums={({ field }) => <RowsDialog {...field} />}
        className="materialUIInput"
      />
      <label>Last name</label>
      <Controller
        render={({ field }) => <Input {...field} />}
        name="lastName"
        control={control}
        defaultValue=""
        addColoums={({ field }) => <RowsDialog {...field} />}
        className="materialUIInput"
      />
      <label>Job title</label>
      <Controller
        render={({ field }) => <Input {...field} />}
        name="jobTitle"
        control={control}
        defaultValue=""
        addColoums={({ field }) => <RowsDialog {...field} />}
        className="materialUIInput"
      />
      <label>Age</label>
      <TextField
        render={({ field }) => <Input {...field} />}
        name="age"
        id="standard-number"
        control={control}
        defaultValues={defaultValues}
        addColoums={({ field }) => <RowsDialog {...field} />}
        className="materialUIInput"
        type="number"
        InputLabelProps={{
            shrink: true,
        }}
      />
      <label>Availability</label>
      <Controller
        name="availability"
        addColoums={({ field }) => <RowsDialog {...field} />}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "available", label: "Available" },
              { value: "notAvailable", label: "Not available" },
              { value: "unknown", label: "Unknown" }
            ]}
          />
        )}
        control={control}
        defaultValue=""
        className="materialUIInput"
      />
      <ButtonsResult {...{ data, reset, setValue }} />        
    </form>
  );
};

export default RowsDialog;
               