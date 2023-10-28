const select = {
  id: true,
  name: true,
  email: true,
  contactNo: true,
  address: true,
  image: true,
  experiences: true,
  speciality: true,
  branch: true,
  treatmentId: true,
  createdAt: true,
  updatedAt: true,
};

const doctorSearchableFields: string[] = ["id", "name", "email", "contactNo"];

const doctorFilterableFields: string[] = [
  "searchTerm",
  "id",
  "email",
  "contactNo",
  "branch",
];

export { select, doctorSearchableFields, doctorFilterableFields };
