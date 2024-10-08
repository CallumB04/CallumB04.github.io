const navbar = document.getElementById("navbar");
const navbarHome = document.getElementById("nav-home");
const navbarAbout = document.getElementById("nav-about");
const navbarProjects = document.getElementById("nav-projects");
const homeSection = document.getElementById("home-section");
const aboutSection = document.getElementById("about-section");
const projectsSection = document.getElementById("projects-section");
const languagesAndSkills = document.getElementsByClassName("language-skill");


/* Highlighting currently open section of webpage on the navbar */

// -- HOME --
navbarHome.addEventListener("click", () => {
    navbarAbout.classList.remove("selected");
    navbarProjects.classList.remove("selected");
    navbarHome.classList.remove("highlight");
    navbarHome.classList.add("selected");
    navbar.classList.add("freeze");
});
// -- ABOUT --
navbarAbout.addEventListener("click", () => {
    navbarHome.classList.remove("selected");
    navbarProjects.classList.remove("selected");
    navbarAbout.classList.remove("highlight");
    navbarAbout.classList.add("selected");
    navbar.classList.add("freeze");
});
// -- PROJECTS --
navbarProjects.addEventListener("click", () => {
    navbarAbout.classList.remove("selected");
    navbarHome.classList.remove("selected");
    navbarProjects.classList.remove("highlight");
    navbarProjects.classList.add("selected");
    navbar.classList.add("freeze");
});

// Allowing for navbar highlights to change again once scroll has finished
window.addEventListener("scrollend", () => {
    navbar.classList.remove("freeze");
})


/* Temporary highlights navbar options when hovered */

// -- HOME --
navbarHome.addEventListener("mouseover", () => {
    if (!navbarHome.classList.contains("selected")){
        navbarHome.classList.add("highlight")
    }
});
navbarHome.addEventListener("mouseout",
    () => navbarHome.classList.remove("highlight")
);

// -- ABOUT --
navbarAbout.addEventListener("mouseover", () => {
    if (!navbarAbout.classList.contains("selected")){
        navbarAbout.classList.add("highlight")
    }
});
navbarAbout.addEventListener("mouseout",
    () => navbarAbout.classList.remove("highlight")
);

// -- PROJECTS --
navbarProjects.addEventListener("mouseover", () => {
    if (!navbarProjects.classList.contains("selected")){
        navbarProjects.classList.add("highlight")
    }
});
navbarProjects.addEventListener("mouseout",
    () => navbarProjects.classList.remove("highlight")
);


/* Updating navbar if window is scrolled into new section */

// checks if section is the most predominant on the viewport
const isInFocus = (section) => {
    if (section.getBoundingClientRect().y < window.innerHeight / 2) {
        return true;
    } return false;
}

// checks if element is 10% visible on the viewport
const isPartiallyVisible = (element) => {
    if (element.getBoundingClientRect().y < window.innerHeight * 0.9) {
        return true;
    } return false;
}

// updates navbar with new focused section
const updateNavbar = (section) => {
    // clearing all navbar elements
    navbarHome.classList.remove("selected");
    navbarAbout.classList.remove("selected");
    navbarProjects.classList.remove("selected");

    // update navbar
    section.classList.add("selected");
}

// when element is viewed for first time, fades in
const fadeInElement = (element) => {
    if (element.classList.contains("start-faded-out")){
        element.classList.remove("start-faded-out");
        element.classList.add("fade-in");
    }
}

// checks current predominant section each time the page is scrolled
window.addEventListener("scroll", () => {

    // Iterating through 2D array of [<section>, <respective navbar element>]
    for (const section of [
        [homeSection, navbarHome], 
        [aboutSection, navbarAbout], 
        [projectsSection, navbarProjects]
    ]) {
        // Checking if section is predominant on the viewport
        // Navbar only updates if 'freeze' class is not currently present from navbar usage
        if (isInFocus(section[0]) && !navbar.classList.contains("freeze")) { 
            updateNavbar(section[1]); // Update highlights on navbar
        }
        // Fading in elements when partially visible
        if (section[0] != homeSection){
            for (const child of section[0].children){
                if (isPartiallyVisible(child)) {
                    fadeInElement(child); // Fade in element
                }
                for (const secondChild of child.children) {
                    if (isPartiallyVisible(secondChild)) {
                        fadeInElement(secondChild); // Fade in second children
                    }
                    for (const thirdChild of secondChild.children) {
                        if (isPartiallyVisible(thirdChild)) {
                            fadeInElement(thirdChild); // Fade in third children
                        }
                    }
                }
            }
        }
    }
});

// iterating through languages and adding hover checks for each
for (const element of languagesAndSkills) {
    let hover = document.getElementById(`${element.id}-hover`);

    element.addEventListener("mouseover", () => {
        element.classList.add("colored");
        hover.style.display = "flex";
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove("colored");
        hover.style.display = "none";
    })
}