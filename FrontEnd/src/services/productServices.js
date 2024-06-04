function getProducts() {
    return fetch('https://final-project-compu-b6l8ijhnk-osejos-projects.vercel.app/products', {
    }).then(response => response.json());
}

export { getProducts };