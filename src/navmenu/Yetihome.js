import React, { PureComponent } from 'react'
import '../App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default class Component extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         visibility: false
      };

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
        visibility: !state.visibility
        }));
    }

  render() {
      if (this.state.visibility) {
        return (
        <div className="App">
            <img src="https://media3.giphy.com/media/3o7bukPWLMVsRz38J2/giphy.gif" alt="gif" width={400} border="0"/><br/>
            <p>React yeti</p>
            <Button onClick={this.handleClick} variant="outlined">Close</Button>
        </div>
        )
        } else {
            return (
                <div>
                    <Stack spacing={2} direction="row">
                        <button onClick={this.handleClick} href='#' className='button'>Open</button>
                    </Stack>
                </div>
            )
        }
  }
}
