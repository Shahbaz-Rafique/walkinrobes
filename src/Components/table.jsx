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

const TablePage = () => {
  const [materials, setMaterials] = useState([
    {
      material: "",
      number: 0,
      notes: "",
    },
  ]);

  const addMaterialField = () => {
    setMaterials((prevMaterials) => [
      ...prevMaterials,
      {
        material: "",
        number: 0,
        notes: "",
      },
    ]);
  };

  const handleMaterialChange = (index, field, value) => {
    const updatedMaterials = [...materials];
    updatedMaterials[index][field] = value;
    setMaterials(updatedMaterials);
  };

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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productionBatchSize, setProductionBatchSize] = useState("");
  const [materialName, setMaterialName] = useState("");
  const [materialPieces, setMaterialPieces] = useState("");
  const [materialAmount, setMaterialAmount] = useState("");

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const addMaterial = () => {
    const newMaterial = {
      name: materialName,
      pieces: materialPieces,
      amount: materialAmount,
    };
    setMaterials([...materials, newMaterial]);
    setMaterialName("");
    setMaterialPieces("");
    setMaterialAmount("");
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
                  <td onClick={toggleShow} style={{ cursor: "pointer" }}>
                    {product.first}
                  </td>
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
      <MDBModal
        animationDirection="right"
        show={basicModal}
        setShow={setBasicModal}
        tabIndex="-1"
      >
        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>MODEL PW15xH24-001</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow className="align-items-center">
                <MDBCol md="12">
                  <label>Name</label>
                  <MDBInput type="text" id="name" name="name" required />
                  <span
                    id="profile-error"
                    style={{ marginTop: "-15px" }}
                  ></span>
                </MDBCol>
                <center>
                  <img
                    src="./Assets/photo.png"
                    alt=""
                    style={{ width: "60%" }}
                  />
                </center>
                <MDBCol md="12">
                  <label>Photo</label>
                  <MDBInput type="file" id="photo" name="photo" required />
                  <span id="name-error" style={{ marginTop: "-15px" }}></span>
                </MDBCol>
                <MDBCol md="12">
                  <label>Notes</label>
                  <MDBInput type="textarea" id="notes" name="notes" required />
                  <span id="notes-error" style={{ marginTop: "-15px" }}></span>
                </MDBCol>
                <h5 style={{ marginTop: "5px" }}>Production</h5>
                <MDBCol md="12">
                  <label>Batch Size</label>
                  <MDBInput
                    type="number"
                    id="batchsize"
                    name="batchsize"
                    required
                  />
                  <span id="notes-error" style={{ marginTop: "-15px" }}></span>
                </MDBCol>
              </MDBRow>

              {materials.map((material, index) => (
                <MDBRow className="align-items-center" key={index}>
                  <MDBCol md="12">
                    <label>Material Used</label>
                    <MDBInput
                      type="text"
                      value={material.material}
                      onChange={(e) =>
                        handleMaterialChange(index, "material", e.target.value)
                      }
                      required
                    />
                  </MDBCol>
                  <MDBCol md="6" style={{ marginTop: "3px" }}>
                    <MDBInput
                      type="number"
                      value={material.number}
                      onChange={(e) =>
                        handleMaterialChange(index, "number", e.target.value)
                      }
                      required
                    />
                  </MDBCol>
                  <MDBCol md="6" style={{ marginTop: "3px" }}>
                    <MDBInput
                      type="textarea"
                      value={material.notes}
                      onChange={(e) =>
                        handleMaterialChange(index, "notes", e.target.value)
                      }
                      required
                    />
                  </MDBCol>
                </MDBRow>
              ))}

              <MDBBtn
                outline
                color="grey"
                style={{ border: "1px solid grey", marginTop: "6px" }}
                onClick={addMaterialField}
              >
                Add Material
              </MDBBtn>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="info">Go to the cart</MDBBtn>
              <MDBBtn outline color="info" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>{" "}
    </>
  );
};

export default TablePage;
