const names = require("../data/nft-users.json");
const User = require("../model/userModel");

const createUser = async(req, res) => {
    const newUser = await User.create(req.body);

    res.status(210).json({
      status: "success",
    })
}



const getUser = async(req, res) => {
    const id = req.params.id * 1;
    const singleUser = names.find((el) => el.id === id);
    if(id > names.length) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
          });
    }

    res.status(200).json({
        status: "success",
        data: {
          singleUser,
        },
      });

    // res.status(500).json({
    //     status: "error",
    //     message: "internal server error",
    // })
}

const getAllUsers = async(req, res) => {
    res.status(200).json({
        status: "success",
        result: names.length,
        data: {
            names
        }
    })
    // res.status(500).json({
    //     status: "error",
    //     message: "internal server error",
    // })
}

const updateUser = async(req, res) => {
    if(req.params.id * 1 > names.length) {
        return res.status(404).json({
          status: "fail",
          message: "Invalid ID",
        });
      }
    
      res.status(200).json({
        status: "success",
        data: {
          message: 'updating user'
        },
      });
    // res.status(500).json({
    //     status: "error",
    //     message: "internal server error",
    // })
}

const upgradeUser = async(req, res) => {
    res.status(500).json({
        status: "error",
        message: "internal server error",
    })
}

const deleteUser = async(req, res) => {

  if(req.params.id * 1 > names.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(204).json({
    status: "success",
    data: {
      message: null
    },
  });
    // res.status(500).json({
    //     status: "error",
    //     message: "internal server error",
    // })
}

module.exports = {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    upgradeUser,
    deleteUser
}