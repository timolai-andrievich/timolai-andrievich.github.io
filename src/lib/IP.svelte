<script lang="ts">
	interface IpJson {
		ip: string;
	}
	async function getIp(): Promise<string> {
		let response: Response = await fetch('https://api.ipify.org/?format=json');
		let ipJson: IpJson = (await response.json()) as IpJson;
		return ipJson.ip;
	}
	let ipString = '127.0.0.1';
	getIp().then((ip) => (ipString = ip));
</script>

<p>Your IP is {ipString}</p>
