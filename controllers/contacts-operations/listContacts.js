const fs = require("fs/promises");
const { contactsPath } = require("../../model");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = listContacts;
