import { useEffect, useState } from "react";

import {
  Spinner,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Input,
} from "reactstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Home() {
  const [userData, setData] = useState([]);
  const [searchText, setSearchText] = useState("avocado");
  const [mealType, setMealType] = useState("breakfast");

  const [startSearching, setStarSearching] = useState(false);
  const fetchingData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);

        setData(data.hits);
      });
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSerch = () => {
    setStarSearching(!startSearching);
  };

  const handleChangeMealType = (event) => {
    setMealType(event.target.value);
  };

  useEffect(() => {
    const apiID = "dd95e753";
    const apiKey = "460370faacc836991a9ad941680bb41d";
    const url = `https://api.edamam.com/search?q=${searchText}&app_id=${apiID}&app_key=${apiKey}&mealType=${mealType}`;
    fetchingData(url);
  }, [startSearching]);

  return (
    <>
      <div className="row mt-5">
        <div className="col-12 col-sm-5">
          <div className="d-flex">
            <Input onChange={handleChange} value={searchText} />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Meal Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={mealType}
                  label="mealType"
                  onChange={handleChangeMealType}
                >
                  <MenuItem value='breakfast'>Breakfast</MenuItem>
                  <MenuItem value='lunch'>Lunch</MenuItem>
                  <MenuItem value='dinner'>Dinner</MenuItem>
                  <MenuItem value='snack'>Snack</MenuItem>

                </Select>
              </FormControl>
            </Box>

            <Button color="primary" onClick={handleSerch}>
              Search
            </Button>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        {userData.length ? (
          userData.map((item) => {
            return (
              <div className="col-12 col-sm-3 mb-2">
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src={item.recipe.image}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      {item.recipe.label.slice(0, 20)}...
                    </CardTitle>

                    <Button>More...</Button>
                  </CardBody>
                </Card>
              </div>
            );
          })
        ) : (
          <Spinner>Loading...</Spinner>
        )}
      </div>
    </>
  );
}

export default Home;
