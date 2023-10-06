// Handles the music selection funtion
// User can choose which Songs to listen to
function SelectMusicTracks(){
  var track = Select.value();// The track = to selected value in the drop down box

  // IF the user choose song 1
  if(track == 'Song 1'){
    sound[currentSong].pause();// Pauses the music that it is Currently Playing
    currentSong = 0;// Choose the 1st song in the array
    sound[currentSong].play();// Plays the CHANGED TRACK
    //details of the song for displaying to user
    sound1Details = {
        title: 'TRIPPIN COFFEE',
        artist: 'Audionautix',
        album: 'Lo-Fi Album',
        licence: 'Licence-free from Creative Commons Attribution',
        site: 'creativecommons.org/licenses/by/4.0'
      }
    currentSongDetails = sound1Details;
  }
  // WHEN user choose song 2
  else if (track == 'Song 2'){
    sound[currentSong].pause();// Pauses the music that it is Currently Playing
    currentSong = 1;// Choose the 2nd song in the array
    sound[currentSong].play();// Plays the CHANGED TRACK
    //details of the song for displaying to user
    sound2Details = {
        title: 'RETROSOUL',
        artist: 'Benjamin Tissot',
        album: 'Funky soul piano Album',
        licence: 'Licence-free from Bensound',
        site: 'https://www.bensound.com/royalty-free-music/track/retro-soul'
      }
    currentSongDetails = sound2Details;
  }
  // WHEN user choose song 3
  if(track == 'Song 3'){
    sound[currentSong].pause();// Pauses the music that it is Currently Playing
    currentSong = 2;// Choose the 3RD  song in the array
    sound[currentSong].play();// Plays the CHANGED TRACK
    //details of the song for displaying to user
    sound3Details = {
        title: 'STAY ft. Justin Bieber',
        artist: 'The Kid LAROI',
        album: 'Columbia Records',
        licence: 'Licence from Universal Music Publishing Group',
        site: 'https://www.youtube.com/watch?v=kTJczUoc26U'
      }
    currentSongDetails = sound3Details;
  }
}
