import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:8000/api/v1/'
})

api.interceptors.request.use(
	function (config) {
		config.headers = {}
		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

export default api
