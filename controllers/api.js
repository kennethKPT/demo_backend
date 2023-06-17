const Menu = require("../model/menu");

exports.getMenuItems = async (req, res, next) => {
  const rs = await Menu.fetchAll();
  console.log(rs[0]);
  res.status(200).json({
    menuItems: rs[0]
  });
};

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First Post", content: "This is the first post!" }],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  //Create post in DB
  res.status(201).json({
    message: "Post created successfully",
    post: {
      id: new Date().getTime(),
      title: title,
      content: content,
    },
  });
};
