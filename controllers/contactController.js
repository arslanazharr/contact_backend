const ContactModal = require("../model/contact");

const addContactRecord = async (req, res) => {
  console.log("req.body", req.body);

  const { description, serviceType, date, phone, email, name } = req.body;

  try {
    const newContact = new ContactModal({
      description,
      serviceType,
      date,
      phone,
      email,
      name,
    });

    await newContact.save();

    res.status(200).json({ message: "Message Successful", data: newContact });
  } catch (error) {
    console.error("Error saving contact record:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  addContactRecord,
};
