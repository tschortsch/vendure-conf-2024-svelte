export class Counter {
	value = $state(0);
	arr = $derived(Array.from({ length: this.value }).map((_, i) => i.toString()));

	constructor() {}

	increment() {
		this.value++;
	}
	decrement() {
		this.value--;
	}
}
