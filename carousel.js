const thumbnailEventListener = (event) => {
    const mainImage = document.querySelector('.main-image');

    // update the main image only if its src isn't the same as the thumbnail
    // that was clicked
    if (mainImage.src !== event.target.src) {
        mainImage.src = event.target.src;
        mainImage.alt = event.target.alt;
        console.log('Main image updated!');
    }
}

(() => {
    const children = document.querySelector('.carousel').children;

    // add event listeners to thumbnail images
    for (let i = 0; i < children.length; i++) {
        const child = children[i];

        if (child.className === 'thumbnail-image') {
            child.addEventListener('click', thumbnailEventListener);
            console.log('Added event listener to thumbnail image');
        }
    }
})();
