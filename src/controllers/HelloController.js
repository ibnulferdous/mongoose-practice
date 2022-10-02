exports.HelloGet = (req, res) => {
  res
    .status(200)
    .json({ status: "Success", data: "This is my first express GET API!" });
};

exports.HelloPost = (req, res) => {
  res
    .status(201)
    .json({ status: "Success", data: "This is my first express POST API!" });
};
