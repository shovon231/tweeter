/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// data for the tweets
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];
// function for showing the dynamic tweet eleemnt to the index.html

const createTweetElement = (tweet) => {
  const $tweet = $(`<article class="tweet">
  <header>
    <div class="divwithimg">
      <img src="${tweet.user.avatars}" alt="user img" />
      <div>${tweet.user.name}</div>
    </div>
    <div>${tweet.user.handle}</div>
  </header>
      <p>
        ${tweet.content.text}
      </p>
  <footer>
    <div>${tweet.created_at}</div>
    <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`);
  return $tweet;
};
//function for loop through the data array
const renderTweets = (data) => {
  let $tweet;
  // loops through tweets
  for (const tweetData of data) {
    // calls createTweetElement for each tweet
    $tweet = createTweetElement(tweetData);
    $("#tweets-container").append($tweet);
  }
  // takes return value and appends it to the tweets container
  // return $tweet;
};

$(document).ready(() => {
  renderTweets(data);
});
