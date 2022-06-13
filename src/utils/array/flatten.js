import _typeof from "$utils/typeof";

function reduce(acc, val) {
	if (_typeof(val) === "Array") {
		return [...acc, ...flatten(val)];
	} else {
		return [...acc, val];
	}
}

function flatten(array) {
	return array.reduce(reduce, []);
}

export default flatten;
