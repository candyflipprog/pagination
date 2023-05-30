export async function getPages(id) {
  let response = await fetch(
    `https://gorest.co.in/public-api/posts?page=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data = await response.json();
  return data;
};