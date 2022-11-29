export const CHECK_AUTH = "IS_USER_LOGGED_IN_DASHBOARD";
export const USER_TYPE = "SCALER_DASHBOARD";
export const USER_DATA = "SCALER_USER_DATA_DASHBOARD";
export const base_url = "https://scaler-back.herokuapp.com";
// export const base_url = "http://localhost:5000";
export const getStore = (name) => JSON.parse(localStorage.getItem(name));

export const allUsers = (callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(base_url + "/user", requestOptions)
    .then((response) => response.text())
    .then((result) => callBack(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};

export const getAllCourse = (callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(base_url + "/course", requestOptions)
    .then((response) => response.text())
    .then((result) => callBack(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};

export const addCourse = (payload, callBack) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxha2hlcmFha3NoYXlAZ21haWwuY29tIiwidXNlcklkIjoiNjM4MDUxNjE4YjJkNzA0MDk4ZTU2MjQ3IiwiaWF0IjoxNjY5MzUzOTkwfQ.sJhnrJ0WqFMJhW06qusQ8WIisLDsnM0_eeF4FIyKbmE"
  );

  var formdata = new FormData();
  formdata.append("courseName", payload.name);
  formdata.append("courseTitle", payload.title);
  formdata.append("courseDescription", payload.description);
  formdata.append("Image", payload.file, payload.path);
  formdata.append("courseAmount", payload.amount);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(base_url + "/course/", requestOptions)
    .then((response) => response.text())
    .then((result) => callBack(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};

export const Login = (payload, callBack) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: payload.email,
    password: payload.password,
    userType: payload.userType,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(base_url + "/user/login", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export const getAllOrders = (callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(base_url + "/payment/orders", requestOptions)
    .then((response) => response.text())
    .then((result) => callBack(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};
export const getOrdersById = (id, callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(base_url + "/payment/orders-user?userId=" + id, requestOptions)
    .then((response) => response.text())
    .then((result) => callBack(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};
