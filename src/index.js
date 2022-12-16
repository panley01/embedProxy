export default {
	async fetch(request, env, ctx) {
		const REQUESTURL = new URL(request.url)
		if (REQUESTURL.pathname === '') return Response.redirect('https://twitter.com/panley01')
		let _URL = REQUESTURL.pathname.slice(1, REQUESTURL.pathname.length)
		if (!_URL.startsWith('https://')) {
			if (!_URL.startsWith('http://')) {_URL = `https://${_URL}`}
		}
		const r = await fetch(_URL)
		const body = await r.text()
		const responseBody = `<!DOCTYPE html>\n<head>${(body.split('<head>')[1]).split('</head>')[0]}<meta http-equiv="refresh" content="2;url=${_URL}" />\n</head>`
		if (REQUESTURL.searchParams.get('dev')) return new Response(responseBody)
		return new Response(responseBody, {headers: {'content-type': 'text/html; charset=utf-8'}})
	}
}
