//@desc Get all contacts
//@route GET /api/contacts
//@access puplic
const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contact" });
};

//@desc Create all contacts
//@route Post /api/contacts
//@access puplic
const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  console.log("the body:", req.body);

  res.status(201).json({ message: "Create Contact" });
};

//@desc Get  contact
//@route GET /api/contacts/:id
//@access puplic
const getContact = (req, res) => {
  res.status(200).json({ message: `get Contact for ${req.params.id}` });
};
//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};
//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete Contact for ${req.params.id}` });
};
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
