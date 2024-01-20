var video = document.querySelector('video');

if (video) {
    // Make the video focusable, although this is not strictly necessary
    // if you're handling events at the document level.
    video.setAttribute('tabindex', '0'); 

    // Set up the event listener on the document instead of the video element.
    document.addEventListener('keydown', function(event) {
        // Direct event handling at the document level
        if (event.key === 'ArrowRight') {
            video.currentTime += 5;
        } else if (event.key === 'ArrowLeft') {
            video.currentTime -= 5;
        } else if (event.key === '+') {
            video.volume = Math.min(video.volume + 0.1, 1);
        } else if (event.key === '-') {
            video.volume = Math.max(video.volume - 0.1, 0);
        }
    });
} else {
    //console.error('No video element found!');
}
