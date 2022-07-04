console.log('***** Music Collection *****')

let collection = [];
/**
 * @param {string} title
 * @param {string} artist
 * @param {number} yearPublished
 * @return {object} Returns new object  
 */ 
function addToCollection(title, artist, yearPublished, tracks) {
    const newRecord = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    };
    collection.push(newRecord);
    return newRecord;
};

console.log(addToCollection('American Teen', 'Khalid', 2017, ['American Teen: 4:10', 'Young Dumb & Broke: 3:22', 'Location: 3:39', 'Another Sad Love Song: 4:04', 'Saved: 3:26', 'Coaster: 3:19', '8TEEN: 3:47', 'Let\'s Go: 3:23', 'Hopeless: 2:47', 'Cold Blooded: 3:27', 'Winter: 4:01', 'Therapy: 4:17', 'Keep Me: 4:36', 'Shot Down: 3:27']));
console.log(addToCollection('Atlas:Enneagram', 'Sleeping At Last', 2019, ['One: 3:22', 'Two: 4:18', 'Three: 4:06', 'Four: 4:51', 'Five: 5:55', 'Six: 4:14', 'Seven: 4:21', 'Eight: 4:09', 'Nine: 5:19']));
console.log(addToCollection('The Click', 'AJR', 2017, ['Overture: 3:34', 'The Good Part: 3:47', 'Weak: 3:21', 'Sober Up: 3:38', 'Drama: 3:24', 'Turning Out: 4:20', 'No Grass Today: 4:19', 'Three-Thirty: 3:30', 'Call My Dad: 2:15', 'I\'m Not Famous: 3:40', 'Netflix Trip: 3:57', 'Bud Like You: 3:50', 'Come Hang Out: 4:25']));
console.log(addToCollection('The Lumineers', 'The Lumineers', 2012, ['Flowers in Your Hair: 1:48', 'Classy Girls: 2:45', 'Submarines: 2:43', 'Dead Sea: 4:07', 'Ho Hey: 2:42', 'Slow It Down: 5:06', 'Stubborn Love: 4:38', 'Big Parade: 5:27', 'Charlie Boy: 4:21', 'Flapper Girl: 3:15', 'Morning Song: 5:16']));
console.log(addToCollection('WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 'Billie Eilish', 2019, ['!!!!!!!: 0:13', 'bad guy: 3:13', 'xanny: 4:03', 'you should see me in a crown: 3:00','all the good girls go to hell: 2:48', 'wish you were gay: 3:41', 'when the party\'s over: 3:16', '8: 2:52', 'my strange addiction: 2:59', 'bury a friend: 3:13', 'ilomilo: 2:36', 'listen before i go: 4:02', 'i love you: 4:51', 'goodbye: 1:59']));
console.log(addToCollection('folklore', 'Taylor Swift', 2020, ['the 1: 3:30', 'cardigan: 3:59', 'the last great american dynasty: 3:50', 'exile: 4:45', 'my tears ricochet: 4:15', 'mirrorball: 3:28', 'seven: 3:28', 'august: 4:21', 'this is me trying: 3:15', 'illicit affairs: 3:10', 'invisible string: 4:12', 'mad woman: 3:57', 'epiphany: 4:49', 'betty: 4:54', 'peace: 3:54', 'hoax: 3:40']));
console.log(addToCollection('OK Orchestra', 'AJR', 2021, ['OK Overture: 4:31', 'Bummerland: 3:09', '3 O\'Clock Things: 3:48', 'My Play: 3:10', 'Joe: 3:32', 'Adventure Is Out There: 3:31', 'Band!: 2:50', 'The Trick: 2:50', 'Ordinaryish People: 3:39', 'Humpty Dumpty: 3:37', 'World\'s Smallest Violin', 'Way Less Sad: 3:26', 'Christmas in June: 4:39']));
// Added extra album to collection to have same artist twice (findByArtist)
console.log(collection);

/**
 * @param {array} recordsInput Array of record collection
 */
function showCollection(recordsInput) {
    console.table(recordsInput);
    for (let record of recordsInput) {
        console.log(record.title + ' by ' + record.artist + ',', 'published in', record.yearPublished, record.tracks);
    };
}
showCollection(collection);

// Not sure how to display the list of tracks as numbered list for each album (Line 66-72 in README file)

/**
 * @param {string} artistInput artist to search for
 * @param collectionInput collection to look through
 * @return returns an array with matching artist
 */
function findByArtist(artistInput, collectionInput) {
    let foundArtists = [];
    for(let artist of collectionInput) {
        if (artistInput === artist.artist) {
            foundArtists.push(artist.artist);
        } 
    }
    return foundArtists;
}
console.log(findByArtist('Khalid', collection));

/**
 * @param {string} searchInput 
 * @return returns an array of items in collection matching search criteria 
 */
function search(searchInput, collectionInput) {
    let searchResults = [];
    for(let objectItem of collectionInput) {
        if (searchInput === objectItem.title || searchInput === objectItem.artist || searchInput === objectItem.yearPublished || searchInput === objectItem.tracks) {
            searchResults.push('title: ', objectItem.title, 'artist: ' + objectItem.artist, 'year: ' + objectItem.yearPublished, 'trackName: ' + objectItem.tracks);
        }
    }
    if (searchInput === '') {
        return collectionInput;
    }
    return searchResults;
}

console.log(search('Khalid', collection));
// Not sure how to return 'collection' if "there is no search object". I get an error when trying to return no search object.


