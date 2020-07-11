import './data/indonesia.js';
import './data/provinsi.js';

function main(){
	let urlHandler = () => {
		if(location.hash == ""){
			document.querySelector("main about").style.display = "none"
			document.querySelector("main home").style.cssText = ""
		}
		if(location.hash == "#about"){
			document.querySelector("main home").style.display = "none"
			document.querySelector("main about").style.cssText = ""
		}
	}
	urlHandler()
	window.onhashchange = () => urlHandler()
}

export default main