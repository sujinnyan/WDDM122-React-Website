// import React, {useState} from "react";
// import { Form, Alert, InputGroup, Button, ButtonGroup } from "react";
// import ProductDataService from "../Services/Sell.services"

// const AddProduct = () => {
//     const [title, setTitle] = useState("");
//     const [brand, setBrand] = useState("");
//     const [status, setStatus] = useState("Available");
//     const [flag, setFlag] = useState(true);
//     const [message, setMessage] = useState({error: false, msg: "" });

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         setMessage("");
//         if(title === "" || brand === "") {
//             setMessage ({error:true, msg : "All fields are mandatory!"});
//             return;
//         }
//         const newProduct = {
//             title,
//             brand,
//             status,
//         };
//         console.log(newProduct);

//         try {
//             await ProductDataService.addProduct(newProduct);
//             setMessage ({error: false, msg :  "New Product added successfully!"});
//         } catch (err) {
//             setMessage({error: true, msg: err.message});
//         }
//         setTitle("");
//         setProduct("");
//     };
//     return (
//         <>
//         <div className="p-4 box">
//         <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formProductTitle">
//           <InputGroup>
//         <InputGroup.Text id="formProductTitle">P</InputGroup.Text>
//         <Form.Control type="text" placeholder="Product Title" value={title} onChange={ (e) => setTitle(e.target.value)}
//         />
//         </InputGroup>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formProductBrand">
//           <InputGroup>
//         <InputGroup.Text id="formProductBrand">B</InputGroup.Text>
//         <Form.Control type="text" placeholder="Product Brand" value={brand} onChange={ (e) => setBrand(e.target.value)}/>
//         </InputGroup>
//         </Form.Group>
//         <ButtonGroup aria-label="Basic example" className="mb-3">
//             <Button disabled={flag} variant="success" onClick={(e) => {
//                 setStatus("Available");
//                 setFlag(true);
//             }}
//             >
//                 Available
//             </Button>

//                <Button disabled={!flag} variant="danger" onClick={(e) => {
//                 setStatus("Not Available");
//                 setFlag(false);
//             }}
//             >
//                 Not Available
//             </Button>
            
//         </ButtonGroup>

//         <div className="d-grid gap-2">
//         <Button variant="primary" type="Submit">
//             Add/ Update
//         </Button>
//         </div>
//     </Form>

//         </div>
//         </>
//     );
// };

// export default AddProduct;