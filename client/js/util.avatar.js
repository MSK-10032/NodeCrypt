function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var avatar_list = [
	"default.png",
	"default-1.png",
	"onc.png",
	"onc-1.png",
	"onc-2.png"
]

function userRanAvatar(str, min, max) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    hash = Math.abs(hash)
    return Math.floor((hash % (max - min + 1)) + min);
}

export function createAvatarSVG(userName) {

	if (userName == "BA4IHR" || userName == "CMSK") {
		return `<svg xmlns="http://www.w3.org/2000/svg" 
           xmlns:xlink="http://www.w3.org/1999/xlink" 
           width="1000" height="1000"
           viewBox="0 0 1000 1000">
         <image 
           xlink:href="https://file-1.御坂网络.100320721.xyz/image/avatar/default.png" 
           width="1000" 
           height="1000"
           preserveAspectRatio="xMidYMid slice"/>
        </svg>`;
	}else{
		return `<svg xmlns="http://www.w3.org/2000/svg" 
           xmlns:xlink="http://www.w3.org/1999/xlink" 
           width="1000" height="1000"
           viewBox="0 0 1000 1000">
         <image 
           xlink:href="https://file-1.御坂网络.100320721.xyz/image/avatar/${avatar_list[userRanAvatar(userName,0,avatar_list.length-1)]}" 
           width="1000" 
           height="1000"
           preserveAspectRatio="xMidYMid slice"/>
        </svg>`;
	}
	
}


