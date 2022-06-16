import type { IpJson } from "./IpJson";

async function getIp(): Promise<string> {
    let response: Response = await fetch("https://api.ipify.org/?format=json");
    let ipJson: IpJson = await response.json() as IpJson;
    return ipJson.ip;
}

function injectIp(ip: string): void {
    const ipElement: HTMLElement = document.querySelector("#ip") as HTMLElement;
    ipElement.innerText = ip;
}

getIp().then(injectIp);