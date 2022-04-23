import './StylePages/Сontactstyle.css';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

const Contactpage = () => {
    return (
    <header className="rectangle1">
        <div className="container">
          <title heading="contact" subheading="get in touch" />
          <div className="contactSection__wrapper">
            <div className="contact-bloc">
                <h2>Contact Us</h2>
                <TextField className='name-position'
                    autoFocus
                    sx={{ width: 400, maxWidth: "100%"}}
                    margin="dense"
                    id="name"
                    label="Name"
                    type="name"
                    fullWidth
                  />
                <TextField className='email-position'
                    autoFocus
                    sx={{ width: 400, maxWidth: "100%"}}
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                  />
                <TextareaAutosize className='question-position'
                    aria-label="empty textarea"
                    placeholder="Your question"
                    style={{ width: 399, height: 150 }}
                    />
                <Button style={{ top: 250, width: 399 }} 
                variant="contained">Send</Button>
            </div>
          </div>
        </div>
    </header>
    )
}

export {Contactpage}