import { makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
enableStaticRendering(true)
const initialState = {}

class Store {
	state = initialState
	constructor() {
		makeAutoObservable(this, null, { autoBind: true })
	}
	init(data) {
		this.resetState()
		this.state = data
	}
	resetState() {
		this.state = initialState
	}
}

export default new Store()
