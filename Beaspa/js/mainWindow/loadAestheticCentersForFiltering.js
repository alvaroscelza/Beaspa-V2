function loadAeshteticCentersForFiltering() {
    let filterContainer = document.getElementById("filterContainer");
    filterContainer.innerHTML = "";
    persistenceManager.aestheticCenters.forEach(function loadAestheticCentersInFilterContainer(center, index) {
        filterContainer.innerHTML = filterContainer.innerHTML +
            "<a class='dropdown-item' href='#' onclick='filterPeopleByAestheticCenter(\"" + center + "\")'>" +
            center +
            "</a>";
    });
}