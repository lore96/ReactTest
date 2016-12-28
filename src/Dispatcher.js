const counter = (state = 0, action) => {
	switch(action.type){
		case 'INCREMENT':
			console.log(state + 1); 
			return state + 1;
		case 'DECREMENT':
			console.log(state + 1); 
			return state - 1;
		default:
			console.log(state);
			return state;
	}
}

const createStore = (reducer) => {
	let state;
	let listeners = [];
	const getState = () => state;
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};
	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		}
	};

	dispatch({});
	return { getState, dispatch, subscribe }
};
 
const store = createStore(counter);

console.log(store.getState());

const render = () => {
	document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
	store.dispatch({ type: 'INCREMENT'});
})

