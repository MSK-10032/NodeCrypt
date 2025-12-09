function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var avatar_list = [
	"default.png",
	"default-1.png",
	"4faf71afa986447c2d726e39be8e4b60b4b776cc8b187dcab476a94f5b1f5036.png",
	"43ec3bfe3ceae4dd29124b8d07074f537b8e8491f939ff74fba09bf5690ef432.png",
	"829dfbe3b0610ce32e7945bfb1c1a6b913305977eb8aed555f73a3d8b1c2ea9d.png"
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


