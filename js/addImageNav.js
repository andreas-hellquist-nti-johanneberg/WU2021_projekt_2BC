getImageLinkData = () => {
    const imageContainers = document.querySelectorAll ("section#wrapper-art-gallery-images section.art-container");

    let imageLinkData = [];

    for (let i = 0; i < imageContainers.length; i++) {
        const imageID = "image" + i.toString ().padStart (2, '0');
        imageContainers [i].id = imageID;

        const imageName = imageContainers [i].querySelector ("h2").textContent;

        imageLinkData.push ({
            name: imageName,
            imageID: imageID});
    }

    return imageLinkData;
}

insertNavLinks = (parentElem) => {

    const linkData = getImageLinkData ();

    console.log (linkData);
    linkData.forEach (imageLink => {
        let link = document.createElement ("a");

        // Just to make the cursor show that it's clickable
        link.href = "";

        // Fancy scrolling it is
        link.addEventListener ("click", e => {
            e.preventDefault ();
            document.getElementById (imageLink.imageID).scrollIntoView ({behavior: "smooth", block: "center"});
        })

        link.append (imageLink.name);


        parentElem.append (link);
    })
}

// Yes it is a little bit slower to load the links on mobile and desktop, but it's easier for me to test.
// The script will only run once upon loading anyways, so it doesn't really matter.
insertNavLinks (document.getElementById ("image-links"));
insertNavLinks (document.getElementById ("navigate-page"));
