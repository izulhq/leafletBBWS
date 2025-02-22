import React from "react";
import Table from "react-bootstrap/Table";

function StripedRowExample() {
  return (
    <>
      <h1
        align="center"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600",
          fontSize: "1.5rem",
          paddingTop: "10px",
          paddingBottom: "8px",
        }}
      >
        Stasiun Pabelan
      </h1>
      <Table
        striped
        bordered
        size="sm"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "400",
          fontSize: "0.8rem",
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>The Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default StripedRowExample;
