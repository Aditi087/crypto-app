import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/DataSlice";
import { Link, useParams } from "react-router-dom";
import './data.css'

export default function Data() {
  const { status, data } = useSelector((state) => state.dataSlice);
  const [data1, setdata1] = useState([]);

  console.log(data1);

  const det = (id) => {
    // console.log(params);
  };

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    setdata1(data?.data);
  }, [data]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div id="data_page">
      <div className="row">
        {status === "loading"
          ? "Loading"
          : data1?.coins?.map((e) => {
              return (
                <div className="col-lg-3">
                  <Link to={`/cat/${e?.uuid}`}>
                    <Card
                      id="card"
                      onClick={() => {
                        det(e?.uuid);
                      }}
                    >
                      <Card.Img id="home_img" src={e.iconUrl} />
                      <Card.Body>
                        <Card.Title  id="Ctitle">{e?.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}
