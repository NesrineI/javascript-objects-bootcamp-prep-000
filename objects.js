var playlist = {Sia : "Dusk till dawn"}

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {artistName : songTitle})
  
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName 
}