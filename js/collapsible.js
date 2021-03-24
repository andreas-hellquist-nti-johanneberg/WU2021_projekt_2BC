/* Scans a page for all elements with the class "collapsible" and attaches event listeners that toggles them
 *
 * A collapsible block should have the structure:
 *
 * <tag class="collapsible">
 *  <tag>Title</tag>
 *  <tag>content...</tag>
 * </tag>
 *
 * The first child of the collapsible element will become its title, and everything else will be its content
*/

toggleCollapsible = (elem) => {
    elem.classList.toggle ("opened");
}

collapsibles = document.getElementsByClassName ("collapsible");
for (let i = 0; i < collapsibles.length; i++) {
    collapsibles [i].addEventListener ("click", () => {toggleCollapsible (collapsibles [i])});
}
