import flatten from "$utils/array/flatten";
import camelToKebab from "$utils/camelToKebab";

let nonSizeProps = [
	"opacity",
	"flex-grow",
	"font-weight",
	"z-index",
];

export default function(...styles) {
	let all = Object.assign({}, ...flatten(styles));
	let str = "";
	
	for (let k in all) {
		let prop = camelToKebab(k);
		let value = all[k];
		
		if (typeof value === "number" && value !== 0 && !nonSizeProps.includes(prop)) {
			value += "px";
		}
		
		if (value !== undefined) {
			str += prop + ": " + value + ";";
		}
	}
	
	return str;
}
