function solution(genres, plays) {
    var answer = [];
    
    // genres_plays[i] = [plays, genres]
    let genres_plays = [];
    
    // totalPlays = {classic: 100, pop: 200, ...}
    let totalPlays = {};
    
    // countGenres = {classic: 1}
    // counting twice...
    let countGenres = {};
    
    for(let i=0;i<genres.length;i++){
        if(totalPlays[genres[i]] === undefined){
            countGenres[genres[i]] = 0;
            totalPlays[genres[i]] = plays[i];
        } else {
            totalPlays[genres[i]] += plays[i];
        }
        genres_plays.push({genre: genres[i], play: plays[i], idx: i});
    }
    
    genres_plays.sort(function(x,y){
        if(totalPlays[x.genre] > totalPlays[y.genre]){
            return -1;
        } else if (totalPlays[x.genre] === totalPlays[y.genre]){
            if(x.play > y.play) return -1;
            else if(x.play < y.play) return 1;
            else {
                if(x.idx < y.idx) return -1;
                else return 1;
            }
        } else return 1;
    });
    
    for(let t in genres_plays){
        if(countGenres[genres_plays[t].genre] < 2){
            countGenres[genres_plays[t].genre]++;
            answer.push(genres_plays[t].idx);
        }
    }
    
    return answer;
}