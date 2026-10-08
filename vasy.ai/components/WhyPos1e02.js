export const whypos = (pos) => {
    // Get the container element
    const PosContainer = document.getElementById('whyposdata');

    // 
    const WhyPosInnerHTML = `
        <div id="pos-software" class="pos">
            ${WhyPosData.map((posdata) => `
                <div class="slide">
                    <div class="carousel-image">
                        <div class="image">
                                        <img src=${posdata.imgSrc}
                                            alt="${posdata.altText}"
                                            class="img-fluid col-lg-3 col-2 p-2 p-md-3 b-r-10">
                        </div>
                        <h4 class="fw-bold">${posdata.title}</h4>
                        <p class="mb-0">${posdata.description}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    // Set the generated HTML inside the carousel container
    PosContainer.innerHTML = WhyPosInnerHTML;

}


