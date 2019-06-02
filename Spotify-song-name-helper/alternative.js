track_info_element = document.querySelector("div.track-info.ellipsis-one-line");
track_name_element = track_info_element.querySelector("a");
track_name = track_name_element.childNodes[0].wholeText + " ";


track_artists_element = track_info_element.querySelector("div.track-info__artists.ellipsis-one-line");
track_artists = track_artists_element.querySelectorAll("a");
artists_name = ""
for (const artist_element of track_artists) {
	artists_name += artist_element.childNodes[0].wholeText + ", ";
}
artists_name = artists_name.substring(0, artists_name.length-2);

document.title = track_name + artists_name + " - YouTube";