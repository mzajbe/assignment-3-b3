import { model, Schema } from "mongoose";
import { TRoom } from "./room.interface";


const roomSchema = new Schema<TRoom>(
    {
        name: {
          type: String,
          required: [true, 'Room name is required'], 
          trim: true,
        },
        roomNo: {
          type: String,
          required: [true, 'Room number is required'],
          unique: true, 
          trim: true,
        },
        floorNo: {
          type: Number,
          required: [true, 'Floor number is required'],
        },
        capacity: {
          type: Number,
          required: [true, 'Room capacity is required'],
        },
        pricePerSlot: {
          type: Number,
          required: [true, 'Price per slot is required'],
        },
        amenities: {
          type: [String],
          default: [],
        },
      },
      {
        timestamps: true,
      }
    );
    
    // Create the Room model using the schema and export it
    const Room = model<TRoom>('Room', roomSchema);
    export default Room;