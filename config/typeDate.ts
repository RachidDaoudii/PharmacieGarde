const PharmacieType = {
  id: Number,
  name: String,
  address: String,
  latitude: Number,
  longitude: Number,
  distance: Number,
  images: [],
  openingHours: String,
  closingHours: String,
  phone: String,
  email: String,
  services: [],
  onGuard: Boolean,
  onGuardDays: null,
  reviews: [],
};

export default PharmacieType;
