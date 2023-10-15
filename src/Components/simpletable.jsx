import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

const SimpleTable = () => {
  const data_panel = {
    columns: [
      {
        label: "Name",
        field: "first",
        sort: "asc",
      },
      {
        label: "",
        field: "image",
        sort: "asc",
      },
      {
        label: "Stock Level",
        field: "stock",
        sort: "asc",
      },
      {
        label: "Min Level",
        field: "min",
        sort: "asc",
      },
      {
        label: "Unit Cost",
        field: "cost",
        sort: "asc",
      },
      {
        label: "SKU",
        field: "sku",
        sort: "asc",
      },
      {
        label: "Category",
        field: "category",
        sort: "asc",
      },
      {
        label: "Notes",
        field: "notes",
        sort: "asc",
      },
    ],
    rows: [
      {
        first: "Check Measuerment..",
        image: <img src="./Assets/photo.png" style={{ width: "40px" }}></img>,
        stock: "0 Pieces",
        min: "-",
        cost: "$48/Pieces",
        sku: "SDHDYST3432",
        category: "",
        notes: "",
      },
      {
        first: "Glassdoorx2 (Framed W10h)",
        image: <img src="./Assets/photo.png" style={{ width: "40px" }}></img>,
        stock: "0 Pieces",
        min: "-",
        cost: "$48/Pieces",
        sku: "SDHDYST3432",
        category: "",
        notes: "",
      },
      {
        first: "Glassdoorx2 (Framed W10h)",
        image: <img src="./Assets/photo.png" style={{ width: "40px" }}></img>,
        stock: "0 Pieces",
        min: "-",
        cost: "$48/Pieces",
        sku: "SDHDYST3432",
        category: "",
        notes: "",
      },
      {
        first: "Glassdoorx2 (Framed W10h)",
        image: <img src="./Assets/photo.png" style={{ width: "40px" }}></img>,
        stock: "1 Pieces",
        min: "-",
        cost: "$48/Pieces",
        sku: "SDHDYST3432",
        category: "",
        notes: "",
      },
      {
        first: "Glassdoorx2 (Framed W10h)",
        image: <img src="./Assets/photo.png" style={{ width: "40px" }}></img>,
        stock: "1 Pieces",
        min: "-",
        cost: "$48/Pieces",
        sku: "SDHDYST3432",
        category: "",
        notes: "",
      },
    ],
  };

  return (
    <>
      <MDBCard
        narrow
        style={{ boxShadow: "none", marginTop: "20px", margin: "20px" }}
      >
        <MDBCardBody cascade>
          <MDBTable btn fixed>
            <MDBTableHead columns={data_panel.columns} />
            <MDBTableBody>
              {data_panel.rows.map((product, index) => (
                <tr key={index}>
                  <td style={{ cursor: "pointer" }}>{product.first}</td>
                  <td>{product.image}</td>
                  <td>{product.stock}</td>
                  <td>{product.min}</td>
                  <td>{product.cost}</td>
                  <td>{product.sku}</td>
                  <td>{product.category}</td>
                  <td>{product.notes}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default SimpleTable;
