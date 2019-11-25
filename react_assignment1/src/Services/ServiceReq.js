export default function ServiceReq(props) {
  if (props) {
    const id = props.location.id;
    const path = props.location.pathname;
    if (path === "/comments") {
      const url = "https://jsonplaceholder.typicode.com/comments?postId=" + id;
      return (fetch(url)
        .then(response => response.json())
        .then(data => data));
    }
    else if (path === "/posts") {
      const url = "https://jsonplaceholder.typicode.com/posts?userId=" + id;
      return (fetch(url)
        .then(response => response.json())
        .then(data => data));
    }
    else if (path === "/todos") {
      const url = "https://jsonplaceholder.typicode.com/todos?userId=" + id;
      return (fetch(url)
        .then(response => response.json())
        .then(data => data));
    }
  }
  const url = "https://jsonplaceholder.typicode.com/users";
  return (fetch(url)
    .then(response => response.json())
    .then(data => data));
}