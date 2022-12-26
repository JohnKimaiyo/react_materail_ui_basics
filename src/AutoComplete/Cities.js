import Autocomplete from "@mui/material/Autocomplete";

const cities = ["Tokyo", "london", "juba", "juja"];

export default function Cities() {
  return (
    <label>
      value:{""}
      <Autocomplete
        sx={{
          width: 200,
        }}
        id="custom-input-demo"
        options={cities}
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <input type="text" {...params.inputProps} />
          </div>
        )}
      />
    </label>
  );
}
