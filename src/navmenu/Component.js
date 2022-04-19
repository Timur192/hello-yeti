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
        <div>
            <img src="https://c.tenor.com/RUw-dmfAm48AAAAC/peach-cat-annoying.gif" alt="gif" width={400} border="0"/><br/>
            <p>i like you :) </p>
            <Button onClick={this.handleClick} variant="outlined">Close</Button>
        </div>
        )
        } else {
            return (
                <div>
                    <Stack spacing={2} direction="row">
                        <Button onClick={this.handleClick} variant="contained">Open</Button>
                    </Stack>
                </div>
            )
        }
  }
}
