// Сделать форму, с помощью которого пользователь отправит id поста, чьи комментарии нужно отрисовывать на странице в виде списка.

const form = document.querySelector('#form-id');
const postInput = document.querySelector('#postId');
const list = document.querySelector('#comment-list');

const comments = [];

function newComment(getCommentsFromPostId){
    comments.push({comment: comment});
}

async function getCommentsFromPostId(postInput){;
const commetnResponse = await fetch(`https://jsonplaceholder.typicode.com/comments/${postInput}`);
const comment = await commetnResponse.json();
let li = document.createElement('li');
li.innerText = `${comment.body}`;
list.append(li);



}
getCommentsFromPostId(1);

