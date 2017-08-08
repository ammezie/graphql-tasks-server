const resolvers = {
    Query: {
        hello(root){
            return 'world';
        }
        // getArtist(root, args){
        //     return args;
        // },
        // getAlbum(){

        // },
        // getTrack(){

        // },
        // Artist: {
        //     albums: (artist) => {}, // return array of artist's albums
        //     tracks: (artist) => {}, // return array of artist's tracks
        // },
        // Track: {
        //     album: (track) => {} // return track's album
        //     artists: (track) => {} // return track's artists
        // },
        // Album: {
        //     artists: (album) => {} // return album's artists
        //     tracks: (album) => {}, // return array of album's tracks
        // }
    }
};

module.exports = resolvers;