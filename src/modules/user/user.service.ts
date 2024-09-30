
import mongoose from 'mongoose';
import config from '../../config';
import { TUser } from './user.interface';
import { User } from './user.model';
import AppError from '../../error/AppError';
import httpStatus from 'http-status-codes';

const createUser = async (userData: any) => {

  // Ensure the role is set to 'user' by default
  const role = userData.role || 'user';

  const newUser = await User.create({ ...userData, role });
  // Return only non-sensitive data
  return {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
    role: newUser.role,
    address: newUser.address,
  };
};

const getSingleUserFromDB = async (_id:string) => {
  const result = await User.findById(_id);
  return result;
}




const getUsersByRole = async (role: string) => {
  return await User.find({ role });
};

const updateUserToAdminIntoDB = async() =>{
  
}




export const UserServices = {
  createUser,
  getUsersByRole,
  getSingleUserFromDB,
};
