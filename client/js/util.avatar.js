function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var avatar_list = [
	"default.png",
        "default-1.png",
	"3f59618c3d603a7be231307e7fb112a8.png",
	"71eeba017fd2791b3011c135913193e4.png",
	"65120c2e3c79ff223bd6764f5a35e925.png",
	"b949ff1ffa7e6d2d653e8a7eec68f0ea.png"
]

export function createAvatarSVG(userName) {

	if (userName == "BA4IHR" || userName == "CMSK") {
		return `<svg xmlns="http://www.w3.org/2000/svg" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  width="1000" height="1000">
                 <image xlink:href="https://file-1.御坂网络.100320721.xyz/image/avatar/default.png" 
                        height="1000" width="1000"/>
                </svg>`;
	}else{
		return `<svg xmlns="http://www.w3.org/2000/svg" 
           xmlns:xlink="http://www.w3.org/1999/xlink" 
           width="1000" height="1000"
           viewBox="0 0 1000 1000">
         <image 
           xlink:href="https://file-1.御坂网络.100320721.xyz/image/avatar/${avatar_list[getRandomInt(0,avatar_list.length-1)]}" 
           width="1000" 
           height="1000"
           preserveAspectRatio="xMidYMid slice"/>
        </svg>`;
	}
	
}

