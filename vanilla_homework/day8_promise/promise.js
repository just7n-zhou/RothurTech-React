export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const post = await response.json();
    return post;
  }catch(err){
    console.log(err.message);
  }
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();
    return post;
  }catch(err){
    console.log(err.message);
  }
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
  const results = [];

  for (let i = 0; i < order.length; i++) {
    const index = order[i] - 1; // 1-based → 0-based
    const promise = promises[index];

    const value = await promise;
    results.push(value);
  }

  return results;
};
