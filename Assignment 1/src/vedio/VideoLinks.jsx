import { Component } from "react";

class VideoLinks extends Component {
  render() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="aspect-video w-full">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/_H4rYtQRBzs?si=WCOVZ9-m7KgcSYuZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default VideoLinks;
