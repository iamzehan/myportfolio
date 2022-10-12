import React from "react";
import { useQuery } from "@apollo/client";
import {Spinner, Container} from "react-bootstrap";

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id },
    pollInterval: 1000,
  });

  if (loading) return <Container className="justify-content-center" style={{color: "#fff", height: "20px", width: "20px",padding:"100px 100px 120px 80px"}}><Spinner animation="border" role="status"><span className="visually-hidden"></span></Spinner></Container>;
  if (error) return <p style={{fontSize:"12px" ,color: "#fff",padding:"100px 100px 120px 80px"}}><i style={{color: "red", height: "20px", width: "20px"}} className="bx bx-error"/><br/>Couldn't load data.<br/> Please check your connection <br/> or refresh</p>;
  return children({ data });
};

export default Query;
