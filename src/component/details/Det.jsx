import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navv from "../../navbar/Nav";
import { fetchDetails } from "../../redux/detSlice";
import "./det.css";

export default function Det() {
  let { id } = useParams();
  //   console.log(id);

  const { status, data } = useSelector((state) => state.detSlice);
  const [Det, setDet] = useState([]);
  console.log(Det?.name);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  useEffect(() => {
    setDet(data?.data?.coin);
  }, [data]);

  return (
    <>
      <Navv />
      <div id="det_body">
        <div id="det_card_div">
          {status === "idle" ? (
            <>
              <div>
                <Card className="det_card">
                  <Card.Img id="det_img" src={Det?.iconUrl} />
                  <Card.Body></Card.Body>
                </Card>
              </div>
              <div>
                <Card className="det_card">
                  <Card.Body>
                    <Card.Title id="Ctitle">
                      Crypto Name: {Det?.name}
                    </Card.Title>
                    <Card.Text>Price: $ {Det?.allTimeHigh?.price}</Card.Text>
                    <Card.Text>btcPrice: $ {Det?.btcPrice}</Card.Text>
                    <Card.Text>rank: {Det?.rank}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          ) : (
            "Loading"
          )}
        </div>
      </div>
    </>
  );
}
