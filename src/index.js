export default {
	async fetch(request, env, ctx) {
		const REQUESTURL = new URL(request.url)
		if (REQUESTURL.pathname === '') return Response.redirect('https://twitter.com/panley01')
		let _URL = REQUESTURL.pathname.slice(1, REQUESTURL.pathname.length)
		if (!_URL.startsWith('https://')) {
			if (!_URL.startsWith('http://')) {_URL = `https://${_URL}`}
		}
		const parsedURL = new URL(_URL)
		let r = await fetch('https://cdn.discordapp.com/bad-domains/updated_hashes.json')
		const badDomains = await r.json()
		const encoder = new TextEncoder()
		const domainHash = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(parsedURL.hostname)))).map((b) => b.toString(16).padStart(2, '0')).join('')
		if (badDomains.includes(domainHash)) return Response.redirect('https://twitter.com/panley01/status/1603834209646280721')
		r = await fetch(_URL)
		const body = await r.text()
		const responseBody = `<!DOCTYPE html>\n<head>${(body.split('<head>')[1]).split('</head>')[0]}<meta http-equiv="refresh" content="2;url=${_URL}" />\n</head>\n<body>\n<img src="https://http.cat/301">\n</body>`
		if (REQUESTURL.searchParams.get('dev')) return new Response(responseBody)
		return new Response(responseBody, {headers: {'content-type': 'text/html; charset=utf-8'}})
	}
}
