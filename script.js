/* *********** */
/* variables */
/* *********** */
const yearEl = document.getElementById("year");
const projectsEl = document.getElementById("projects");
const filterEls = document.querySelectorAll("#filters li");

for (let i = 0; i < filterEls.length; i++) {
  filterEls[i].addEventListener("click", function (e) {
    document.querySelector("#filters li.active").classList.remove("active");
    filterEls[i].classList.add("active");
    let tag = e.target.id;
    renderProjects(tag);
  });
}

yearEl.innerHTML = new Date().getFullYear();

/* *********** */
/* projects */
/* *********** */
const projects = [
  {
    name: "Resume",
    img: "darshan-uiux-resume.png",

    liveUrl:
      "https://www.figma.com/design/nCpyBY1RHlQ9QPvqsp3U6I/Darshan-UI-UX-Resume-2024?node-id=43-2&t=w2TPpS3TAqGFeA9p-1 ",
    tags: ["resume"],
  },
  {
    name: "FitWrist Mobile App",
    img: "fitwrist-mobile-app.png",

    liveUrl:
      "https://www.figma.com/proto/vEpTjmGlKaxgANY0k6jD0Q/Smart-watch-E-Commerce-frame-1?node-id=2006-17&t=WAW9jlXi3NbHj2LO-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2006%3A17",
    tags: ["prototype"],
  },
  {
    name: "Logos design list",
    img: "logos-2.png",

    liveUrl:
      "https://www.figma.com/design/VktDCTl14wzVSzr6HFSC6j/LOGOS-Project1?node-id=0%3A1&t=sMBqz1ShejrF61ps-1",
    tags: ["uidesign"],
  },
  {
    name: "Brank-Kit Design",
    img: "brandkit.png",

    liveUrl:
      "https://www.figma.com/file/PiFcyoXhJlIYvvkJI9ZxJX/Design-Forge-Brand-KIT?type=design&node-id=0%3A1&mode=design&t=GXK3dKoxh663vzyR-1",
    tags: ["uidesign"],
  },
  {
    name: "Adden AI Website Mock-up",
    img: "adden-ai-website.png",

    liveUrl:
      "https://www.figma.com/proto/oqpQ2fzP9N7oeotnsmITgZ/Adden-AI-WEBSITE-Mock-up?node-id=1-2&t=FDuGm6bXJJ900AfX-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2",
    tags: ["website"],
  },
  {
    name: "Built For Flight Wireframe",
    img: "mobile_wireframe_1.png",

    liveUrl:
      "https://www.figma.com/proto/rISr4PzCjKlIh3oEHYlFs1/Wireframing-assignment-1?node-id=2-2&t=pXAYE4WHPCYVIniV-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1",
    tags: ["wireframe"],
  },
];

function renderProjects(tag) {
  let output = "";
  // <img src="img/project/${projects[i].img}" alt="Calculator Project Image">

  for (let i = 0; i < projects.length; i++) {
    if (tag == "all" || projects[i].tags.includes(tag)) {
      output += `<div class="project">
				<div class="project-img" style="
					background-image: url('img/project/${projects[i].img}');
				">
				</div>
				<a class="content flex" href="${projects[i].liveUrl}" target="_blank">
					<p>${projects[i].name}</p>
					<p class="flex">
						<img class="figma_icon" src="img/icon/figma.svg" alt="Figma Icon">
						<img class="external_icon" src="img/icon/arrow-up-right-from-square-solid.svg" alt="External link">
					</p>
				</a>
			</div> `;
    }
  }

  projectsEl.innerHTML = output;
}

renderProjects("all");
