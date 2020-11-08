const data = [
  {
    posts: [
      { id: 1,
        text: "asd"
      },
      { id: 2,
        text: "qwe"
      }
    ]
  },
  {
    posts: [
      { id: 1,
        text: "asd"
      },
      { id: 3,
        text: "aazxc"
      }
    ]
  },
  {
    posts: [
      { id: 1,
        text: "asd"
      },
      { id: 2,
        text: "qwe"
      },
      { id: 3,
        text: "aazxc"
      }
    ]
  }
]

/**
 * THE PROBLEM: Array of objects which contains array of other objects that need
 *  1 - to be removed the duplicates
 *  2 - sort by text
*/ 


// sort by .text
const compare = (a, b) => {
  if (a.text > b.text) return 1;
  if (b.text > a.text) return -1;
  return 0;
};

const solution = data => {
  // 1) convert all data to only posts
  const onlyPosts = [];
  data.forEach(e => e.posts.forEach((post, i) => onlyPosts.push(post)));
  const posts = onlyPosts.map((post, i) => ({"#": i + 1, post})); // adding # for a better presentation, but the real data is onlyPosts
  console.log("onlyPosts", posts);

  // 2) remove the duplicates
  let unique = {};
  const result = onlyPosts.filter(e => !unique[e.id] && (unique[e.id] = true));

  return({
    before  : onlyPosts.length,
    after   : result.length,
    newArray: result.sort(compare)  // sorting is being made here
  });
};

console.log(solution(data));