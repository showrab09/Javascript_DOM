// 1. add button event handler
document
  .getElementById("submit-comment")
  .addEventListener("click", function () {
    // 2. get user comment
    const commentBox = document.getElementById("new-comment");
    // const userComment = commentBox.value;

    // 3. create comment paragraph
    const newComment = document.createElement("li");
    newComment.innerText = commentBox.value;

    // 4. append the comment
    const commentContainer = document.getElementById("comment-container");
    commentContainer.appendChild(newComment);

    // 5. clean the comment box
    commentBox.value = "";
  });
