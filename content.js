document
  .querySelector("#_srchWMEDcn")
  .addEventListener("keydown", function (event) {
    if (
      event.key === "Enter" &&
      !document.querySelector("#_srchWMEDcn").value == ""
    ) {
      event.preventDefault();
      document.querySelector("#_search > input").click();
      console.log("S");
    }
  });

if (
  document.querySelector("#uiform > table > thead > tr:nth-child(31)").style
    .display != "none"
) {
  location.reload();
}
const targetNode = document.querySelector("body");
const config = { childList: true, subtree: true };
int = 1;
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      if (
        (document.querySelector("#_search > input") &&
          document.querySelector("#_reset > input")) ||
        (document.querySelector("#_search > input") &&
          document.querySelector("#_loginExpirationTime"))
      ) {
        // location.reload();
        console.log("sss");
      }
      if (document.querySelector("#_user") && int == 1) {
        const event = new Event("change", { bubbles: true });
        document.querySelector("#_user").dispatchEvent(event);

        int++;
      }
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
