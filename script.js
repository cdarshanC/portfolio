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
      "https://www.figma.com/design/nCpyBY1RHlQ9QPvqsp3U6I/Darshan-UI-UX-Resume-2024?node-id=0%3A1&t=AKBPsUVYgmzxOqIn-1",
    tags: ["resume"],
  },
  {
    name: "Logos design list",
    img: "logos.png",

    liveUrl:
      "https://www.figma.com/design/VktDCTl14wzVSzr6HFSC6j/LOGOS-Project1?node-id=0%3A1&t=sMBqz1ShejrF61ps-1",
    tags: ["logo"],
  },
  {
    name: "Brank-Kit Design",
    img: "brandkit.png",

    liveUrl:
      "https://www.figma.com/file/PiFcyoXhJlIYvvkJI9ZxJX/Design-Forge-Brand-KIT?type=design&node-id=0%3A1&mode=design&t=GXK3dKoxh663vzyR-1",
    tags: ["design"],
  },
  {
    name: "Website Mock-ups",
    img: "adden-ai-website.png",

    liveUrl:
      "https://www.figma.com/design/oqpQ2fzP9N7oeotnsmITgZ/Adden-AI-WEBSITE-Mock-up?node-id=0%3A1&t=86RAY5lKvuBqUzM3-1",
    tags: ["website"],
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
