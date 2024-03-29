import React from "react";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { fetchUserConnectionsAction } from "../actions";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";


const { REACT_APP_USER_ID } = process.env

const Activity = () => {
  const dispatch = useAppDispatch();
  const userConnections = useAppSelector((state) => state.userConnections.results);

  useEffect(() => {
    if (REACT_APP_USER_ID) {
      dispatch(fetchUserConnectionsAction(REACT_APP_USER_ID));
      setInterval(() => {
        dispatch(fetchUserConnectionsAction(REACT_APP_USER_ID));
      }, 2000)
    }
  }, [dispatch]);

  return (
    <Container className="mb-1">
      <Row>
        <Col className="mt-2 sub-sections" style={{ paddingInline: "0" }}>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ paddingInline: "15px" }}
          >
            <div>
              <h4 className="name pt-4 mb-n1 px-2">Activity</h4>
              <p className="connections mt-2 mb-1 px-2 ">
                <a href="#home" className="link-connections">
                  {userConnections.length} Followers
                </a>
              </p>
            </div>
            <Button variant="outline-primary" className="rounded-pill post">
              Start a post
            </Button>
          </div>
          <h6 style={{ fontWeight: "600", paddingInline: "23px" }}>
            You haven't posted lately
          </h6>
          <p className="about" style={{ paddingInline: "23px" }}>
            Recent posts you share or comment on will be displayed here
          </p>
          <ListGroup>
            <ListGroup.Item className="activity-item">
              <div className="text-center">
                <a href="#home">
                  Show all activity
                  <ArrowRight className="ml-2" />
                </a>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Activity;
