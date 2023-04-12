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
      <div>${tweet.user.name}</div>
    </div>
    <div>${tweet.user.handle}</div>
  </header>
      <p>
        ${tweet.content.text}
      </p>
  <footer>
    <div>${timeago.format(tweet.created_at.now - 11 * 1000 * 60 * 60)}</div>
    <div class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article>`);
  return $tweet;
};

//format(Date.now() - 11 * 1000 * 60 * 60); // returns '11 hours ago'
//function for loop through the data array
const renderTweets = (data) => {
  let $tweet;
  // loops through tweets
  for (const tweetData of data) {
    // calls createTweetElement for each tweet
    $tweet = createTweetElement(tweetData);
    $("#tweets-container").append($tweet);
  }
};
//define the post and get method
$(document).ready(() => {
  //renderTweets(data);

  $("form").submit((event) => {
    event.preventDefault();
    const $tweetTxt = $("#tweet-text").serialize();
  });
  // const loadTweets = () => {
  //   $.ajax("http://localhost:8080/tweets", { method: "GET" }).then(
  //     (morepostjson) => {
  //       renderTweets(morepostjson);
  //     }
  //   );
  // };
  const loadTweets = () => {
    $.ajax({
      url: "http://localhost:8080/tweets",
      success: (res) => {
        renderTweets(res);
      },
    });
  };
  loadTweets();
});

// $.ajax({
//   // Target URL:
//   url: 'https://ghibliapi.herokuapp.com/films/',
//   // If successful, process the response:
//   success: response => {
//       let outputHTML = '<ul>';
//       response.forEach(movie => outputHTML += `<li>${movie.title} (${movie.original_title})</li>`);
//       outputString += '</ul>';
//       $(document.body).append(outputHTML);
//   },
//   // If an error occurred, log the issue:
//   error: error => {
//       console.error(`Error Encountered: ${error.status} - ${error.statusText}`);
//   }
// });

// const loadTweets = () => {
//   $.ajax({
//     url: "http://localhost:8080/tweets",
//     success: (response) => {
//       for (const tweetData of response) {
//         // calls createTweetElement for each tweet
//         $tweet = createTweetElement(tweetData);
//         $("#tweets-container").append($tweet);
//       }
//     },
//     error: (error) => {
//       console.error(
//         `Error Encountered: ${error.status} - ${error.statusText}`
//       );
//     },
//   });
// };
