const postBtn = document.getElementById('postBtn');
postBtn.addEventListener('click', () => {
    const commentBox = document.getElementById('commentBox');

    const newCommentAdd = document.createElement('p');
    newCommentAdd.innerText = commentBox.value;

    const newSection = document.getElementById('newSection')
    newSection.appendChild(newCommentAdd);
    commentBox.value = '';
})