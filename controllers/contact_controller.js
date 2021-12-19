const db = require("../config/mongoose");
const Message = require("../model/contact");
const xlsx = require('json-as-xlsx')

class ContactController {
  static async sendMail(req, res) {
    console.log(req.body)
    const { username, email, subject, body } = req.body;
    const doc = new Message();
    doc.name = username;
    doc.email = email;
    doc.subject = subject;
    doc.body = body;
    await doc.save();
    res.send({ msg: "success" });
  }

  static async getData(req, res) {
    const docs = await Message.find({});
    getExcellSheet(docs)
    res.send({ msg: "success", data: docs });
  }
}

function getExcellSheet(docs){
  const data = [
  {
    sheet: "New Admission",
    columns: [
      { label: "Name", value: "name" },
      { label: "Email", value: "email" },
      { label: "Message", value: "message" },
    ],
    content: docs
      .filter((doc) => doc.subject === "New Admission")
      .map((doc) => ({
        name: doc.name,
        email: doc.email,
        message: doc.body,
      })),
  },
  {
    sheet: "Diet Plan",
    columns: [
      { label: "Name", value: "name" },
      { label: "Email", value: "email" },
      { label: "Message", value: "message" },
    ],
    content: docs
      .filter((doc) => doc.subject === "Diet Plan")
      .map((doc) => ({
        name: doc.name,
        email: doc.email,
        message: doc.body,
      })),
  },
  {
    sheet: "Daily Plan",
    columns: [
      { label: "Name", value: "name" },
      { label: "Email", value: "email" },
      { label: "Message", value: "message" },
    ],
    content: docs
      .filter((doc) => doc.subject === "Daily Plan")
      .map((doc) => ({
        name: doc.name,
        email: doc.email,
        message: doc.body,
      })),
  },
  {
    sheet: "Kids Progress",
    columns: [
      { label: "Name", value: "name" },
      { label: "Email", value: "email" },
      { label: "Message", value: "message" },
    ],
    content: docs
      .filter((doc) => doc.subject === "Kids Progress")
      .map((doc) => ({
        name: doc.name,
        email: doc.email,
        message: doc.body,
      })),
  },
  {
    sheet: "Feedback",
    columns: [
      { label: "Name", value: "name" },
      { label: "Email", value: "email" },
      { label: "Message", value: "message" },
    ],
    content: docs
      .filter((doc) => doc.subject === "Feedback")
      .map((doc) => ({
        name: doc.name,
        email: doc.email,
        message: doc.body,
      })),
  },
  {
    sheet: "Others",
    columns: [
      { label: "Name", value: "name" },
      { label: "Email", value: "email" },
      { label: "Message", value: "message" },
    ],
    content: docs
      .filter(
        (doc) => doc.subject === 'Others'
      )
      .map((doc) => ({
        name: doc.name,
        email: doc.email,
        message: doc.body,
      })),
  },
];
  let settings = {
    fileName: 'MySpreadsheet', // Name of the resulting spreadsheet
    extraLength: 5, // A bigger number means that columns will be wider
    writeOptions: {} // Style options from https://github.com/SheetJS/sheetjs#writing-options
  }
  
  xlsx(data, settings)
}

module.exports = ContactController;
