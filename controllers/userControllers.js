import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * POST /users
 * Create a new user
 */
export const createUser = async (req, res) => {
  try {
    console.log("Api is running")
    const { name, email, password, role } = req.body;

    console.log(req.body)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role: role || "USER",
      },
    });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
    console.log(error)
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};