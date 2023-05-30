export async function getArticles(id) {
    let response = await fetch(`https://gorest.co.in/public-api/posts/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    let data = await response.json();
    return data;
}