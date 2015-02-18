/**
 * Created by cwenger on 2/16/2015.
 */

var beginningStrings = {
    pieces:[
        {
            title: "Kleiner Marsch",
            catNum: "BS-001",
            image: "images/Kleiner_Marsch.jpg",
            desc: "Kleiner Marsch (German for “little march”) is geared specifically for very beginning orchestra. Two main motives are present throughout, a light, playful “A” theme introduced by the celli and the smooth and lyrical “B” theme introduced by the violins.",
            audio: "audio/Kleiner_Marsch.mp3"
        },
        {
            title: "Driven!",
            catNum: "BS-002",
            image: "images/Driven.jpg",
            desc: "Accessible to even very beginning string players, Driven! will be an enjoyable popular-style selection in any concert program! Its simple structure and fast, energetic style are reminiscent of contemporary popular music. When played with the included drum accompaniment, students will feel like they are playing on a top 40 radio station.",
            audio: "audio/Driven.mp3"
        },
        {
            title: "Peril",
            catNum: "BS-003",
            image: "images/Peril.jpg",
            desc: "Peril is a driving tune in e dorian for beginning string players. Confined to a very narrow range with repetitive rhythmic and melodic motives, it is easily played for a first concert.",
            audio: "audio/peril.mp3"
        },
        {
            title: "Reely D",
            catNum: "BS-004",
            image: "images/Reely_D.jpg",
            desc: "Reely D is an emulation of a traditional Irish reel, or fast duple dancing song. Carefully written with only quarters and halves, it is easily playable (and enjoyable) by even very beginning players. Everyone has a chance to play the lively tune, and it’s sure to bring a little touch of Eire to your next concert!"
        }
    ],
    display: function(){
        for (var piece in beginningStrings.pieces){
            var formattedTitle = BegstringsTitle.replace("%data%", beginningStrings.pieces[piece].title);
            var formattedImage = BegstringsImg.replace("%data%", beginningStrings.pieces[piece].image);
            var formattedNum = BegstringsNum.replace("%data%", beginningStrings.pieces[piece].catNum);
            var formattedDesc = BegstringsDesc.replace("%data%", beginningStrings.pieces[piece].desc);
            $("#beginningStrings").append(BegstringsStart);
            $(".Beg-entry:last").append(formattedImage);
            $(".Beg-entry:last").append(formattedTitle + formattedNum + formattedDesc);
            $(".Beg-entry:last").append(BegstringsEnd);
        }
    }
};

var developingStrings = {
    pieces:[
        {
            title: "John Ryan's Polka",
            catNum: "DS-001",
            image: "images/John_Ryan.jpg",
            desc: "John Ryan’s Polka is a traditional reel (fast dancing song) from Ireland. It also sometimes goes by the name 'Forty foot float', referring to the popular swimming spot in the Irish Sea near Dublin. All parts have an opportunity to play the melody, so it’s sure to be a favorite folk music addition to any concert!",
            audio: "audio/John_Ryan.mp3"
        },
        {
            title: "Linstead Market",
            catNum: "DS-002",
            image: "images/Linstead.jpg",
            desc: "Linstead Market is a traditional Jamaican folk song about a mother who is unable to sell her ackee fruit at market. Its ebuillient Carribbean rhythm belies the sadness of the text.",
            audio: "audio/Linstead.mp3"
        },
        {
            title: "Jolly Island Wenceslaus",
            catNum: "DS-003",
            image: "images/Jolly_Island.jpg",
            desc: "The traditional English carol, Good King Wenceslaus gets the Carribbean treatment in this exciting arrangement. Every section has something fun to play and the syncopated bass line in the lower strings will have the orchestra groovin', mon!",
            audio: "audio/Jolly_Island.mp3"
        },
        {
            title: "Sevivon, Sevivon",
            catNum: "DS-004",
            image: "images/Sevivon.jpg",
            desc: "Sevivon, Sevivon, sometimes abbreviated S'Vivon, is a traditional Hebrew song from the Jewish Hannukah holiday. The text talks about the spinning of the dreidel and the reasons for celebrating Hannukah.",
            audio: "audio/Sevivon.mp3"
        },
        {
            title: "Intrigue",
            catNum: "DS-005",
            image: "images/Intrigue.jpg",
            desc: 'Miriam Webster defines "Intrigue" as "a secret plan," feelings of which are aroused when listening to this piece of the same name. Evoking thoughts and mental images of hidden moives, dark chases and duplicitous allies, Intrigue has an undercurrent of mystery and suspense.',
            audio: "audio/Intrigue.mp3"
        },
        {
            title: "Treacherous Connections",
            catNum: "DS-006",
            image: "images/Treacherous.jpg",
            desc: "Treacherous Connections creates mental images of the clandestine and dangerous world of high-stakes espionage. Minor tonality and insistent eighth note melodic and accompaniment figures evoke feelings of apprehension and invite the listener into the glamorous world of the cinematic spy.",
            audio: "audio/Treacherous.mp3"
        },
        {
            title: "The Valley Downs",
            catNum: "DS-007",
            image: "images/Valley_Downs.jpg",
            desc: "The Valley Downs emulates a traditional Irish reel, or dancing song. It's lively feel, triplet-based rhythms and stacatto quarter notes give it energy and motion.",
            audio: "audio/Valley_Downs.mp3"
        },
        {
            title: "Yellow Bird",
            catNum: "DS-008",
            image: "images/Yellow_Bird.jpg",
            desc: "Yellow Bird is a traditional folk song from the Caribbean, and flows with the relaxation and easy-going spirit of the islands. Singing of a beautiful woman, its laid-back calypso feel and lyrical melodic lines take the listener to the beach, painting a mental picture of the banana tree where the 'Yellow Bird' roosts. If you have a strong viola section, this piece is for your orchestra!",
            audio: "audio/Yellow_Bird.mp3"
        },
        {
            title: "Celebrations of Light",
            catNum: "DS-009",
            image: "images/Celebrations.jpg",
            desc: "Celebrations of Light is a set of two traditional Jewish Hannukah tunes. The gentle Ner Li tells of a candle and singing songs to celebrate Hannukah. Smooth, lyrical lines are almost a lullabye in this pleasant, soothing song.",
            audio: "audio/Celebrations.mp3"
        },
        {
            title: "Cold as Ice",
            catNum: "DS-010",
            image: "images/Cold.jpg",
            desc: "Since no one's ever met Santa Claus, we don't really know what he's like. this piece imagines him walking around, probably with a leather jacket, maybe red, and sunglasses. In short, Santa's one cool customer: he's Cold as Ice.",
            audio: "audio/Cold.mp3"
        },
        {
            title: "Troika",
            catNum: "DS-011",
            image: "images/Troika.jpg",
            desc: "The consummate winter concert piece, the Troika from Prokofiev's Leiutenant Kije Suite is a well-known and ebullient work, arranged here for string orchestra.",
            audio: "audio/Troika.mp3"
        }
    ],
    display: function(){
        for (var piece in developingStrings.pieces){
            var formattedTitle = DevstringsTitle.replace("%data%", developingStrings.pieces[piece].title);
            var formattedImage = DevstringsImg.replace("%data%", developingStrings.pieces[piece].image);
            var formattedNum = DevstringsNum.replace("%data%", developingStrings.pieces[piece].catNum);
            var formattedDesc = DevstringsDesc.replace("%data%", developingStrings.pieces[piece].desc);
            $("#developingStrings").append(DevstringsStart);
            $(".Dev-entry:last").append(formattedImage);
            $(".Dev-entry:last").append(formattedTitle + formattedNum + formattedDesc);
            $(".Dev-entry:last").append(DevstringsEnd);
        }
    }
};

var popularStyles = {
    pieces:[
        {
            title: "Kleiner Marsch",
            catNum: "BS-001",
            image: "images/Kleiner_Marsch.jpg",
            desc: "Kleiner Marsch (German for “little march”) is geared specifically for very beginning orchestra. Two main motives are present throughout, a light, playful “A” theme introduced by the celli and the smooth and lyrical “B” theme introduced by the violins.",
            audio: "audio/Kleiner_Marsch.mp3"
        },
        {
            title: "Driven!",
            catNum: "BS-002",
            image: "images/Driven.jpg",
            desc: "Accessible to even very beginning string players, Driven! will be an enjoyable popular-style selection in any concert program! Its simple structure and fast, energetic style are reminiscent of contemporary popular music. When played with the included drum accompaniment, students will feel like they are playing on a top 40 radio station.",
            audio: "audio/Driven.mp3"
        },
        {
            title: "Peril",
            catNum: "BS-003",
            image: "images/Peril.jpg",
            desc: "Peril is a driving tune in e dorian for beginning string players. Confined to a very narrow range with repetitive rhythmic and melodic motives, it is easily played for a first concert.",
            audio: "audio/peril.mp3"
        },
        {
            title: "Reely D",
            catNum: "BS-004",
            image: "images/Reely_D.jpg",
            desc: "Reely D is an emulation of a traditional Irish reel, or fast duple dancing song. Carefully written with only quarters and halves, it is easily playable (and enjoyable) by even very beginning players. Everyone has a chance to play the lively tune, and it’s sure to bring a little touch of Eire to your next concert!"
        }
    ],
    display: function(){
        for (var piece in popularStyles.pieces){
            var formattedTitle = PopstringsTitle.replace("%data%", popularStyles.pieces[piece].title);
            var formattedImage = PopstringsImg.replace("%data%", popularStyles.pieces[piece].image);
            var formattedNum = PopstringsNum.replace("%data%", popularStyles.pieces[piece].catNum);
            var formattedDesc = PopgstringsDesc.replace("%data%", popularStyles.pieces[piece].desc);
            $("#beginningStrings").append(BegstringsStart);
            $(".Beg-entry:last").append(formattedImage);
            $(".Beg-entry:last").append(formattedTitle + formattedNum + formattedDesc);
            $(".Beg-entry:last").append(BegstringsEnd);
        }
    }
};

beginningStrings.display();
developingStrings.display();

