
const apikey = "a745c4c65e01443889e5cf862c2974f1";
const search = ""
var defaultUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;
var url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apikey}`;
         

export const fetchArticles = async() => {
    const response = await fetch(`${defaultUrl}`);
    const data = await response.json();
    if(response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}
