import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../../redux/searchSlice";
import "./search.css";
import { useNavigate } from "react-router-dom";
import {
  Divider,
  IconButton,
  InputBase,
  inputClasses,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  // let { id } = useParams();

  const { status, data } = useSelector((state) => state.searchSlice);
  const [input, setInput] = useState();
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  // console.log("8j", input);

  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(fetchSearch());
  }, []);

  useEffect(() => {
    setInput(data?.data?.coins);
  }, [data]);

  console.log(
    "8j",
    input?.map((e) => {
      return e;
    })
  );
  const search = () => {
    let find = input?.find((e) => e.name === value);

    history(`/cat/${find?.uuid}`);
  };

  return (
    <div id="search">
      {console.log(value, inputValue)}

      <Stack spacing={2} sx={{ width: 300 }}>
        <div id="flex">
          <div id="search_textfield">
            <Autocomplete
              value={value}
              inputValue={inputValue}
              onChange={(event, newValue) => {
                console.log(event, "kk");
                setValue(newValue);
              }}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={input?.map((option) => option?.name)}
              renderInput={(params) => (
                <TextField 
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </div>
          <div>
            <IconButton
              sx={{ p: "10px" }}
              aria-label="search"
              // onChange={}
              onClick={() => {
                search(input?.uuid);
              }}
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
      </Stack>
      {/* / <Select options={input?.map((option) => option?.name)} />  */}
      {/* / <TextField id="filled-basic" label="Filled" variant="filled" />  */}
    </div>
  );
}
