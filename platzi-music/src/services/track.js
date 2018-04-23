import platMusicService form './platzi-music'

const trackService = {}

trackService.search = function (q) {
	const type = 'track'

	return platMusicService.get('/search=' , {
		params: {
			q, type
		}
	})
	.then((res) =>{
		return res.data
	})
}
export default trackService