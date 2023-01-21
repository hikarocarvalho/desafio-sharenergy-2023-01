const Empty = (event) => {
  if (event.target.value === "") {
    event.target.style.borderColor = "red";
  } else {
    event.target.style.borderColor = "green";
  }
};

export default Empty;
