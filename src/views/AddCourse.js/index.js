import { addCourse } from "API";
import React from "react";
import { useState } from "react";
const initialData = {
  title: "",
  name: "",
  amount: "",
  description: "",
};
const AddCourse = () => {
  const [formData, setFormData] = useState(initialData);
  const handleChange = (e) => {
    console.log(e.target.value, "<<<< ");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //   const InputLabel = ({ name, label, onChange, value }) => {
  //     return (
  //       <div>
  //         <div>{label}</div>
  //         <div>
  //           <input className="input1" value={value} onChange={onChange} />
  //         </div>
  //       </div>
  //     );
  //   };

  const inputFields = [
    {
      name: "title",
      type: "text",
      label: "Title",
      onChange: handleChange,
      value: formData.title,
    },
    {
      label: "Course Name",
      name: "name",
      onChange: handleChange,
      value: formData.course,
      type: "text",
    },
    {
      name: "amount",
      label: "Amount",
      value: formData.amount,

      type: "number",

      onChange: handleChange,
    },
    // {
    //   name: "description",
    //   label: "Description",
    //   value: formData.description,

    //   type: "textarea",

    //   onChange: handleChange,
    // },
  ];

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData, "<<<< this is formData");
    addCourse(formData, (res) => {
      console.log(res);
      alert(res.message);
      setFormData(initialData);
    });
    // alert("E");
  };
  return (
    <form onSubmit={submitForm}>
      <div className="add-course-form1">
        {inputFields.map((item) => {
          return (
            <div style={{ marginTop: "30px" }}>
              <div>{item.label}</div>
              <div>
                <input
                  className="input1"
                  type={item.type}
                  required
                  // type="textarea"
                  name={item.name}
                  value={item.value}
                  onChange={item.onChange}
                />
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: "30px" }}>
          {/* <div>Choose File</div> */}
          <div>
            <input
              className="input1"
              // width="400px"
              type="file"
              // type="textarea"
              style={
                {
                  // width: "400px",/
                  // minHeight: "100px",
                  // border: "1px solid black",
                  // borderRadius: "5px",
                }
              }
              name="image"
              required
              value={formData.image}
              onChange={(e) => {
                console.log(e.target.files[0], e.target.value);
                setFormData({
                  ...formData,
                  path: e.target.value,
                  file: e.target.files[0],
                });
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <div>Description</div>
          <div>
            <textarea
              className="input1"
              // width="400px"
              // type="textarea"
              style={{
                width: "100%",
                minHeight: "100px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ width: "200px", margin: "auto" }}>
          <button type="submit" className="add-course">
            Add Course
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddCourse;
