export default class API {
	static async test(query) {
		const body = {
			'text': query
		};
		return fetch('/api/test', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(res => res.json());
	}
}