
const db = require("./database");

const profiles = [
  {
    username: "aarav_mehta",
    name: "Aarav Mehta",
    age: 21,
    bio: "Coffee lover and weekend explorer.",
    college: "Hindu College",
    interests: "Photography, Music, Travel",
    liked_me: 1
  },
  {
    username: "kabir_kapoor",
    name: "Kabir Kapoor",
    age: 22,
    bio: "Always up for an adventure.",
    college: "Shri Ram College of Commerce",
    interests: "Cricket, Finance, Travelling",
    liked_me: 0
  },
  {
    username: "ishaan_verma",
    name: "Ishaan Verma",
    age: 22,
    bio: "Tech enthusiast and foodie.",
    college: "Hansraj College",
    interests: "Coding, Gaming, Food",
    liked_me: 1
  },
  {
    username: "dev_arora",
    name: "Dev Arora",
    age: 21,
    bio: "Football is my kind of therapy.",
    college: "Kirori Mal College",
    interests: "Football, Music, Fitness",
    liked_me: 0
  },
  {
    username: "vivaan_gupta",
    name: "Vivaan Gupta",
    age: 20,
    bio: "Sports, friends and good food.",
    college: "Ramjas College",
    interests: "Basketball, Gym, Travelling",
    liked_me: 1
  },
  {
    username: "reyansh_singh",
    name: "Reyansh Singh",
    age: 22,
    bio: "Living life one playlist at a time.",
    college: "Sri Venkateswara College",
    interests: "Music, Football, Movies",
    liked_me: 0
  },
  {
    username: "arjun_saxena",
    name: "Arjun Saxena",
    age: 21,
    bio: "Gym, coding and coffee.",
    college: "Shaheed Sukhdev College",
    interests: "Fitness, Technology, Gaming",
    liked_me: 1
  },
  {
    username: "advik_joshi",
    name: "Advik Joshi",
    age: 21,
    bio: "Weekend biker and movie buff.",
    college: "Sri Guru Gobind Singh College of Commerce",
    interests: "Biking, Movies, Cricket",
    liked_me: 0
  },
  {
    username: "krish_malhotra",
    name: "Krish Malhotra",
    age: 22,
    bio: "Passionate about startups and ideas.",
    college: "Atma Ram Sanatan Dharma College",
    interests: "Entrepreneurship, Reading, Fitness",
    liked_me: 1
  },
  {
    username: "rudra_patel",
    name: "Rudra Patel",
    age: 20,
    bio: "Adventure seeker and foodie.",
    college: "Deen Dayal Upadhyaya College",
    interests: "Trekking, Food, Football",
    liked_me: 0
  },
  {
    username: "ayaan_chopra",
    name: "Ayaan Chopra",
    age: 21,
    bio: "Basketball and late-night conversations.",
    college: "Motilal Nehru College",
    interests: "Basketball, Gaming, Music",
    liked_me: 1
  },
  {
    username: "samar_kumar",
    name: "Samar Kumar",
    age: 22,
    bio: "A curious mind who loves learning.",
    college: "College of Vocational Studies",
    interests: "Technology, Books, Cricket",
    liked_me: 0
  },
  {
    username: "manav_tandon",
    name: "Manav Tandon",
    age: 20,
    bio: "Just another person chasing dreams.",
    college: "Ramanujan College",
    interests: "Football, Photography, Fitness",
    liked_me: 1
  },
  {
    username: "dhruv_bajaj",
    name: "Dhruv Bajaj",
    age: 21,
    bio: "Coffee first, everything later.",
    college: "Zakir Husain Delhi College",
    interests: "Coffee, Coding, Music",
    liked_me: 0
  },
  {
    username: "om_bhardwaj",
    name: "Om Bhardwaj",
    age: 22,
    bio: "Football fan and aspiring entrepreneur.",
    college: "Sri Guru Nanak Dev Khalsa College",
    interests: "Football, Business, Gaming",
    liked_me: 1
  },
  {
    username: "parth_goyal",
    name: "Parth Goyal",
    age: 20,
    bio: "Music, mountains and midnight drives.",
    college: "P.G.D.A.V. College",
    interests: "Music, Travelling, Biking",
    liked_me: 0
  },
  {
    username: "yash_thakur",
    name: "Yash Thakur",
    age: 21,
    bio: "Always ready for a football match.",
    college: "Deshbandhu College",
    interests: "Football, Gym, Gaming",
    liked_me: 1
  },
  {
    username: "neel_singhal",
    name: "Neel Singhal",
    age: 22,
    bio: "Building things and chasing goals.",
    college: "Satyawati College",
    interests: "Startups, Coding, Cricket",
    liked_me: 0
  },
  {
    username: "atharv_mishra",
    name: "Atharv Mishra",
    age: 20,
    bio: "Foodie, gamer and fitness enthusiast.",
    college: "Sri Guru Gobind Singh College",
    interests: "Gaming, Food, Fitness",
    liked_me: 1
  },
  {
    username: "rohan_suri",
    name: "Rohan Suri",
    age: 21,
    bio: "Big fan of road trips.",
    college: "Swami Shraddhanand College",
    interests: "Travelling, Cars, Cricket",
    liked_me: 0
  },
  {
    username: "aditya_sharma",
    name: "Aditya Sharma",
    age: 22,
    bio: "Music lover and amateur photographer.",
    college: "Delhi University",
    interests: "Music, Photography, Travel",
    liked_me: 1
  },
  {
    username: "rahul_malhotra",
    name: "Rahul Malhotra",
    age: 21,
    bio: "Into fitness and trying new cafes.",
    college: "Hansraj College",
    interests: "Gym, Food, Movies",
    liked_me: 0
  },
  {
    username: "karthik_iyer",
    name: "Karthik Iyer",
    age: 20,
    bio: "A little nerdy, a lot adventurous.",
    college: "Kirori Mal College",
    interests: "Coding, Trekking, Music",
    liked_me: 1
  },
  {
    username: "siddharth_jain",
    name: "Siddharth Jain",
    age: 22,
    bio: "Book lover who enjoys long walks.",
    college: "Ramjas College",
    interests: "Reading, Travel, Coffee",
    liked_me: 0
  },
  {
    username: "varun_khanna",
    name: "Varun Khanna",
    age: 21,
    bio: "Cricket, movies and spontaneous plans.",
    college: "Hindu College",
    interests: "Cricket, Movies, Fitness",
    liked_me: 1
  },
  {
    username: "rohit_bansal",
    name: "Rohit Bansal",
    age: 22,
    bio: "Aspiring entrepreneur and foodie.",
    college: "Sri Venkateswara College",
    interests: "Business, Food, Travelling",
    liked_me: 0
  },
  {
    username: "nikhil_raj",
    name: "Nikhil Raj",
    age: 20,
    bio: "Enjoying college one day at a time.",
    college: "Maharaja Agrasen College",
    interests: "Gaming, Music, Football",
    liked_me: 1
  },
  {
    username: "harsh_vardhan",
    name: "Harsh Vardhan",
    age: 21,
    bio: "Sunsets, bikes and good conversations.",
    college: "Motilal Nehru College",
    interests: "Biking, Photography, Travel",
    liked_me: 0
  },
  {
    username: "kunal_mehra",
    name: "Kunal Mehra",
    age: 22,
    bio: "Tech geek with a creative side.",
    college: "Shaheed Sukhdev College",
    interests: "Technology, Art, Gaming",
    liked_me: 1
  },
  {
    username: "arjun_mishra",
    name: "Arjun Mishra",
    age: 21,
    bio: "Here for meaningful connections.",
    college: "Delhi University",
    interests: "Reading, Music, Travelling",
    liked_me: 0
  }
];

// Assign male portrait images
profiles.forEach((profile, index) => {
  profile.photo = `https://randomuser.me/api/portraits/men/${index + 1}.jpg`;
});

// Reset and insert fresh profiles
const reset = db.transaction(() => {
  db.prepare("DELETE FROM matches").run();
  db.prepare("DELETE FROM swipes").run();
  db.prepare("DELETE FROM profiles").run();

  const insert = db.prepare(`
    INSERT INTO profiles
    (username, name, age, photo, bio, college, city, interests, liked_me)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const profile of profiles) {
    insert.run(
      profile.username,
      profile.name,
      profile.age,
      profile.photo,
      profile.bio,
      profile.college,
      "Delhi",
      profile.interests,
      profile.liked_me
    );
  }
});

reset();

console.log(`${profiles.length} male profiles inserted successfully!`);
