var songId = 0;

let songsList = [
{name:"Munbe.mp3",title:"Munbe Vaa En Anbe va"},
	{name:"idhazhin.mp3",title:"Idhazhin oru oram(3 song)"},
		{name:"fuse.mp3",title:"En Fuse pochau"},
			{name:"askku.mp3",title:"askku lassku"},
				{name:"pesadhae.mp3",title:"Pesadhae song"},
				{name:"Thuli.mp3",title:"Thuli Thuli"}
];
songsList.forEach(element => {
    var x = document.createElement("LI");
    x.innerHTML = element;
    document.getElementById("playlist").appendChild(x);
});

function displaySongsList(){
    songsList.forEach(element => {
        var x = document.createElement("LI");
        x.innerHTML = element;
        document.getElementById("playlist").appendChild(x);
    });
}
displaySongsList();
function playSong(){
    document.getElementById("songName").innerHTML = songsList[songId].name;
    document.getElementById("playlist").play();
}
function pauseSong(){
    document.getElementById("playlist").pause();
}
function changeSong(){
    songId = (songId + 1) % songsList.length;
    console.log("Now Playing " + songsList[songId].name);
    document.getElementById("songName").innerHTML = songsList[songId].name;
    document.getElementById("playlist").src = "";
    document.getElementById("playlist").src = songsList[songId].name;
    playSong();
} 
var table = document.getElementById("songList");
for(let i=0;i<songsList.length;i++)
{
	var row=table.insertRow(i);
	var cell1=row.insertCell(0);
	cell1.innerHTML=songsList[i].title;
	cell1.clickable=true;
}
let count=0;
var tbl = document.getElementById("songList");
if (tbl != null) {
    for (var i = 0; i < tbl.rows.length; i++) {
				for (var j = 0; j < tbl.rows[i].cells.length; j++)
			
                    tbl.rows[i].cells[j].onclick = ()=> { getval(); };
            }
        }
function getval() {
	document.getElementById("songName").innerHTML = songsList[count].name;
	document.getElementById("playlist").src = "";
	document.getElementById("playlist").src = songsList[count].name;
	playSong();
	count=count+1;
	displaySongsList();
	if(count==songList.length-1)
		count=0;	
	
	
}
            		
		
		
		