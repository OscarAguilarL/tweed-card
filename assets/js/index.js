const $likeButton = document.querySelector('#like');
const $likeCount = document.querySelector('#likeCount');

let isLiked = false;

$likeButton.addEventListener('click', () => {
    $likeButton.classList.toggle('is-liked');
    isLiked = !isLiked;

    isLiked
        ? ($likeCount.textContent = parseInt($likeCount.textContent) + 1)
        : ($likeCount.textContent = parseInt($likeCount.textContent) - 1);
});
