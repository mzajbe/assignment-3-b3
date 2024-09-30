import { z } from 'zod';

const createRoomValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty({ message: 'Room name is required' }).trim(),
    roomNo: z.string().nonempty({ message: 'Room number is required' }).trim(),
    floorNo: z.number().min(0, { message: 'Floor number is required' }),
    capacity: z.number().min(1, { message: 'Room capacity is required' }),
    pricePerSlot: z.number().min(0, { message: 'Price per slot is required' }),
    amenities: z.array(z.string()).optional(),
  })
});

export const RoomValidation = {
    createRoomValidationSchema,
}