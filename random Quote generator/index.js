const quotes = [
    {
        id: 1,
        quote:"Life isn’t about getting and having, it’s about giving and being.",
        author:"Kevin Kruse"
    },
    {
        id:2 ,
        quote:"Whatever the mind of man can conceive and believe, it can achieve.",
        author:"Napoleon Hill"
    },

    {
        id: 3,
        quote:"Strive not to be a success, but rather to be of value.",
        author:"Albert Einstein"
    },
    {
        id:4 ,
        quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        author:"Robert Frost"
    },
    {
        id: 5,
        quote:"I attribute my success to this: I never gave or took any excuse.",
        author:"Florence Nightingale"
    },
    {
        id: 6,
        quote:"You miss 100% of the shots you don’t take",
        author:"Wayne Gretzky"
    },
    {
        id: 7,
        quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        author:"Michael Jordan"
    },
    {
        id: 8,
        quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",
        author:"Amelia Earhart"
    },
    {
        id:9 ,
        quote:"Every strike brings me closer to the next home run.",
        author:"Babe Ruth"
    },
    {
        id:10 ,
        quote:"Definiteness of purpose is the starting point of all achievement.",
        author:"W. Clement Stone"
    },
    {
        id:11 ,
        quote:"We must balance conspicuous consumption with conscious capitalism.",
        author:"Kevin Kruse"
    },
    {
        id:12 ,
        quote:"Life is what happens to you while you’re busy making other plans.",
        author:"John Lennon"
    },
    {
        id: 13,
        quote:"Life is 10% what happens to me and 90% of how I react to it.",
        author:"Charles Swindoll"
    },
    {
        id:14 ,
        quote:"Your time is limited, so don’t waste it living someone else’s life.",
        author:"Steve Jobs"
    },
    {
        id:15 ,
        quote:"Whether you think you can or you think you can’t, you’re right.",
        author:"Henry Ford"
    },
    {
        id:16 ,
        quote:"The two most important days in your life are the day you are born and the day you find out why.",
        author:"Mark Twain"
    },
    {
        id:17,
        quote:"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
        author:"Zig Ziglar"
    },
    {
        id:18,
        quote:"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
        author:"Erma Bombeck"
    },
    {
        id:19,
        quote:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
        author:"Helen Keller"
    },
    {
        id:20,
        quote:"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
        author:"Aristotle"
    },
    {
        id:21,
        quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        author:"Dalai Lama"
    },
    {
        id:22,
        quote:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
        author:"Henry Ford"
    },
    {
        id:23,
        quote:"It’s not the years in your life that count. It’s the life in your years.",
        author:"Abraham Lincoln"
    },
    {
        id:24,
        quote:"Either write something worth reading or do something worth writing.",
        author:"Benjamin Franklin"
    },
    {
        id:25,
        quote:"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
        author:"Jamie Paolinetti"
    },
    {
        id:26,
        quote:"All our dreams can come true, if we have the courage to pursue them.",
        author:"Walt Disney"
    },
    {
        id:27,
        quote:"Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        author:"Mary Kay Ash"
    },
    {
        id:28,
        quote:"We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
        author:"Arianna Huffington"
    },
    {
        id:29,
        quote:"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
        author:"Socrates"
    },
    {
        id:30,
        quote:"If something is important enough, even if the odds are stacked against you, you should still do it.",
        author:"Elon Musk"
    },
    {
        id:31,
        quote:"Magic is believing in yourself. if you can make that happen, you can make anything happen.",
        author:"johann Wolfgang Von Goethe"
    },
    {
        id:32,
        quote:"Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.",
        author:"K’wan"
    },
    {
        id:33,
        quote:"How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        author:"Anne Frank"
    },
    {
        id:34,
        quote:"Some people want it to happen, some wish it would happen, others make it happen.",
        author:"Michael Jordan"
    },
    {
        id:34,
        quote:"Keep your eyes on the stars, and your feet on the ground.",
        author:"Theodore Roosevelt"
    },
    {
        id:35,
        quote:"Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success, that is way great spiritual giants are produced.",
        author:"Swami Vivekananda"
    },
    {
        id:36,
        quote:"Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        author:"Thomas Edison"
    },
    {
        id:37,
        quote:"You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul",
        author:"Swami Vivekananda"
    },
    {
        id:38,
        quote:"Arise,awake and do not stop until the goal is reached.",
        author:"Swami Vivekananda"
    },
    {
        id:39,
        quote:"We have what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far",
        author:"Swami Vivekananda"
    },
    {
        id:40,
        quote:"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
        author:"Bob Dylan"
    },
    {
        id:41,
        quote:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
        author:"Leonardo da Vinci"
    },
    {
        id:42,
        quote:"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
        author:"Marie Curie"
    },
    {
        id:43,
        quote:"When I let go of what I am, I become what I might be",
        author:"Lao Tzu"
    },
    {
        id:45,
        quote:"Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
        author:"Lao Tzu"
    },
    {
        id:46,
        quote:"Kindness in words creates confidence. Kindness in in thinking creates profoundness. Kindness in giving creates love",
        author:"Lao Tzu"
    },
    {
        id:47,
        quote:"Truthfull words are not beautifull; beautifull words are not truthfull. Good words are not persuasive; persuasive words are not good ",
        author:"Lao Tzu"
    },
    {
        id:48,
        quote:"By letting it go it all gets done. The world is won by those who let it go. But when you try and try. The world is beyond the winning.",
        author:"Lao Tzu"
    },
    {
        id:49,
        quote:"All warfare is based on deception.",
        author:"Sun Tzu"
    },
    {
        id:50,
        quote:"To fight and conquer in all our battles is not supreme excellence; supreme excellence consists in breaking the enemy's resistance without fighting.",
        author:"Sun Tzu"
    },
    {
        id:51,
        quote:"If you know the enemy and you know yourself, your victory will not stand in doubt; if you know Heaven and you know Earth, you may make your victory complete.",
        author:"Sun Tzu"
    },
    {
        id:52,
        quote:"The art of war teaches us to rely not on the likelihood of the enemy's not coming, but on our own readiness to receive him; not on the chance of his not attacking, but rather on the fact that we have made our position unassailable.",
        author:"Sun Tzu"
    }
]



const quoteBtn = document.getElementById("quoteBtn");
const display = document.getElementById("quote");
const displayAuthor = document.getElementById("quote-author");
quoteBtn.addEventListener("click", displayQuote);

function displayQuote(){
    const randomNumber = Math.floor(Math.random()*quotes.length)
    let quote = quotes[randomNumber].quote;
    let author = quotes[randomNumber].author;
    let id = quotes[randomNumber].id;
    display.innerText = quote;
    displayAuthor.innerText = author;
}