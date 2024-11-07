const qoutes = ['“Friendship ... is born at the moment when one man says to another <br> "What! You too? I thought that no one but myself <br> Lewis, The Four Loves'
    ,"If you tell the truth, you don't have to remember anything.<br>― Mark Twain" 
    , 
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”"
     , "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
     , "Be yourself; everyone else is already taken.― Oscar Wilde"
     , "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
     , "So many books, so little time."
     , "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
     , "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.― Bernard M. Baruch"
     , "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.― William W. Purkey"
     , "ou only live once, but if you do it right, once is enough.― Mae West"
     , "Be the change that you wish to see in the world.― Mahatma Gandhi"
     , "In three words I can sum up everything I've learned about life: it goes on.― Robert Frost"
     , "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.― J.K. Rowling"
     , "Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend― Albert Camus"
     , "If you tell the truth, you don't have to remember anything.― Mark Twain"
     , "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.― Maya Angelou"
     , "A friend is someone who knows all about you and still loves you.― Elbert Hubbard"
     , "To live is the rarest thing in the world. Most people exist, that is all.― Oscar Wilde"

    ]




    
    
    
    
    
    
    
    
    




var quoteNum = qoutes.length;




var old;


var p = document.getElementById('qoute');
function showQoute() {
    
    var  qouteIndex;
    do {
        qouteIndex = Math.floor(Math.random() * quoteNum);     
        
    }  while (qouteIndex === old)
        p.innerHTML = qoutes[qouteIndex]; 
        old = qouteIndex ;
    
    }



