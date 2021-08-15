document.getElementById("delete-btn").addEventListener("click", function () {
  document.getElementById("secret-info").style.display = "none";
});
//focus
document
  .getElementById("delete-confirm")
  .addEventListener("focus", function () {
    document.body.style.backgroundColor = "lightblue";
  });
//blur
document.getElementById("delete-confirm").addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});

//keyup
document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    const deleteBtn = document.getElementById("delete-btn");
    if (event.target.value == "delete" || event.target.value == "Delete") {
      deleteBtn.removeAttribute("disabled");
    } else {
      deleteBtn.setAttribute("disabled", true);
    }
  });
//change
document
  .getElementById("delete-confirm")
  .addEventListener("change", function () {
    const deleteField = document.getElementById("delete-confirm");
    console.log(deleteField.value);
  });

/* function toggleDeleteButton (event){
            const deleteBtn = document.getElementById('delete-btn');
            if (event.target.value == 'delete') {
                deleteBtn.removeAttribute('disabled');
            }
            else {
                deleteBtn.setAttribute('disabled', true);
            }
        }
        document.getElementById('delete-confirm').addEventListener('keyup', toggleDeleteButton);
        addEventListener('change', toggleDeleteButton);
         */
