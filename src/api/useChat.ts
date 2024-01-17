import { axios } from "@/utils/request/axios"
import { handleError } from "@/utils/request/handleError"

export const useChat = () => {
  const data = ref()
  const loading = ref(false)
  const run = async () => {
		try {
			//TODO 实现通义千问，调用接口
			loading.value = true
			const res = await axios.get('/api/chat')
			data.value = res.data
			return res.data
		} catch (error) {
			handleError(error)
		} finally {
			loading.value = false
		}
  }
  return {
		run,
		data,
		loading,
  }
}
