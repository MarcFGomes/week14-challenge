// TODO: implement create/delete project fetch calls for the profile page.
async function newFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#project-name").value;
  const description = document.querySelector("#project-desc").value;
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
    const data = await response.json().catch(() => ({}));
    console.log("Server error:", data);
    alert(data.message || JSON.stringify(data));
  }
}

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);


  // Delete project
async function delButtonHandler(event) {
  const btn = event.target.closest(".delete-project");
  if (!btn) return;

  const id = btn.dataset.id;

  const response = await fetch(`/api/projects/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.reload(); // refresh profile list
  } else {
    const data = await response.json().catch(() => ({}));
    console.log("Delete error:", data);
    alert(data.message || "Failed to delete project");
  }
}

// Listen for delete clicks (event delegation)
document
  .querySelector(".list-group")
  ?.addEventListener("click", delButtonHandler);
