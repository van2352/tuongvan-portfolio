// document.addEventListener("DOMContentLoaded", function () {

//     initHomePage();
//     initProjectsPage();
//     initProjectDetailPage();

// });


// /* =========================================================
//    HOME PAGE
// ========================================================= */

// function initHomePage() {

//     const featuredGrid =
//         document.getElementById("featuredProjectGrid");

//     const projectCount =
//         document.getElementById("homeProjectCount");

//     const latestYear =
//         document.getElementById("latestProjectYear");

//     const skillCount =
//         document.getElementById("skillCount");


//     if (
//         !featuredGrid &&
//         !projectCount &&
//         !latestYear &&
//         !skillCount
//     ) {
//         return;
//     }


//     /* PROJECT COUNT */

//     if (projectCount) {

//         projectCount.textContent =
//             projects.length;

//     }


//     /* LATEST PROJECT YEAR */

//     if (latestYear) {

//         const years =
//             projects
//                 .map(project =>
//                     Number(project.academicYear)
//                 )
//                 .filter(year =>
//                     !isNaN(year)
//                 );


//         if (years.length > 0) {

//             latestYear.textContent =
//                 Math.max(...years);

//         }

//     }


//     /* SKILLS COUNT */

//     if (skillCount) {

//         const allSkills = [];


//         projects.forEach(project => {

//             if (Array.isArray(project.skills)) {

//                 project.skills.forEach(skill => {

//                     if (!allSkills.includes(skill)) {

//                         allSkills.push(skill);

//                     }

//                 });

//             }

//         });


//         skillCount.textContent =
//             allSkills.length + "+";

//     }


//     /* FEATURED PROJECTS */

//     if (featuredGrid) {

//         featuredGrid.innerHTML = "";


//         const featuredProjects =
//             projects.filter(project =>
//                 project.featured === true
//             );


//         if (featuredProjects.length === 0) {

//             featuredGrid.innerHTML = `
//                 <p class="no-projects">
//                     No featured projects available.
//                 </p>
//             `;

//             return;
//         }


//         featuredProjects
//             .slice(0, 3)
//             .forEach(project => {

//                 const card =
//                     createProjectCard(project);

//                 featuredGrid.appendChild(card);

//             });

//     }

// }


// /* =========================================================
//    PROJECTS PAGE
// ========================================================= */

// function initProjectsPage() {

//     const projectGrid =
//         document.getElementById("projectGrid");


//     if (!projectGrid) {
//         return;
//     }


//     renderProjects(projects);

//     setupProjectFilters();

// }


// /* =========================================================
//    RENDER PROJECTS
// ========================================================= */

// function renderProjects(projectList) {

//     const projectGrid =
//         document.getElementById("projectGrid");


//     if (!projectGrid) {
//         return;
//     }


//     projectGrid.innerHTML = "";


//     if (
//         !projectList ||
//         projectList.length === 0
//     ) {

//         projectGrid.innerHTML = `
//             <p class="no-projects">
//                 No projects found.
//             </p>
//         `;

//         return;
//     }


//     projectList.forEach(project => {

//         const card =
//             createProjectCard(project);


//         projectGrid.appendChild(card);

//     });

// }


// /* =========================================================
//    CREATE PROJECT CARD
// ========================================================= */

// function createProjectCard(project) {

//     const card =
//         document.createElement("div");


//     card.classList.add("project-card");


//     let imageContent = "";


//     if (project.image) {

//         imageContent = `
//             <img
//                 src="${project.image}"
//                 alt="${project.title}"
//                 onerror="
//                     this.style.display='none';
//                     this.parentElement.classList.add('image-fallback');
//                 "
//             >
//         `;

//     }


//     card.innerHTML = `

//         <div class="project-image">

//             ${imageContent}

//             <span class="project-image-label">
//                 ${project.type || "Project"}
//             </span>

//         </div>


//         <div class="project-content">

//             <p class="project-type">
//                 ${project.subject || ""}
//             </p>


//             <h3>
//                 ${project.title || "Untitled Project"}
//             </h3>


//             <p>
//                 ${project.subtitle || ""}
//             </p>


//             <div class="project-meta">

//                 <span>
//                     ${formatProjectDuration(project)}
//                 </span>


//                 ${
//                     project.grade

//                     ? `
//                         <span class="grade-badge">
//                             ${project.grade}
//                         </span>
//                     `

//                     : ""
//                 }

//             </div>


//             <button
//                 class="view-btn"
//                 type="button"
//                 onclick="openProject(${project.id})"
//             >
//                 View Project →
//             </button>

//         </div>

//     `;


//     return card;

// }


// /* =========================================================
//    OPEN PROJECT
// ========================================================= */

// function openProject(projectId) {

//     window.location.href =
//         `project-detail.html?id=${projectId}`;

// }


// /* =========================================================
//    SEARCH + FILTER
// ========================================================= */

// function setupProjectFilters() {

//     const searchInput =
//         document.getElementById("searchInput");

//     const typeFilter =
//         document.getElementById("typeFilter");


//     if (
//         !searchInput ||
//         !typeFilter
//     ) {
//         return;
//     }


//     const projectTypes =
//         [
//             ...new Set(
//                 projects
//                     .map(project =>
//                         project.type
//                     )
//                     .filter(Boolean)
//             )
//         ];


//     projectTypes.sort();


//     projectTypes.forEach(type => {

//         const option =
//             document.createElement("option");


//         option.value =
//             type;


//         option.textContent =
//             type;


//         typeFilter.appendChild(option);

//     });


//     function filterProjects() {

//         const searchText =
//             searchInput.value
//                 .trim()
//                 .toLowerCase();


//         const selectedType =
//             typeFilter.value;


//         const filteredProjects =
//             projects.filter(project => {


//                 const searchData = [

//                     project.title || "",

//                     project.subtitle || "",

//                     project.subject || "",

//                     project.type || "",

//                     ...(project.skills || []),

//                     ...(project.knowledge || []),

//                     ...(project.technologies || []),

//                     ...(project.tools || [])

//                 ]
//                     .join(" ")
//                     .toLowerCase();


//                 const matchesSearch =
//                     searchData.includes(searchText);


//                 const matchesType =
//                     selectedType === "all"
//                     ||
//                     project.type === selectedType;


//                 return (
//                     matchesSearch &&
//                     matchesType
//                 );

//             });


//         renderProjects(
//             filteredProjects
//         );

//     }


//     searchInput.addEventListener(
//         "input",
//         filterProjects
//     );


//     typeFilter.addEventListener(
//         "change",
//         filterProjects
//     );

// }


// /* =========================================================
//    PROJECT DETAIL PAGE
// ========================================================= */

// function initProjectDetailPage() {

//     const detailContainer =
//         document.getElementById("projectDetail");


//     if (!detailContainer) {
//         return;
//     }


//     renderProjectDetail();

// }


// /* =========================================================
//    RENDER PROJECT DETAIL
// ========================================================= */

// function renderProjectDetail() {

//     const detailContainer =
//         document.getElementById("projectDetail");


//     if (!detailContainer) {
//         return;
//     }


//     const params =
//         new URLSearchParams(
//             window.location.search
//         );


//     const projectId =
//         Number(
//             params.get("id")
//         );


//     const project =
//         projects.find(item =>
//             item.id === projectId
//         );


//     if (!project) {

//         detailContainer.innerHTML = `

//             <section class="project-not-found">

//                 <h1>
//                     Project not found
//                 </h1>


//                 <p>
//                     The project you are looking for does not exist.
//                 </p>


//                 <a
//                     href="projects.html"
//                     class="btn-primary"
//                 >
//                     Back to Projects
//                 </a>

//             </section>

//         `;

//         return;
//     }


//     document.title =
//         `${project.title} | My Portfolio`;


//     detailContainer.innerHTML = `

//         <section class="detail-hero">

//             <div class="detail-hero-content">

//                 <a
//                     href="projects.html"
//                     class="back-link"
//                 >
//                     ← Back to Projects
//                 </a>


//                 <p class="small-title">
//                     ${project.subject || ""}
//                 </p>


//                 <h1>
//                     ${project.title || ""}
//                 </h1>


//                 ${
//                     project.subtitle

//                     ? `
//                         <p class="detail-subtitle">
//                             ${project.subtitle}
//                         </p>
//                     `

//                     : ""
//                 }


//                 <div class="detail-tags">

//                     ${
//                         project.type

//                         ? `
//                             <span>
//                                 ${project.type}
//                             </span>
//                         `

//                         : ""
//                     }


//                     ${
//                         project.semester

//                         ? `
//                             <span>
//                                 ${project.semester}
//                             </span>
//                         `

//                         : ""
//                     }


//                     ${
//                         project.status

//                         ? `
//                             <span>
//                                 ${project.status}
//                             </span>
//                         `

//                         : ""
//                     }

//                 </div>

//             </div>

//         </section>


//         <section class="project-overview-grid">


//             <div class="project-main-content">


//                 ${createTextSection(
//                     "About the Project",
//                     project.description
//                 )}


//                 ${createTextSection(
//                     "Project Objective",
//                     project.objective
//                 )}


//                 ${createTextSection(
//                     "My Role",
//                     project.role
//                 )}


//                 ${createArraySection(
//                     "My Contributions",
//                     project.contributions
//                 )}


//                 ${createArraySection(
//                     "Project Results",
//                     project.results
//                 )}


//                 ${createArraySection(
//                     "Key Features",
//                     project.features
//                 )}


//                 ${createTagsSection(
//                     "Skills Developed",
//                     project.skills
//                 )}


//                 ${createTagsSection(
//                     "Knowledge Applied",
//                     project.knowledge
//                 )}


//                 ${createTagsSection(
//                     "Technologies",
//                     project.technologies
//                 )}


//                 ${createTagsSection(
//                     "Tools Used",
//                     project.tools
//                 )}


//                 ${createTagsSection(
//                     "Hardware",
//                     project.hardware
//                 )}


//                 ${createDocuments(
//                     project
//                 )}


//             </div>


//             <aside class="project-sidebar">


//                 ${createGradeCard(
//                     project
//                 )}


//                 <div class="info-card">

//                     ${createInfoRow(
//                         "Subject",
//                         project.subject
//                     )}


//                     ${createInfoRow(
//                         "Semester",
//                         project.semester
//                     )}


//                     ${createInfoRow(
//                         "Academic Year",
//                         project.academicYear
//                     )}


//                     ${createInfoRow(
//                         "Duration",
//                         formatProjectDuration(
//                             project
//                         )
//                     )}


//                     ${createInfoRow(
//                         "Project Type",
//                         project.type
//                     )}


//                     ${createInfoRow(
//                         "Project Format",
//                         project.teamType
//                     )}


//                     ${
//                         project.teamSize

//                         ? createInfoRow(
//                             "Team Size",
//                             project.teamSize === 1
//                                 ? "Individual"
//                                 : `${project.teamSize} members`
//                         )

//                         : ""
//                     }


//                     ${createInfoRow(
//                         "Status",
//                         project.status
//                     )}

//                 </div>


//                 ${createAchievementCard(
//                     project
//                 )}


//             </aside>


//         </section>

//     `;

// }


// /* =========================================================
//    TEXT SECTION
// ========================================================= */

// function createTextSection(
//     title,
//     text
// ) {

//     if (!text) {
//         return "";
//     }


//     return `

//         <section class="detail-section">

//             <h2>
//                 ${title}
//             </h2>


//             <p>
//                 ${text}
//             </p>

//         </section>

//     `;

// }


// /* =========================================================
//    ARRAY / LIST SECTION
// ========================================================= */

// function createArraySection(
//     title,
//     items
// ) {

//     if (
//         !items ||
//         items.length === 0
//     ) {
//         return "";
//     }


//     return `

//         <section class="detail-section">

//             <h2>
//                 ${title}
//             </h2>


//             <ul class="detail-list">

//                 ${items
//                     .map(item => `
//                         <li>
//                             ${item}
//                         </li>
//                     `)
//                     .join("")
//                 }

//             </ul>

//         </section>

//     `;

// }


// /* =========================================================
//    TAG SECTION
// ========================================================= */

// function createTagsSection(
//     title,
//     items
// ) {

//     if (
//         !items ||
//         items.length === 0
//     ) {
//         return "";
//     }


//     return `

//         <section class="detail-section">

//             <h2>
//                 ${title}
//             </h2>


//             <div class="tag-container">

//                 ${items
//                     .map(item => `
//                         <span class="skill-tag">
//                             ${item}
//                         </span>
//                     `)
//                     .join("")
//                 }

//             </div>

//         </section>

//     `;

// }


// /* =========================================================
//    INFO ROW
// ========================================================= */

// function createInfoRow(
//     label,
//     value
// ) {

//     if (!value) {
//         return "";
//     }


//     return `

//         <div class="info-row">

//             <span>
//                 ${label}
//             </span>


//             <strong>
//                 ${value}
//             </strong>

//         </div>

//     `;

// }


// /* =========================================================
//    GRADE CARD
// ========================================================= */

// function createGradeCard(
//     project
// ) {

//     if (!project.grade) {
//         return "";
//     }


//     return `

//         <div class="info-card grade-card">

//             <p>
//                 FINAL GRADE
//             </p>


//             <h2>
//                 ${project.grade}
//             </h2>

//         </div>

//     `;

// }


// /* =========================================================
//    ACHIEVEMENT CARD
// ========================================================= */

// function createAchievementCard(
//     project
// ) {

//     if (!project.achievement) {
//         return "";
//     }


//     return `

//         <div class="info-card">

//             <p class="sidebar-label">
//                 ACHIEVEMENT
//             </p>


//             <p class="achievement-text">
//                 ${project.achievement}
//             </p>

//         </div>

//     `;

// }


// /* =========================================================
//    PROJECT DOCUMENTS
// ========================================================= */

// function createDocuments(project) {

//     if (
//         !project.reportPdf &&
//         !project.presentationPdf
//     ) {
//         return "";
//     }

//     return `

//         <section class="detail-section project-documents-section">

//             <div class="documents-heading">

//                 <p class="documents-label">
//                     PROJECT FILES
//                 </p>

//                 <h2>
//                     Project Documents
//                 </h2>

//                 <p class="documents-description">
//                     View the complete report and supporting documents
//                     of this project.
//                 </p>

//             </div>


//             <div class="document-container">

//                 ${
//                     project.reportPdf

//                     ? `
//                         <a
//                             href="${project.reportPdf}"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             class="document-card document-report"
//                         >

//                             <div class="document-icon-box">

//                                 <div class="pdf-icon">
//                                     PDF
//                                 </div>

//                             </div>


//                             <div class="document-info">

//                                 <span class="document-type">
//                                     FINAL REPORT
//                                 </span>

//                                 <h3>
//                                     Final Project Report
//                                 </h3>

//                                 <p>
//                                     View the complete project report,
//                                     implementation details and results.
//                                 </p>


//                                 <div class="document-meta">

//                                     <span>
//                                         PDF Document
//                                     </span>

//                                     <span class="document-dot">
//                                         •
//                                     </span>

//                                     <span>
//                                         Full Report
//                                     </span>

//                                 </div>

//                             </div>


//                             <div class="document-action">

//                                 <span>
//                                     View Report
//                                 </span>

//                                 <span class="document-arrow">
//                                     ↗
//                                 </span>

//                             </div>

//                         </a>
//                     `

//                     : ""
//                 }


//                 ${
//                     project.presentationPdf

//                     ? `
//                         <a
//                             href="${project.presentationPdf}"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             class="document-card"
//                         >

//                             <div class="document-icon-box">

//                                 <div class="pdf-icon">
//                                     PDF
//                                 </div>

//                             </div>


//                             <div class="document-info">

//                                 <span class="document-type">
//                                     PRESENTATION
//                                 </span>

//                                 <h3>
//                                     Project Presentation
//                                 </h3>

//                                 <p>
//                                     View the presentation slides
//                                     prepared for this project.
//                                 </p>

//                             </div>


//                             <div class="document-action">

//                                 <span>
//                                     View Slides
//                                 </span>

//                                 <span class="document-arrow">
//                                     ↗
//                                 </span>

//                             </div>

//                         </a>
//                     `

//                     : ""
//                 }

//             </div>

//         </section>

//     `;
// }


// /* =========================================================
//    PROJECT DURATION
// ========================================================= */

// function formatProjectDuration(
//     project
// ) {

//     const start =
//         project.startDate || "";


//     const end =
//         project.endDate || "";


//     if (
//         start &&
//         end
//     ) {

//         return `${start} – ${end}`;

//     }


//     if (start) {
//         return start;
//     }


//     if (end) {
//         return end;
//     }


//     return "";

// }


document.addEventListener("DOMContentLoaded", function () {

    initHomePage();
    initProjectsPage();
    initProjectDetailPage();

});


/* =========================================================
   HOME PAGE
========================================================= */

function initHomePage() {

    const featuredGrid =
        document.getElementById("featuredProjectGrid");

    const projectCount =
        document.getElementById("homeProjectCount");

    const latestYear =
        document.getElementById("latestProjectYear");

    const skillCount =
        document.getElementById("skillCount");


    if (
        !featuredGrid &&
        !projectCount &&
        !latestYear &&
        !skillCount
    ) {
        return;
    }


    /* PROJECT COUNT */

    if (projectCount) {
        projectCount.textContent = projects.length;
    }


    /* LATEST PROJECT YEAR */

    if (latestYear) {

        const years = projects
            .map(project => Number(project.academicYear))
            .filter(year => !isNaN(year));


        if (years.length > 0) {
            latestYear.textContent = Math.max(...years);
        }

    }


    /* SKILLS COUNT */

    if (skillCount) {

        const allSkills = [];


        projects.forEach(project => {

            if (Array.isArray(project.skills)) {

                project.skills.forEach(skill => {

                    if (!allSkills.includes(skill)) {
                        allSkills.push(skill);
                    }

                });

            }

        });


        skillCount.textContent = allSkills.length + "+";

    }


    /* FEATURED PROJECTS */

    if (featuredGrid) {

        featuredGrid.innerHTML = "";


        const featuredProjects =
            projects.filter(project => project.featured === true);


        if (featuredProjects.length === 0) {

            featuredGrid.innerHTML = `
                <p class="no-projects">
                    No featured projects available.
                </p>
            `;

            return;
        }


        featuredProjects
            .slice(0, 3)
            .forEach(project => {

                const card = createProjectCard(project);

                featuredGrid.appendChild(card);

            });

    }

}


/* =========================================================
   PROJECTS PAGE
========================================================= */

function initProjectsPage() {

    const projectGrid =
        document.getElementById("projectGrid");


    if (!projectGrid) {
        return;
    }


    renderProjects(projects);

    setupProjectFilters();

}


/* =========================================================
   RENDER PROJECTS
========================================================= */

function renderProjects(projectList) {

    const projectGrid =
        document.getElementById("projectGrid");


    if (!projectGrid) {
        return;
    }


    projectGrid.innerHTML = "";


    if (
        !projectList ||
        projectList.length === 0
    ) {

        projectGrid.innerHTML = `
            <p class="no-projects">
                No projects found.
            </p>
        `;

        return;
    }


    projectList.forEach(project => {

        const card = createProjectCard(project);

        projectGrid.appendChild(card);

    });

}


/* =========================================================
   CREATE PROJECT CARD
========================================================= */

function createProjectCard(project) {

    const card =
        document.createElement("div");


    card.classList.add("project-card");


    let imageContent = "";


    if (project.image) {

        imageContent = `
            <img
                src="${project.image}"
                alt="${project.title}"
                onerror="
                    this.style.display='none';
                    this.parentElement.classList.add('image-fallback');
                "
            >
        `;

    }


    card.innerHTML = `

        <div class="project-image">

            ${imageContent}

            <span class="project-image-label">
                ${project.type || "Project"}
            </span>

        </div>


        <div class="project-content">

            <p class="project-type">
                ${project.subject || ""}
            </p>


            <h3>
                ${project.title || "Untitled Project"}
            </h3>


            <p>
                ${project.subtitle || ""}
            </p>


            <div class="project-meta">

                <span>
                    ${formatProjectDuration(project)}
                </span>


                ${
                    project.grade

                    ? `
                        <span class="grade-badge">
                            ${project.grade}
                        </span>
                    `

                    : ""
                }

            </div>


            <button
                class="view-btn"
                type="button"
                onclick="openProject(${project.id})"
            >
                View Project →
            </button>

        </div>

    `;


    return card;

}


/* =========================================================
   OPEN PROJECT
========================================================= */

function openProject(projectId) {

    window.location.href =
        `project-detail.html?id=${projectId}`;

}


/* =========================================================
   SEARCH + FILTER
========================================================= */

function setupProjectFilters() {

    const searchInput =
        document.getElementById("searchInput");

    const typeFilter =
        document.getElementById("typeFilter");


    if (
        !searchInput ||
        !typeFilter
    ) {
        return;
    }


    const projectTypes = [

        ...new Set(

            projects
                .map(project => project.type)
                .filter(Boolean)

        )

    ];


    projectTypes.sort();


    projectTypes.forEach(type => {

        const option =
            document.createElement("option");


        option.value = type;

        option.textContent = type;


        typeFilter.appendChild(option);

    });


    function filterProjects() {

        const searchText =
            searchInput.value
                .trim()
                .toLowerCase();


        const selectedType =
            typeFilter.value;


        const filteredProjects =
            projects.filter(project => {


                const searchData = [

                    project.title || "",

                    project.subtitle || "",

                    project.subject || "",

                    project.type || "",

                    ...(project.skills || []),

                    ...(project.knowledge || []),

                    ...(project.technologies || []),

                    ...(project.tools || [])

                ]
                    .join(" ")
                    .toLowerCase();


                const matchesSearch =
                    searchData.includes(searchText);


                const matchesType =
                    selectedType === "all"
                    ||
                    project.type === selectedType;


                return (
                    matchesSearch &&
                    matchesType
                );

            });


        renderProjects(filteredProjects);

    }


    searchInput.addEventListener(
        "input",
        filterProjects
    );


    typeFilter.addEventListener(
        "change",
        filterProjects
    );

}


/* =========================================================
   PROJECT DETAIL PAGE
========================================================= */

function initProjectDetailPage() {

    const detailContainer =
        document.getElementById("projectDetail");


    if (!detailContainer) {
        return;
    }


    renderProjectDetail();

}


/* =========================================================
   RENDER PROJECT DETAIL
========================================================= */

function renderProjectDetail() {

    const detailContainer =
        document.getElementById("projectDetail");


    if (!detailContainer) {
        return;
    }


    const params =
        new URLSearchParams(window.location.search);


    const projectId =
        Number(params.get("id"));


    const project =
        projects.find(item =>
            item.id === projectId
        );


    if (!project) {

        detailContainer.innerHTML = `

            <section class="project-not-found">

                <h1>
                    Project not found
                </h1>


                <p>
                    The project you are looking for does not exist.
                </p>


                <a
                    href="projects.html"
                    class="btn-primary"
                >
                    Back to Projects
                </a>

            </section>

        `;

        return;
    }


    document.title =
        `${project.title} | My Portfolio`;


    detailContainer.innerHTML = `

        <!-- =================================================
             PROJECT HERO
        ================================================== -->

        <section class="detail-hero">

            <div class="detail-hero-content">

                <a
                    href="projects.html"
                    class="back-link"
                >
                    ← Back to Projects
                </a>


                <p class="small-title">
                    ${project.subject || ""}
                </p>


                <h1>
                    ${project.title || ""}
                </h1>


                ${
                    project.subtitle

                    ? `
                        <p class="detail-subtitle">
                            ${project.subtitle}
                        </p>
                    `

                    : ""
                }


                <div class="detail-tags">

                    ${
                        project.type

                        ? `
                            <span>
                                ${project.type}
                            </span>
                        `

                        : ""
                    }


                    ${
                        project.academicYear

                        ? `
                            <span>
                                ${project.academicYear}
                            </span>
                        `

                        : ""
                    }


                    ${
                        project.status

                        ? `
                            <span>
                                ${project.status}
                            </span>
                        `

                        : ""
                    }

                </div>


                <!-- =========================================
                     QUICK ACTIONS
                ========================================== -->

                ${
                    createHeroActions(project)
                }

            </div>

        </section>


        <!-- =================================================
             PROJECT OVERVIEW
        ================================================== -->

        <section class="project-overview-grid">


            <div class="project-main-content">


                ${createTextSection(
                    "About the Project",
                    project.description
                )}


                ${createTextSection(
                    "Project Objective",
                    project.objective
                )}


                ${createTextSection(
                    "My Role",
                    project.role
                )}


                ${createArraySection(
                    "My Contributions",
                    project.contributions
                )}


                ${createArraySection(
                    "Project Results",
                    project.results
                )}


                ${createArraySection(
                    "Key Features",
                    project.features
                )}


                ${createTagsSection(
                    "Skills Developed",
                    project.skills
                )}


                ${createTagsSection(
                    "Knowledge Applied",
                    project.knowledge
                )}


                ${createTagsSection(
                    "Technologies",
                    project.technologies
                )}


                ${createTagsSection(
                    "Tools Used",
                    project.tools
                )}


                ${createTagsSection(
                    "Hardware",
                    project.hardware
                )}


                ${createDocuments(
                    project
                )}


            </div>


            <!-- =================================================
                 SIDEBAR
            ================================================== -->

            <aside class="project-sidebar">


                ${createGradeCard(
                    project
                )}


                ${createQuickReportCard(
                    project
                )}


                <div class="info-card">

                    ${createInfoRow(
                        "Subject",
                        project.subject
                    )}


                    ${createInfoRow(
                        "Class",
                        project.classCode
                    )}


                    ${createInfoRow(
                        "Semester",
                        project.semester
                    )}


                    ${createInfoRow(
                        "Academic Year",
                        project.academicYear
                    )}


                    ${createInfoRow(
                        "Duration",
                        formatProjectDuration(project)
                    )}


                    ${createInfoRow(
                        "Project Type",
                        project.type
                    )}


                    ${createInfoRow(
                        "Project Format",
                        project.teamType
                    )}


                    ${
                        project.teamSize

                        ? createInfoRow(
                            "Team Size",
                            project.teamSize === 1
                                ? "Individual"
                                : `${project.teamSize} members`
                        )

                        : ""
                    }


                    ${createInfoRow(
                        "Status",
                        project.status
                    )}

                </div>


                ${createAchievementCard(
                    project
                )}


            </aside>


        </section>

    `;

}


/* =========================================================
   HERO QUICK ACTIONS
========================================================= */

function createHeroActions(project) {

    if (
        !project.reportPdf &&
        !project.presentationPdf &&
        !project.sourceCode
    ) {
        return "";
    }


    return `

        <div class="hero-project-actions">


            ${
                project.reportPdf

                ? `
                    <a
                        href="${project.reportPdf}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hero-report-btn"
                    >

                        <span class="hero-report-icon">
                            PDF
                        </span>


                        <span class="hero-report-content">

                            <small>
                                PROJECT DOCUMENT
                            </small>

                            <strong>
                                View Final Report
                            </strong>

                        </span>


                        <span class="hero-action-arrow">
                            ↗
                        </span>

                    </a>
                `

                : ""
            }


            ${
                project.presentationPdf

                ? `
                    <a
                        href="${project.presentationPdf}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hero-secondary-btn"
                    >
                        View Presentation ↗
                    </a>
                `

                : ""
            }


            ${
                project.sourceCode

                ? `
                    <a
                        href="${project.sourceCode}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hero-secondary-btn"
                    >
                        View Source Code ↗
                    </a>
                `

                : ""
            }


        </div>

    `;

}


/* =========================================================
   SIDEBAR QUICK REPORT
========================================================= */

function createQuickReportCard(project) {

    if (!project.reportPdf) {
        return "";
    }


    return `

        <a
            href="${project.reportPdf}"
            target="_blank"
            rel="noopener noreferrer"
            class="quick-report-card"
        >

            <div class="quick-report-top">

                <span class="quick-report-pdf">
                    PDF
                </span>

                <span class="quick-report-label">
                    PROJECT REPORT
                </span>

            </div>


            <strong>
                Final Report
            </strong>


            <p>
                View the complete project documentation.
            </p>


            <div class="quick-report-link">

                View Report

                <span>
                    ↗
                </span>

            </div>

        </a>

    `;

}


/* =========================================================
   TEXT SECTION
========================================================= */

function createTextSection(
    title,
    text
) {

    if (!text) {
        return "";
    }


    return `

        <section class="detail-section">

            <h2>
                ${title}
            </h2>


            <p>
                ${text}
            </p>

        </section>

    `;

}


/* =========================================================
   ARRAY / LIST SECTION
========================================================= */

function createArraySection(
    title,
    items
) {

    if (
        !items ||
        items.length === 0
    ) {
        return "";
    }


    return `

        <section class="detail-section">

            <h2>
                ${title}
            </h2>


            <ul class="detail-list">

                ${items
                    .map(item => `
                        <li>
                            ${item}
                        </li>
                    `)
                    .join("")
                }

            </ul>

        </section>

    `;

}


/* =========================================================
   TAG SECTION
========================================================= */

function createTagsSection(
    title,
    items
) {

    if (
        !items ||
        items.length === 0
    ) {
        return "";
    }


    return `

        <section class="detail-section">

            <h2>
                ${title}
            </h2>


            <div class="tag-container">

                ${items
                    .map(item => `
                        <span class="skill-tag">
                            ${item}
                        </span>
                    `)
                    .join("")
                }

            </div>

        </section>

    `;

}


/* =========================================================
   INFO ROW
========================================================= */

function createInfoRow(
    label,
    value
) {

    if (!value) {
        return "";
    }


    return `

        <div class="info-row">

            <span>
                ${label}
            </span>


            <strong>
                ${value}
            </strong>

        </div>

    `;

}


/* =========================================================
   GRADE CARD
========================================================= */

function createGradeCard(project) {

    if (!project.grade) {
        return "";
    }


    return `

        <div class="info-card grade-card">

            <p>
                FINAL GRADE
            </p>


            <h2>
                ${project.grade}
            </h2>

        </div>

    `;

}


/* =========================================================
   ACHIEVEMENT CARD
========================================================= */

function createAchievementCard(project) {

    if (!project.achievement) {
        return "";
    }


    return `

        <div class="info-card">

            <p class="sidebar-label">
                ACHIEVEMENT
            </p>


            <p class="achievement-text">
                ${project.achievement}
            </p>

        </div>

    `;

}


/* =========================================================
   PROJECT DOCUMENTS
========================================================= */

function createDocuments(project) {

    if (
        !project.reportPdf &&
        !project.presentationPdf
    ) {
        return "";
    }


    return `

        <section class="detail-section project-documents-section">

            <div class="documents-heading">

                <p class="documents-label">
                    PROJECT FILES
                </p>


                <h2>
                    Project Documents
                </h2>


                <p class="documents-description">
                    View the complete report and supporting
                    documents of this project.
                </p>

            </div>


            <div class="document-container">


                ${
                    project.reportPdf

                    ? `
                        <a
                            href="${project.reportPdf}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="document-card document-report"
                        >

                            <div class="document-icon-box">

                                <div class="pdf-icon">
                                    PDF
                                </div>

                            </div>


                            <div class="document-info">

                                <span class="document-type">
                                    FINAL REPORT
                                </span>


                                <h3>
                                    Final Project Report
                                </h3>


                                <p>
                                    View the complete project report,
                                    implementation details and results.
                                </p>


                                <div class="document-meta">

                                    <span>
                                        PDF Document
                                    </span>

                                    <span class="document-dot">
                                        •
                                    </span>

                                    <span>
                                        Full Report
                                    </span>

                                </div>

                            </div>


                            <div class="document-action">

                                <span>
                                    View Report
                                </span>

                                <span class="document-arrow">
                                    ↗
                                </span>

                            </div>

                        </a>
                    `

                    : ""
                }


                ${
                    project.presentationPdf

                    ? `
                        <a
                            href="${project.presentationPdf}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="document-card"
                        >

                            <div class="document-icon-box">

                                <div class="pdf-icon">
                                    PDF
                                </div>

                            </div>


                            <div class="document-info">

                                <span class="document-type">
                                    PRESENTATION
                                </span>


                                <h3>
                                    Project Presentation
                                </h3>


                                <p>
                                    View the presentation slides
                                    prepared for this project.
                                </p>

                            </div>


                            <div class="document-action">

                                <span>
                                    View Slides
                                </span>

                                <span class="document-arrow">
                                    ↗
                                </span>

                            </div>

                        </a>
                    `

                    : ""
                }


            </div>

        </section>

    `;

}


/* =========================================================
   PROJECT DURATION
========================================================= */

function formatProjectDuration(project) {

    const start =
        project.startDate || "";


    const end =
        project.endDate || "";


    if (
        start &&
        end
    ) {
        return `${start} – ${end}`;
    }


    if (start) {
        return start;
    }


    if (end) {
        return end;
    }


    return "";

}