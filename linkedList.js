class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.next = next;
	}
}

class linkedList {
	constructor() {
		this.head = null;
	}

	append(value) {
		if (!this.head) {
			this.head = new Node(value);
			return this;
		}
		let tail = this.getTail();
		tail.next = new Node(value);
		return tail;
	}

	prepend(value) {
		if (!this.head) {
			this.head = new Node(value);
			return this;
		}
		const prevHead = this.head;
		this.head = new Node(value, prevHead);
	}

	getTail() {
		if (!this.head) {
			return null;
		}
		let tail = this.head;
		while (tail.next !== null) {
			tail = tail.next;
		}
		return tail;
	}

	getHead() {
		return this.head;
	}

	size() {
		let counter = 0;
		let temp = this.head;
		while (temp !== null) {
			counter++;
			temp = temp.next;
		}
		return counter;
	}

	at(index) {
		if (!this.head) {
			return null;
		}
		let counter = this.head;
		for (let i = 0; i < index; i++) {
			counter = counter.next;
		}
		if (counter) {
			return counter;
		} else {
			return null;
		}
	}

	pop() {
		if (!this.head) {
			return null;
		}
		if (!this.head.next) {
			this.head = null;
			return;
		}
		let secondLastNode = this.at(this.size() - 2);
		secondLastNode.next = null;
	}

	contain(value) {
		if (!this.head) {
			return false;
		}
		let counter = this.head;
		while (counter) {
			if (value == counter.value) {
				return true;
			}
			counter = counter.next;
		}
		return false;
	}

	find(value) {
		if (!this.head) {
			return null;
		}
		let counter = this.head;
		for (let i = 0; i < this.size(); i++) {
			if (value == counter.value) {
				return i;
			}
			counter = counter.next;
		}
		return null;
	}

	toString() {
		if (!this.head) {
			return "null";
		}
		let reply = "";
		let counter = this.head;
		while (counter) {
			reply += `( ${counter.value} ) -> `;
			counter = counter.next;
		}
		reply += "null";
		return reply;
	}
}

const list = new linkedList();
list.append(2);
list.append(3);
list.append(4);
list.prepend(1);
console.log(list);
console.log(list.size());
console.log(list.at(3));
console.log(list.getHead());
list.pop();
console.log(list);
list.append(4);
console.log(list.contain(4));
console.log(list.find(4));
console.log(list.toString());
