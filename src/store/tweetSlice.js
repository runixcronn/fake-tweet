import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "Besiktas",
    name: "Beşiktaş JK",
    avatar:
      "https://images.seeklogo.com/logo-png/1/2/besiktas-jk-logo-png_seeklogo-18692.png",
    verified: true,
    locked: false,
  },
  display: "default",
  text: "Futbol takımımız, Bellona Kayserispor maçı hazırlıklarına bugün yaptığı antrenmanla başladı. 🦅 #BJKvKYS",
  image: [
    "https://pbs.twimg.com/media/GkteZu9WEAARDNR?format=jpg&name=360x360",
    "https://pbs.twimg.com/media/GktebBVWMAApcDm?format=jpg&name=360x360",
    "https://pbs.twimg.com/media/Gktec35XAAASEZ5?format=jpg&name=360x360",
    "https://pbs.twimg.com/media/GkteoJIXYAALXqU?format=jpg&name=360x360",
  ],
  date: "ÖS 2:35 · 26 Şub 2025",
  app: "100,2 B Görüntüleme",
  retweets: 5703,
  quotedTweets: 379,
  likes: 68900,
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.user.username = action.payload;
    },
    setName: (state, action) => {
      state.user.name = action.payload;
    },
    setAvatar: (state, action) => {
      state.user.avatar = action.payload;
    },
    setVerified: (state, action) => {
      state.user.verified = action.payload;
      if (action.payload && state.user.locked) {
        state.user.locked = false;
      }
    },
    setLocked: (state, action) => {
      state.user.locked = action.payload;
      if (action.payload && state.user.verified) {
        state.user.verified = false;
      }
    },
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setApp: (state, action) => {
      state.app = action.payload;
    },
    setRetweets: (state, action) => {
      state.retweets = action.payload;
    },
    setQuotedTweets: (state, action) => {
      state.quotedTweets = action.payload;
    },
    setLikes: (state, action) => {
      state.likes = action.payload;
    },
    fetchTwitterInfo: (state) => {
      const dummyData = {
        name: "Beşiktaş JK",
        screen_name: "Besiktas",
        verified: true,
        profile_image_url:
          "https://images.seeklogo.com/logo-png/1/2/besiktas-jk-logo-png_seeklogo-18692.png",
        status: {
          text: "🏆ŞAMPİYON Beşiktaş 2025 Süper Lig Şampiyonu Beşiktaş JK 🦅 #ŞampiyonBeşiktaş #BJK2025",
          retweet_count: 1138000,
          favorite_count: 12125000,
        },
        media_urls: [
          "https://pbs.twimg.com/media/GkteZu9WEAARDNR?format=jpg&name=360x360",
          "https://pbs.twimg.com/media/GktebBVWMAApcDm?format=jpg&name=360x360",
          "https://pbs.twimg.com/media/Gktec35XAAASEZ5?format=jpg&name=360x360",
          "https://pbs.twimg.com/media/GkteoJIXYAALXqU?format=jpg&name=360x360",
        ],
      };

      state.user.name = dummyData.name;
      state.user.username = dummyData.screen_name;
      state.text = dummyData.status.text;
      state.retweets = dummyData.status.retweet_count;
      state.likes = dummyData.status.favorite_count;
      state.user.verified = dummyData.verified;
      state.user.avatar = dummyData.profile_image_url;
      state.image = dummyData.media_urls;
      state.date = "ÖS 9:35 · 18 Haz 2025";
      state.app = "10000,2 B Görüntüleme";
    },
  },
});

export const {
  setUsername,
  setName,
  setAvatar,
  setVerified,
  setLocked,
  setDisplay,
  setText,
  setImage,
  setDate,
  setApp,
  setRetweets,
  setQuotedTweets,
  setLikes,
  fetchTwitterInfo,
} = tweetSlice.actions;

export default tweetSlice.reducer;
