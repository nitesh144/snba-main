
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import mailjet from 'node-mailjet';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies


// Initialize Mailjet client
const mailjetClient = mailjet.apiConnect(
  process.env.API_KEY,
  process.env.SECRET_KEY
);

// API route for sending emails
app.post('/api/send-email', async (req, res) => {
  try {
    // Get the form data from the request body
    const { franchiseType, name, mobile, email, address, location, message } = req.body;

    // Create the email content
    const emailData = {
      Messages: [
        {
          From: {
            Email: "no-replay@annieconsumers.com", 
            Name: "Franchise Enquiry System"
          },
          To: [
            {
              Email: "annieconsumers@gmail.com", 
              Name: "Franchise Team" 
            }
          ],
          
          Subject: `New Franchise Enquiry: ${franchiseType}`,
          HTMLPart: `
            <h2>New Franchise Enquiry</h2>
            <p><strong>Franchise Type:</strong> ${franchiseType}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Preferred Location:</strong> ${location}</p>
            <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          `,
          TextPart: `
            New Franchise Enquiry
            
            Franchise Type: ${franchiseType}
            Name: ${name}
            Mobile: ${mobile}
            Email: ${email}
            Address: ${address}
            Preferred Location: ${location}
            Message: ${message || 'No additional message'}
          `
        }
      ]
    };

    // Send the email using Mailjet
    const response = await mailjetClient.post('send', { version: 'v3.1' }).request(emailData);
    console.log(response)

    // Check email sent successfully
    if (response.body && response.body.Messages && response.body.Messages[0].Status === 'success') {
        console.log(response)
      return res.status(200).json({ message: 'Email sent successfully' });
    } else {
      return res.status(500).json({ message: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Mailjet API Server is running');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});