export const keyfeatures = (features) => {
    // Get the container element
    const benefitsContainer = document.getElementById('keyfeaturesdata');

    // 
    const featureInnerHTML = `
        <div id="keyfeatures" class="benefits">
            ${featureData.map((feature) => `
                <div class="slide">
                    <div class="carousel-image">
                        <h4>${feature.title}</h4>
                        <p class="fs-6">${feature.content}</p>
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    // Set the generated HTML inside the carousel container
    benefitsContainer.innerHTML = featureInnerHTML;

}


