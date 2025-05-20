document
  .querySelector("#_srchWMEDcn")
  .addEventListener("keydown", function (event) {
    if (
      event.key === "Enter" &&
      !document.querySelector("#_srchWMEDcn").value == ""
    ) {
      event.preventDefault();
      // document.querySelector("#_search > input").click();
      searchForUser();
      console.log("S");
    }
  });
