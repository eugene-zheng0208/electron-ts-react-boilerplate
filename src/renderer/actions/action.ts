export const INCREMENT = "INCREMENT";
export type INCREMENT  = "INCREMENT";

export function increment() {
	return {type: INCREMENT, count: 1};
}

export const DECREMENT = "DECREMENT";
export type DECREMENT  = "DECREMENT";

export function decrement() {
	return {type: DECREMENT, count: 1};
}
