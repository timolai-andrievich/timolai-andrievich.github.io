import { IPJSON } from "./IPJSON";

async function get_ip(): Promise<string> {
    let response: Response = await fetch("https://api.ipify.org/?format=json");
    let ip_json: IPJSON = await response.json() as IPJSON;
    let ip: string = ip_json.ip;
    return ip;
}

function inject_ip(ip: string): void {
    const ip_element: HTMLElement = document.querySelector("#ip") as HTMLElement;
    ip_element.innerText = ip;
}

get_ip().then(inject_ip);