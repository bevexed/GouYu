export const isPhoneNumber = (phone: string) => {
  const phonePattern = /^[0-9]{11}$/;
  return phonePattern.test(phone);
};
