// Jag borde nog skriva om den här koden nu när jag kan mer javascript. Det är dålig design rakt igenom

getImageLinkData = () => {
    const imageContainers = document.querySelectorAll ("section#wrapper-art-gallery-images section.art-container");

    let imageLinkData = [];

    for (let i = 0; i < imageContainers.length; i++) {
        const imageID = "image" + i.toString ().padStart (2, '0');
        imageContainers [i].id = imageID;

        const imageName = imageContainers [i].querySelector (":first-child").textContent;

        imageLinkData.push ({
            name: imageName,
            ID: imageID});
    }

    return imageLinkData;
}

getCollapsibleLinkData = () => {
    const collapsibleContainers = document.querySelectorAll (".collapsible > :first-child");

    let collapsibleLinkData = [];

    for (let i = 0; i < collapsibleContainers.length; i++) {
        const collapsibleID = "collapsible" + i.toString ().padStart (2, '0');
        collapsibleContainers [i].id = collapsibleID;

        const collapsibleName = collapsibleContainers [i].textContent;

        collapsibleLinkData.push ({
            name: collapsibleName,
            ID: collapsibleID});
    }

    return collapsibleLinkData;
}

insertNavLinks = (linkData, parentElem) => {

    console.log (linkData);
    linkData.forEach (imageLink => {
        let link = document.createElement ("a");

        // Just to make the cursor show that it's clickable
        link.href = "";

        // Fancy scrolling it is
        link.addEventListener ("click", e => {
            e.preventDefault ();
            document.getElementById (imageLink.ID).scrollIntoView ({behavior: "smooth", block: "center"});
        })

        link.append (imageLink.name);


        parentElem.append (link);
    })
}

const pageName = window.location.pathname;

// Yes it is a little bit slower to load the links on mobile and desktop, but it's easier for me.
// The script will only run once upon loading anyways, so it doesn't really matter.
switch (pageName) {
    case "/art-gallery.html":
        insertNavLinks (getImageLinkData (), document.getElementById ("navigate-page-desktop"));
        insertNavLinks (getImageLinkData (), document.getElementById ("navigate-page-mobile"));
        break;

    case "/about.html":
        insertNavLinks (getCollapsibleLinkData (), document.getElementById ("navigate-page-desktop"));
        insertNavLinks (getCollapsibleLinkData (), document.getElementById ("navigate-page-mobile"));
        break;
}
