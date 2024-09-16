const users = [
  {
    id: 1,
    name: "John",
    location: "New York",
    friends: [2, 3, 4],
    posts: [
      { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
      { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
      { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
    ]
  },
  {
    id: 2,
    name: "Alice",
    location: "San Francisco",
    friends: [1, 3],
    posts: [
      { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
      { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
    ]
  },
  {
    id: 3,
    name: "Emily",
    location: "Los Angeles",
    friends: [1, 2, 4],
    posts: [
      { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
      { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
    ]
  },
  {
    id: 4,
    name: "David",
    location: "Chicago",
    friends: [2],
    posts: [
      { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
      { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
    ]
  },
  {
    id: 5,
    name: "Sarah",
    location: "Seattle",
    friends: [3, 1],
    posts: [
      { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
      { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
    ]
  }
];

const dataAnalysisDashboard = (users) => {
  // Define the date one week ago
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  console.log(`Week ago date: ${weekAgo.toString()}`);
  
  // Filter active users based on having more than 1 post and recent posts in the last week
  const activeUsers = users
    .filter((user) => user.posts.length > 1) 
    .filter((user) => user.posts.some(post => new Date(post.timestamp) > weekAgo));
  
  // Log active users with their post counts
  console.log("Active Users:");
  activeUsers.forEach(user => console.log(`${user.name} has ${user.posts.length} posts`));
  
  // Extract popular posts (posts with likes >= 10) for active users
  const popularPosts = activeUsers.map(user => {
    const filteredPosts = user.posts.filter(post => post.likes >= 10);
    return {
      ...user,
      popularPosts: filteredPosts
    };
  });
  
  // Log popular posts details
  popularPosts.forEach(user => console.log(`${user.name} has ${user.popularPosts.length} popular posts`));

  // Calculate total likes from popular posts
  const totalLikes = popularPosts.reduce((sum, user) => {
    return sum + user.popularPosts.reduce((acc, post) => acc + post.likes, 0);
  }, 0);
  
  const avLikesPerUser = popularPosts.length > 0 ? totalLikes / popularPosts.length : 0;
  console.log(`Average likes per user: ${avLikesPerUser.toFixed(2)}`);
};

dataAnalysisDashboard(users);
