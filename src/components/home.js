import { useEffect, useState } from "react";

import {
  Spinner,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

function Home() {
  const [userData, setData] = useState([]);
  const fetchingData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);

        setData(data.hits);
      });
  };

  useEffect(() => {
    const apiID = "dd95e753";
    const apiKey = "460370faacc836991a9ad941680bb41d";
    const url = `https://api.edamam.com/search?q=avocado&app_id=${apiID}&app_key=${apiKey}&mealType=lunch`;
    fetchingData(url);
  }, []);

  return (
    <>
      <div className="row">
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
                      {item.recipe.lable.slice(0, 20)}...
                    </CardTitle>

                    <Button>Button</Button>
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
