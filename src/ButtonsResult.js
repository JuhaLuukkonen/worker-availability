import React from "react";
import { convertToRaw, EditorState } from "draft-js";

export default ({ data, reset, setValue }) => {
  return (
    <>
      {data && (
        <pre style={{ textAlign: "left", color: "white" }}>
          {JSON.stringify(
            {
              ...data,
              firstname: '', 
              lastName: '', 
              jobTitle: '', 
              age:'', 
              availability: ''              
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
               
          });
        }}
      >
        Reset Form
      </button>
      <button className="button">submit</button>
    </>
  );
};
