import { IReqCarProps } from '@/models/req.model';

export const isValidCarDetails = (
  carDetails: IReqCarProps
): { isValid: boolean; message: string } => {
  if (carDetails.images.length === 0) {
    return { isValid: false, message: 'Vui lòng tải lên ít nhất 1 ảnh' };
  }

  if (
    !carDetails.type ||
    !carDetails.description ||
    !carDetails.make ||
    !carDetails.model ||
    !carDetails.year ||
    !carDetails.transmission ||
    !carDetails.engineCapacity ||
    !carDetails.fuelType ||
    !carDetails.color ||
    !carDetails.seatingCapacity ||
    !carDetails.numberOfBags ||
    !carDetails.numberOfDoors ||
    !carDetails.fuelType ||
    !carDetails.pricePerDay ||
    !carDetails.minimumRentalPeriodInDays
  ) {
    return { isValid: false, message: 'Please fill in all the fields' };
  }

  return { isValid: true, message: '' };
};
