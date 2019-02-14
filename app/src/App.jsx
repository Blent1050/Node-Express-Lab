import React, { Component } from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const baseURL = `http://localhost:4000/api`;

class App extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get(`${baseURL}/posts`)
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  }

  deletePost = (e, postId) => {
    e.preventDefault();
    axios
      .delete()
      .then()
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        {this.state.posts.map((post, key) => {
          return (
            <Card key={key}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography component="p">post.contents</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Update</Button>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default App;
