const ROOT_IMG_DIR = "images/"
const TRANSITION_DELAY_MS = 2000;

var galleryItem;

var appGalleryImageSrc = [
    ROOT_IMG_DIR + "app-splash-screen.png",
    ROOT_IMG_DIR + "project-overview.png",
    ROOT_IMG_DIR + "project-sprint-list-screen.png",
    ROOT_IMG_DIR + "project-stats-screen.png",
    ROOT_IMG_DIR + "project-user-stories-screen.png",
    ROOT_IMG_DIR + "project-group-chat.png",
    ROOT_IMG_DIR + "project-task-in-progress-screen.png",
    ROOT_IMG_DIR + "project-task-completed-screen.png"
];

$(function() {

    galleryItem = $('img#gallery-item');
    // console.log(galleryItem.attr("src"));
    var currImageIdx = 0;
    var lengthAppGalleryImages = appGalleryImageSrc.length;

    setInterval(function() {
        if (currImageIdx < lengthAppGalleryImages) {
            // Changes src of gallery image
            galleryItem.attr("src", appGalleryImageSrc[currImageIdx]);
            currImageIdx++;
        } else currImageIdx = 0;
    }, TRANSITION_DELAY_MS);
});