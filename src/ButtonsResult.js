import React from "react";

export default ({ data, reset, setValue }) => {
  return (
    <>
      {data && (
        <pre style={{ textAlign: "left", color: "black" }}>
          {JSON.stringify(
            {
              ...data, 
              Firstname: '', 
              Lastname: '', 
              Jobtitle: '',
              Age:'', 
              Availability: ''             
                .text
            },
            null,
            2
          )}
        </pre>
      )}

      <button
        className="button buttonBlack"
        type="button"
        onClick={() => {
          reset({
            TextField: "",
            ReactSelect: { value: "available", label: "Available" },
            numberFormat: 123456789,   
          });
        }}
      >
        Reset Form
      </button>
      <button className="button">submit</button>
    </>
  );
};
//export default ButtonsResult;
