import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.set("view engine", "ejs");
app.get("/",(req,res)=>{
  res.render("contactform.ejs");
});

app.post("/contact", (req, res) => {
    // Retrieve form data from the request body
    const name = req.body.fname;
    const email = req.body.femail;
    const phone = req.body.fphone;
    
  
    // Render the contact.ejs page with the submitted data
    res.render("contact.ejs", {
      name: name,
      email: email,
      phone: phone,
    });
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
