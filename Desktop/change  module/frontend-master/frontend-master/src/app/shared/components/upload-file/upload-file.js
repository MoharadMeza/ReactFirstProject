import React from "react";
import { Button, CircularProgress } from "@material-ui/core";

export function UploadFile({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  isMultiple,
  loading,
  ...props
}) {
  return (
    <>
      <input
        id="input-file"
        hidden
        type="file"
        multiple={isMultiple}
        {...props}
      />
      <label htmlFor="input-file">
        <Button
          component="span"
          color="secondary"
          variant="contained"
          disabled={loading}
        >
          Upload File
          {loading && (
            <CircularProgress className="ml-3" size={20} color="secondary" />
          )}
        </Button>
      </label>
    </>
  );
}
