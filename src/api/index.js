
const apikey = "a745c4c65e01443889e5cf862c2974f1";

export const fetchArticles = async(searchtext) => {
    let url = '';
    if (searchtext === "") {
        url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;
    } else 
    {
        url = `https://newsapi.org/v2/everything?q=${searchtext}&apiKey=${apikey}`;
    }
    
    const response = await fetch(`${url}`);
    const data = await response.json();
    if(response.code > 200) {
        throw new Error(response.message);
    }
    return data.articles;
}
