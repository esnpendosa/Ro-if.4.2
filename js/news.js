(function() {
    var searchInput = document.getElementById("search-input");
    var searchForm = document.getElementById("search-form");
    var pills = document.querySelectorAll(".filters .pills a");
    var cards = document.querySelectorAll(".grid .card");
    var resultsCount = document.getElementById("results-count");
    var emptyMessage = document.getElementById("empty-message");

    var activeCategory = "Semua";
    var currentQuery = "";

    // Parse URL search params
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("kategori")) {
        activeCategory = urlParams.get("kategori") || "Semua";
    }
    if (urlParams.has("q")) {
        currentQuery = urlParams.get("q") || "";
        if (searchInput) {
            searchInput.value = currentQuery;
        }
    }

    function filterArticles() {
        var count = 0;
        var q = currentQuery.toLowerCase().trim();

        cards.forEach(function(card) {
            var category = card.dataset.category || "";
            var title = (card.querySelector("h2") ? card.querySelector("h2").textContent : "").toLowerCase();
            var excerpt = (card.querySelector("p") ? card.querySelector("p").textContent : "").toLowerCase();

            var matchesCategory = (activeCategory === "Semua" || category === activeCategory);
            var matchesQuery = (q === "" || title.indexOf(q) !== -1 || excerpt.indexOf(q) !== -1);

            if (matchesCategory && matchesQuery) {
                card.style.display = "";
                count++;
            } else {
                card.style.display = "none";
            }
        });

        if (resultsCount) {
            resultsCount.textContent = count + " artikel";
        }

        if (emptyMessage) {
            emptyMessage.hidden = (count > 0);
        }

        pills.forEach(function(pill) {
            var pillCat = pill.dataset.category || pill.textContent.trim();
            if (pillCat === activeCategory) {
                pill.classList.add("active");
            } else {
                pill.classList.remove("active");
            }
        });
    }

    pills.forEach(function(pill) {
        pill.addEventListener("click", function(e) {
            e.preventDefault();
            activeCategory = pill.dataset.category || pill.textContent.trim();
            var newUrl = new URL(window.location);
            if (activeCategory === "Semua") {
                newUrl.searchParams.delete("kategori");
            } else {
                newUrl.searchParams.set("kategori", activeCategory);
            }
            if (currentQuery) {
                newUrl.searchParams.set("q", currentQuery);
            } else {
                newUrl.searchParams.delete("q");
            }
            window.history.replaceState({}, "", newUrl);
            filterArticles();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", function() {
            currentQuery = searchInput.value;
            filterArticles();
        });
    }

    if (searchForm) {
        searchForm.addEventListener("submit", function(e) {
            e.preventDefault();
            currentQuery = searchInput ? searchInput.value : "";
            filterArticles();
        });
    }

    // Initial filter
    filterArticles();
})();
