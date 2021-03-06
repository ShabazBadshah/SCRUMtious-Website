const ROOT_IMG_DIR = "images/"
const TRANSITION_DELAY_MS = 2000;
const IMAGE_TYPE = ".png";
const APP_LOCATION = 'SCRUMtious-release-demo.apk';
var galleryItem;
var downloadBtn;

var appGalleryImageSrc = [
    ROOT_IMG_DIR + "app-splash-screen-min" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-overview-min" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-sprint-list-screen-min" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-stats-screen-min" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-user-stories-screen-min" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-group-chat-min" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-task-in-progress-screen-min" + IMAGE_TYPE,
    ROOT_IMG_DIR + "project-task-completed-screen-min" + IMAGE_TYPE
];

$(function() {

    galleryItem = $('img#gallery-item');
	downloadBtn = $('#download-app-button');
	
	downloadBtn.click(function() {
		window.open(APP_LOCATION, 'Download');
	});

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
