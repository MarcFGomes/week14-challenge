// TODO: implement create/delete project fetch calls for the profile page.
async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#project-name").value;
  const description = document.querySelector("#project-description").value;
  const needed_funding = document.querySelector("#project-funding").value;

  if (!name || !description || !needed_funding) {
    alert("Please fill out all fields.");
    return;
  }

  const response = await fetch(`/api/projects`, {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      needed_funding,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add project");
  }
}

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);
