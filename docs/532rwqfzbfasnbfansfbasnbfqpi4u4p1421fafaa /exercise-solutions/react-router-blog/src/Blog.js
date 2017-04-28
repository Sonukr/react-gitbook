import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>
        <div>
          <h2>Thursday</h2>
          <p>
            Wow, I got a lot of work done today. I am definitely looking forward
            to the weekend!
          </p>
        </div>
        <div>
          <h2>Tuesday</h2>
          <p>
            The weather was nice today. Overcast and rainy, but excellent
            board game weather!
          </p>
        </div>
        <div>
          <h2>Monday</h2>
          <p>
            Today I got up a bit late and worked from Cafe Allegro. The
            coffee was delicious. I ran into an old friend there, which
            is always great.
          </p>
        </div>
      </div>
    );
  }
}

export default Blog;
