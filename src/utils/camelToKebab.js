export default function(str) {
	return str.replace(/([A-Z])/g, (_, ch) => "-" + ch.toLowerCase());
}
