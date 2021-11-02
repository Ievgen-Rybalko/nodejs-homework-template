const fs = require("fs/promises");
const { contactsPath } = require("../../db");

const refreshContacts = async (contactsToFile) => {
  const newContacts = await fs.writeFile(
    contactsPath,
    JSON.stringify(contactsToFile)
  );
  return newContacts;
};

module.exports = refreshContacts;
