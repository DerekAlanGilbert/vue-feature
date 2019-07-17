export default {
	namespaced: true,
	state: {
		data: null,
		user: {
			email: 'derek.gilbert@company.com',
			firstName: 'Derek',
			lastName: 'Gilbert'
		}
	},
	getters: {
		user: ({ user }) => user,
		data: ({ data }) => data
	},
	mutations: {
		SET_DATA(state, payload) {
			state.data = payload
		}
	},
	actions: {
		getDataV1({ commit }) {
			console.log('v1')

			fetch('https://jsonplaceholder.typicode.com/todos')
				.then(response => response.json())
				.then(json => {
					commit('SET_DATA', json)
				})
		},
		getDataV2({ commit }) {
			console.log('v2')
			fetch(' https://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(json => {
					commit('SET_DATA', json)
				})
		}
	}
}
