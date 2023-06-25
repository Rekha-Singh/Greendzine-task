import React, { useEffect, useState } from "react";
import Cards from "../../components/cards";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);
  console.log(users, "usersusers");
  return (
    <Container className="pt-5">
      <Row>
        {users?.map((item, index) => {
          return (
            <Col md={4} sm={6} className="pb-3">
              <Cards
                id={item?.id}
                imgUrl={item?.avatar}
                userName={item?.first_name + " " + item?.last_name}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
