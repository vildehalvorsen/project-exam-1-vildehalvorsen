const url = "https://vildehalvorsen.one/wp-json/wp/v2/pages/";
const aboutContainer = document.querySelector(".aboutContainer");


async function getInfo() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        for (let i = 0; i < results.length; i++) {
            const title = results[i].title.rendered;
            const content = results[i].content.rendered;

            aboutContainer.innerHTML += `<h1>${title}</h1>
                                    <p>${content}</p>`;
        }
    } catch (error) {
        console.log(error);
        latestPosts.innerHTML = "OPS! something happened";
    }
}


getInfo();