import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// function App() {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       age: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().min(3, "Minimum three characters required!"),
//       email: Yup.string()
//         .required("This field is required")
//         .email("Email is invalid"),
//       age: Yup.number()
//         .required("Age is required")
//         .min(18, "Must be at least 18 years old"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form data:", values);
//     },
//   });

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h2>Simple Form with Formik</h2>
//       <form onSubmit={formik.handleSubmit}>
//         {/* Name Field */}
//         <div style={{ marginBottom: "10px" }}>
//           <label>Name</label>
//           <br />
//           <input
//             type="text"
//             name="name"
//             style={{ width: "25%", padding: "8px", margin: "5px 0" }}
//             {...formik.getFieldProps("name")}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div style={{ color: "red" }}>{formik.errors.name}</div>
//           ) : null}
//         </div>

//         {/* Email Field */}
//         <div style={{ marginBottom: "10px" }}>
//           <label>Email</label>
//           <br />
//           <input
//             type="email"
//             name="email"
//             style={{ width: "25%", padding: "8px", margin: "5px 0" }}
//             {...formik.getFieldProps("email")}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div style={{ color: "red" }}>{formik.errors.email}</div>
//           ) : null}
//         </div>

//         {/* Age Field */}
//         <div style={{ marginBottom: "10px" }}>
//           <label>Age</label>
//           <br />
//           <input
//             type="text"
//             name="age"
//             style={{ width: "25%", padding: "8px", margin: "5px 0" }}
//             {...formik.getFieldProps("age")}
//           />
//           {formik.touched.age && formik.errors.age ? (
//             <div style={{ color: "red" }}>{formik.errors.age}</div>
//           ) : null}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#007BFF",
//             color: "white",
//             border: "none",
//             padding: "10px 15px",
//             cursor: "pointer",
//             borderRadius: "5px",
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }


function App(){
  const [form,setForm] = useState({name:'',email:''})
  const [error,setError] = useState({name:'',email:''})
  
function validation (e){

if(e.target.name == 'name'){
  setForm((formPrevData)=>({...formPrevData,name:e.target.value}))
}
if(e.target.name == 'email'){
  setForm((formPrevData)=>({...formPrevData,email:e.target.value}))
}
console.log("sanjai",form);
}
return <div>
<input type="text" name="name" value={form.name} onChange={(e)=>validation(e)} />
<input type="text" name="email" value={form.email} onChange={(e)=>validation(e)} />
</div>

}

  



export default App;
