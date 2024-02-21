fetch("/html/components/footer.html")
    .then((response) => response.text())
    .then((component_html) => {
        let list_of_elements = document.getElementsByClassName("footer-component");
        for (let element of list_of_elements) {
            element.innerHTML = component_html;
        }
    });

// fetch("/html/components/navbar.html")
//     // This line gets the document text out of then response
//     .then((response) => response.text())
//     .then((component_html) => {
//         // find the empty elements on the page
//         let list_of_elements = document.getElementsByClassName("nav-component");
//         // fill the empty elements with the content of the fetched htmls
//         for (let element of list_of_elements) {
//             element.innerHTML = component_html;
//         }

//     });

    fetch("/html/components/menu.html")
    // This line gets the document text out of then response
    .then((response) => response.text())
    .then((component_html) => {
        // find the empty elements on the page
        let list_of_elements = document.getElementsByClassName("nav-menu");
        // fill the empty elements with the content of the fetched htmls
        for (let element of list_of_elements) {
            element.innerHTML = component_html;
        }

        const menuItemsElement = document.getElementById("menu-items")
        const menuToggleElement = document.getElementById("menu-toggle")

        menuToggleElement.addEventListener("click", (e) => {
            menuItemsElement.classList.toggle("show-menu-items");
        });


    });

    
 

