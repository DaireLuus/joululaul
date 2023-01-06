let ticks = 0;
let rhytmCount = 0;
let tuneCount = 0;



window.onload = function(){
    //laeme Midi plugina
    MIDI.loadPlugin({
        soundfontUrl: 'https://tigu.hk.tlu.ee/~andrus.rinde/MIDI.js-master/soundfont/',
        instruments: ["violin", "brass_section", "glockenspiel", "church_organ"], 
        onprogress: function(state, progress){
            console.log(state, progress);
        },
        onsuccess: function(){
            console.log("Korras");
            MIDI.setVolume(0, 65);//kanal, väärtus
			MIDI.setVolume(1, 65);//kanal, väärtus
			MIDI.setVolume(2, 127);//kanal, väärtus
			MIDI.setVolume(3, 127);//kanal, väärtus
			MIDI.programChange(0, 40);
			MIDI.programChange(1, 61);
			MIDI.programChange(2, 9);
			MIDI.programChange(3, 19);
		    setButtons();
        }
    });
}



function setButtons(){
	document.querySelector("#soundBtn").innerHTML = "Mängi viisi!";
	document.querySelector("#soundBtn").addEventListener("mousedown", setMetronome);
		
}



function setMetronome(){
	if(ticks % 25 == 0){
		rhytm();
	}
	ticks ++;
	requestAnimationFrame(setMetronome);
}

function rhytm(){
	
	if(rhytmCount % 165 == 0){
		playTune();
	}
	
	rhytmCount ++;
}

function playTune(){
		
 	MIDI.noteOn(0, 72 , 65, 0);
	MIDI.noteOff(0, 72, 1.5);
	MIDI.noteOn(0, 72 , 65, 1.5);
	MIDI.noteOff(0, 72, 3);
	MIDI.noteOn(0, 72 , 65, 3);
	MIDI.noteOff(0,72, 4.5);
	MIDI.noteOn(0, 72 , 65, 4.5);
	MIDI.noteOff(0,72, 6);
	MIDI.noteOn(0, 72 , 65, 6);
	MIDI.noteOff(0,72, 7.5);
	MIDI.noteOn(0, 72 , 65, 7.5);
	MIDI.noteOff(0,72, 9);
	MIDI.noteOn(0, 72 , 65, 9);
	MIDI.noteOff(0,72, 11.5);
	MIDI.noteOn(0, 72 , 65, 11.5);
	MIDI.noteOff(0,72, 12);
	MIDI.noteOn(0, 74 , 65, 12);
	MIDI.noteOff(0,74, 13.5);
	MIDI.noteOn(0, 74 , 65, 13.5);
	MIDI.noteOff(0,74, 15);
	MIDI.noteOn(0, 74 , 65, 15);
	MIDI.noteOff(0,74, 16.5);
	MIDI.noteOn(0, 74 , 65, 16.5);
	MIDI.noteOff(0,74, 18);
	MIDI.noteOn(0, 72 , 65, 18);
	MIDI.noteOff(0,72, 19.5);
	MIDI.noteOn(0, 72 , 65, 19.5);
	MIDI.noteOff(0,72, 21);
	MIDI.noteOn(0, 72 ,65, 21);
	MIDI.noteOff(0,72, 22.5);
	MIDI.noteOn(0, 72 ,65, 22.5);
	MIDI.noteOff(0,72, 24);

	MIDI.noteOn(1, 28 , 65, 0);
	MIDI.noteOff(1,28, 3);
	MIDI.noteOn(1, 28 , 65, 3);
	MIDI.noteOff(1,28, 6);
	MIDI.noteOn(1, 28 , 65, 6);
	MIDI.noteOff(1,28, 9);
	MIDI.noteOn(1, 28 , 65, 9);
	MIDI.noteOff(1,28, 12);
	MIDI.noteOn(1, 31 , 65, 12);
	MIDI.noteOff(1,31, 15);
	MIDI.noteOn(1, 31 , 65, 15);
	MIDI.noteOff(1,31, 18);
	MIDI.noteOn(1, 28 , 65, 18);
	MIDI.noteOff(1,28, 21);
	MIDI.noteOn(1, 28 , 65, 21);
	MIDI.noteOff(1,28, 24);

	MIDI.noteOn(2, 55 , 127, 0);
	MIDI.noteOff(2,55, 3);
	MIDI.noteOn(2, 55 , 127, 3);
	MIDI.noteOff(2,55, 6);
	MIDI.noteOn(2, 55 , 127, 6);
	MIDI.noteOff(2,55, 9);
	MIDI.noteOn(2, 55 , 127, 9);
	MIDI.noteOff(2,55, 12);
	MIDI.noteOn(2, 59 , 127, 12);
	MIDI.noteOff(2,59, 15);
	MIDI.noteOn(2, 59 , 127, 15);
	MIDI.noteOff(2,59, 18);
	MIDI.noteOn(2, 55 , 127, 18);
	MIDI.noteOff(2,55, 21);
	MIDI.noteOn(2, 55 , 127, 21);
	MIDI.noteOff(2,55, 24);

	MIDI.noteOn(3, 43 , 127, 0);
	MIDI.noteOff(3,43, 1.5);
	MIDI.noteOn(3, 45 , 127, 1.5);
	MIDI.noteOff(3, 45, 2);
	MIDI.noteOn(3, 43 , 127, 2);
	MIDI.noteOff(3, 43, 3);
	MIDI.noteOn(3, 40 , 127, 3);
	MIDI.noteOff(3,40, 4.5);
	MIDI.noteOn(3, 40 , 127, 4.5);
	MIDI.noteOff(3,40, 6);
	MIDI.noteOn(3, 43 , 127, 6);
	MIDI.noteOff(3,43, 7.5);
	MIDI.noteOn(3, 45 , 127, 7.5);
	MIDI.noteOff(3, 45, 8);
	MIDI.noteOn(3, 43 , 127, 8);
	MIDI.noteOff(3, 43, 9);
	MIDI.noteOn(3, 40 , 127, 9);
	MIDI.noteOff(3,40, 10.5);
	MIDI.noteOn(3, 40 , 127, 10.5);
	MIDI.noteOff(3,40, 12);
	MIDI.noteOn(3, 50 , 127, 12);
	MIDI.noteOff(3,50, 14);
	MIDI.noteOn(3, 50 , 127, 14);
	MIDI.noteOff(3,50, 15);
	MIDI.noteOn(3, 47 , 127, 15);
	MIDI.noteOff(3,47, 16.5);
	MIDI.noteOn(3, 47 , 127, 16.5);
	MIDI.noteOff(3,47, 18);
	MIDI.noteOn(3, 48 , 127, 18);
	MIDI.noteOff(3,48, 20);
	MIDI.noteOn(3, 48 , 127, 20);
	MIDI.noteOff(3,48, 21);
	MIDI.noteOn(3, 43 , 127, 21);
	MIDI.noteOff(3,43, 22.5);
	MIDI.noteOn(3, 43 , 127, 22.5);
	MIDI.noteOff(3,43, 24);


	MIDI.noteOn(0, 72 , 65, 24);
	MIDI.noteOff(0, 72, 25.5);
	MIDI.noteOn(0, 72 , 65, 25.5);
	MIDI.noteOff(0, 72, 27);
	MIDI.noteOn(0, 72 , 65, 27);
	MIDI.noteOff(0,72, 28.5);
	MIDI.noteOn(0, 72 , 65, 28.5);
	MIDI.noteOff(0,72, 30);
	MIDI.noteOn(0, 72 , 65, 30);
	MIDI.noteOff(0,72, 31.5);
	MIDI.noteOn(0, 72 , 65, 31.5);
	MIDI.noteOff(0,72, 33);
	MIDI.noteOn(0, 72 , 65, 33);
	MIDI.noteOff(0,72, 34.5);
	MIDI.noteOn(0, 72 , 65, 34.5);
	MIDI.noteOff(0,72, 36);
	MIDI.noteOn(0, 72 , 65, 36);
	MIDI.noteOff(0,72, 37.5);
	MIDI.noteOn(0, 72 , 65, 37.5);
	MIDI.noteOff(0,72, 39);
	MIDI.noteOn(0, 72 , 65, 39);
	MIDI.noteOff(0,72, 40.5);
	MIDI.noteOn(0, 72 , 65, 40.5);
	MIDI.noteOff(0,72, 42);
	MIDI.noteOn(0, 72 , 65, 42);
	MIDI.noteOff(0,72, 43.5);
	MIDI.noteOn(0, 72 , 65, 43.5);
	MIDI.noteOff(0,72, 45);
	MIDI.noteOn(0, 72 , 65, 45);
	MIDI.noteOff(0,72, 46.5);
	MIDI.noteOn(0, 72 , 65, 46.5);
	MIDI.noteOff(0,72, 48);
	

	MIDI.noteOn(1, 29 , 65, 24);
	MIDI.noteOff(1,29, 27);
	MIDI.noteOn(1, 29 , 65, 27);
	MIDI.noteOff(1,29, 30);
	MIDI.noteOn(1, 28 , 65, 30);
	MIDI.noteOff(1,28, 33);
	MIDI.noteOn(1, 28 , 65, 33);
	MIDI.noteOff(1,28, 36);
	MIDI.noteOn(1, 29 , 65, 36);
	MIDI.noteOff(1,29, 39);
	MIDI.noteOn(1, 29 , 65, 39);
	MIDI.noteOff(1,29, 42);
	MIDI.noteOn(1, 28 , 65, 42);
	MIDI.noteOff(1,28, 45);
	MIDI.noteOn(1, 28 , 65, 45);
	MIDI.noteOff(1,28, 48);

	MIDI.noteOn(2,57 , 127, 24);
	MIDI.noteOff(2, 57, 27);
	MIDI.noteOn(2, 57 , 127, 27);
	MIDI.noteOff(2,57, 30);
	MIDI.noteOn(2, 55 , 127, 30);
	MIDI.noteOff(2,55, 33);
	MIDI.noteOn(2, 55 , 127, 33);
	MIDI.noteOff(2,55, 36);
	MIDI.noteOn(2, 57 , 127, 36);
	MIDI.noteOff(2,57, 39);
	MIDI.noteOn(2, 57 , 127, 39);
	MIDI.noteOff(2,57, 42);
	MIDI.noteOn(2, 55 , 127, 42);
	MIDI.noteOff(2,55, 45);
	MIDI.noteOn(2, 55 , 127, 45);
	MIDI.noteOff(2,55, 48);

	MIDI.noteOn(3,45 , 127, 24);
	MIDI.noteOff(3, 45, 26);
	MIDI.noteOn(3,45 , 127, 26);
	MIDI.noteOff(3, 45, 27);
	MIDI.noteOn(3, 48 , 127, 27);
	MIDI.noteOff(3,48, 28.5);
	MIDI.noteOn(3, 47 , 127, 28.5);
	MIDI.noteOff(3,47, 29);
	MIDI.noteOn(3, 45 , 127, 29);
	MIDI.noteOff(3,45, 30);
	MIDI.noteOn(3, 43 , 127, 30);
	MIDI.noteOff(3,43, 31.5);
	MIDI.noteOn(3, 45 , 127, 31.5);
	MIDI.noteOff(3,45, 32);
	MIDI.noteOn(3, 43 , 127, 32);
	MIDI.noteOff(3,43, 33);
	MIDI.noteOn(3, 40 , 127, 33);
	MIDI.noteOff(3,40, 34.5);
	MIDI.noteOn(3, 40 , 127, 34.5);
	MIDI.noteOff(3,40, 36);
	MIDI.noteOn(3, 45 , 127, 36);
	MIDI.noteOff(3,45, 38);
	MIDI.noteOn(3, 45 , 127, 38);
	MIDI.noteOff(3,45, 39);
	MIDI.noteOn(3, 48 , 127, 39);
	MIDI.noteOff(3,48, 40);
	MIDI.noteOn(3, 47 , 127, 40);
	MIDI.noteOff(3,47, 41);
	MIDI.noteOn(3, 45 , 127, 41);
	MIDI.noteOff(3,45, 42);
	MIDI.noteOn(3, 43 , 127, 42);
	MIDI.noteOff(3,43, 43.5);
	MIDI.noteOn(3, 45 , 127, 43.5);
	MIDI.noteOff(3,45, 44);
	MIDI.noteOn(3, 43 , 127, 44);
	MIDI.noteOff(3,43, 45);
	MIDI.noteOn(3, 40 , 127, 45);
	MIDI.noteOff(3,40, 46.5);
	MIDI.noteOn(3, 40 , 127, 46.5);
	MIDI.noteOff(3,40, 48);
	

	MIDI.noteOn(0, 74 , 65, 48);
	MIDI.noteOff(0, 74, 49.5);
	MIDI.noteOn(0, 74 , 65, 49.5);
	MIDI.noteOff(0, 74, 51);
	MIDI.noteOn(0, 74 , 65, 51);
	MIDI.noteOff(0,74, 52.5);
	MIDI.noteOn(0, 74 , 65, 52.5);
	MIDI.noteOff(0,74, 54);
	MIDI.noteOn(0, 72 , 65, 54);
	MIDI.noteOff(0,72, 55.5);
	MIDI.noteOn(0, 72 , 65, 55.5);
	MIDI.noteOff(0,72, 57);
	MIDI.noteOn(0, 72 , 65, 57);
	MIDI.noteOff(0,72, 58.5);
	MIDI.noteOn(0, 72 , 65, 58.5);
	MIDI.noteOff(0,72, 60);
	MIDI.noteOn(0, 72 , 65, 60);
	MIDI.noteOff(0,72, 61.5);
	MIDI.noteOn(0, 72 , 65, 61.5);
	MIDI.noteOff(0,72, 63);
	MIDI.noteOn(0, 74 , 65, 63);
	MIDI.noteOff(0,74, 64.5);
	MIDI.noteOn(0, 74 , 65, 64.5);
	MIDI.noteOff(0,74, 66);
	MIDI.noteOn(0, 72 , 65, 66);
	MIDI.noteOff(0,72, 67.5);
	MIDI.noteOn(0, 72 , 65, 67.5);
	MIDI.noteOff(0,72, 69);
	MIDI.noteOn(0, 72 , 65, 69);
	MIDI.noteOff(0,72, 70);
	

	MIDI.noteOn(1, 31 , 65, 48);
	MIDI.noteOff(1, 31, 51);
	MIDI.noteOn(1, 31 , 65, 51);
	MIDI.noteOff(1,31, 54);
	MIDI.noteOn(1, 28 , 65, 54);
	MIDI.noteOff(1,28, 57);
	MIDI.noteOn(1, 28 , 65, 57);
	MIDI.noteOff(1,28, 60);
	MIDI.noteOn(1, 28 , 65, 60);
	MIDI.noteOff(1,28, 63);
	MIDI.noteOn(1, 31 , 65, 63);
	MIDI.noteOff(1,31, 66);
	MIDI.noteOn(1, 28 ,65, 66);
	MIDI.noteOff(1,28, 69);
	
	MIDI.noteOn(2, 59 , 127, 48);
	MIDI.noteOff(2, 59, 51);
	MIDI.noteOn(2, 59 , 127, 51);
	MIDI.noteOff(2,59, 54);
	MIDI.noteOn(2, 55 , 127, 54);
	MIDI.noteOff(2,55, 57);
	MIDI.noteOn(2, 55 , 127, 57);
	MIDI.noteOff(2,55, 60);
	MIDI.noteOn(2, 55 , 127, 60);
	MIDI.noteOff(2,55, 63);
	MIDI.noteOn(2, 59 , 127, 63);
	MIDI.noteOff(2,59, 66);
	MIDI.noteOn(2, 55 , 127, 66);
	MIDI.noteOff(2,55, 69);

	MIDI.noteOn(3, 50 , 127, 48);
	MIDI.noteOff(3, 50, 50);
	MIDI.noteOn(3, 50 , 127, 50);
	MIDI.noteOff(3, 50, 51);
	MIDI.noteOn(3, 53 , 127, 51);
	MIDI.noteOff(3,53, 52.5);
	MIDI.noteOn(3, 50 , 127, 52.5);
	MIDI.noteOff(3,50, 53);
	MIDI.noteOn(3, 47 , 127, 53);
	MIDI.noteOff(3,47, 54);
	MIDI.noteOn(3,48 , 127, 54);
	MIDI.noteOff(3,48, 55.5);
	MIDI.noteOn(3,48 , 127, 55.5);
	MIDI.noteOff(3,48, 57);
	MIDI.noteOn(3, 52 , 127, 57);
	MIDI.noteOff(3,52, 58.5);
	MIDI.noteOn(3, 52 , 127, 58.5);
	MIDI.noteOff(3,52, 60);
	MIDI.noteOn(3, 48 , 127, 60);
	MIDI.noteOff(3,48, 61);
	MIDI.noteOn(3, 43 , 127, 61);
	MIDI.noteOff(3,43, 62);
	MIDI.noteOn(3, 40 , 127, 62);
	MIDI.noteOff(3,40, 63);
	MIDI.noteOn(3, 43 , 127, 63);
	MIDI.noteOff(3,43, 64.5);
	MIDI.noteOn(3, 41 , 127, 64.5);
	MIDI.noteOff(3,41, 65);
	MIDI.noteOn(3, 38 , 127, 65);
	MIDI.noteOff(3,38, 66);
	MIDI.noteOn(3, 36 , 127, 66);
	MIDI.noteOff(3,36, 68);
	MIDI.noteOn(3, 36 , 127, 68);
	MIDI.noteOff(3,36, 70);
	

}

