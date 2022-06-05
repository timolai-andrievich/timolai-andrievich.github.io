async function get_ip(){
    response = await fetch("https://api.ipify.org/?format=json");
    json = await response.json();
    return json.ip;
}
let ip_span = document.querySelector("span#ip");
get_ip().then(ip => ip_span.innerText = ip);