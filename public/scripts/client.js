/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// function for showing the dynamic tweet eleemnt to the index.html
const createTweetElement = (tweet) => {
  const $tweet = $(`<article class="tweet">
  <header>
    <div class="divwithimg">
      <img src="${tweet.user.avatars}" alt="user img" />
      <div>${tweetEscape(tweet.user.name)}</div>
    </div>
    <div>${tweetEscape(tweet.user.handle)}</div>
  </header>
      <p>
        ${tweetEscape(tweet.content.text)}
      </p>
  <footer>
    <div>${tweetEscape(timeago.format(tweet.created_at))}</div>
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
  $("#tweets-container").empty();
  for (const tweetData of data) {
    // calls createTweetElement for each tweet
    $tweet = createTweetElement(tweetData);
    $("#tweets-container").prepend($tweet);
  }
};
//check the tweet length
const tweetLengthCheck = (msg) => {
  if (!msg) {
    $(".displayError").css("visibility", "visible");
    $toggleError("Opps!!! you cannot post Empty tweet");
  } else if (msg > 140) {
    $(".displayError").css("visibility", "visible");
    $toggleError("Bigggg tweets are not allowed! Tweet limit 140");
  } else {
    $(".displayError").css("visibility", "hidden");
    return true;
  }
};
//define loadtweet function
const loadTweets = () => {
  $("#tweet-text").val("");
  $(".counter").val(140);
  $.ajax({
    url: "http://localhost:8080/tweets",
    success: (res) => {
      renderTweets(res);
    },
  });
};
//escape function
const tweetEscape = (str) => {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
//toggle error message
const $toggleError = (message) => {
  const $err = $(".displayError");
  $err.slideUp();
  if (message) $err.html(message).slideDown();
};

//define the post and get method
$(document).ready(() => {
  loadTweets();
  $("form").submit((event) => {
    event.preventDefault();
    let msg = $("#tweet-text").val().length;
    if (tweetLengthCheck(msg)) {
      const $tweetTxt = $("#tweet-text").serialize();
      $.post("./tweets/", $tweetTxt).then(loadTweets);
    }
  });
});
