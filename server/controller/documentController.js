import Document from "../schema/documentSchema.js";

export const getDocument = async (id) => {
  try {
    if (id === null) return;

    const document = await Document.findById(id);
    if (document) return document;

    return await Document.create({ _id: id, data: "" });
  } catch (error) {
    console.log(error);
  }
};

export const updateDocument = async (id, data) => {
  try {
    return await Document.findByIdAndUpdate(id, { data });
  } catch (error) {
    console.log(error);
  }
};
