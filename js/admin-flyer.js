(function () {
    var file = document.getElementById("img");
    var zone = document.getElementById("dropZone");
    var preview = document.getElementById("preview");
    var title = document.getElementById("title");
    var description = document.getElementById("description");

    function count(field, target) {
        var node = document.getElementById(target);
        if (field && node) node.textContent = field.value.length;
    }

    function showFile(image) {
        if (!image || !/^image\/(jpeg|png|webp)$/.test(image.type)) return;
        var reader = new FileReader();
        reader.onload = function (event) {
            preview.src = event.target.result;
            zone.classList.add("has-preview");
        };
        reader.readAsDataURL(image);
    }

    if (file && zone) {
        file.addEventListener("change", function () { showFile(file.files[0]); });
        zone.addEventListener("dragover", function (event) {
            event.preventDefault();
            zone.classList.add("drag");
        });
        zone.addEventListener("dragleave", function () { zone.classList.remove("drag"); });
        zone.addEventListener("drop", function (event) {
            event.preventDefault();
            zone.classList.remove("drag");
            if (event.dataTransfer.files.length) {
                file.files = event.dataTransfer.files;
                showFile(file.files[0]);
            }
        });
    }

    if (title) title.addEventListener("input", function () { count(title, "titleCount"); });
    if (description) description.addEventListener("input", function () { count(description, "descriptionCount"); });
})();
