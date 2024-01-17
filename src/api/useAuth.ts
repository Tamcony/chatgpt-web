import { axios } from "@/utils/request/axios"
import { handleError } from "@/utils/request/handleError"

export const useAuth = () => {
	const data = ref()
	const loading = ref(false)
	const run = async () => {
		try {
			//TODO 这里获取token，调用 authStore.setToken(secretKey)存储token
			loading.value = true
			const res = await axios.get('/api/auth')
			data.value = res.data
			return res.data
		} catch (error) {
			handleError(error)
		}
	}
	return {
		run, data, loading
	}
}

