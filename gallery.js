const ROOT_IMG_DIR = "images/"
const TRANSITION_DELAY_MS = 3000;
const IMAGE_TYPE = ".png";
var galleryItem;

var appGalleryImageSrc = [
    ROOT_IMG_DIR + "app-splash-screen" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-overview" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-sprint-list-screen" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-stats-screen" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-user-stories-screen" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-group-chat" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-task-in-progress-screen" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-task-completed-screen" + IMAGE_TYPE
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