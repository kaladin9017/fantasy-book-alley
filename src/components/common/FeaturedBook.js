import React, { Component } from 'react';

import './styles/styles.css';
import { Grid, Image, Button, Header, Modal, Segment } from 'semantic-ui-react'

import axios from 'axios';
import striptags from 'striptags';
import $ from 'jquery';

class FeaturedBook extends Component {
  constructor(props) {
    super(props)
    this.state = { review: '', modalOpen: false }
  }
  getReviews() {
    let config = {
      headers : {
        "Access-Control-Allow-Origin": "*"
      }
    }

    axios(`https://crossorigin.me/https://www.goodreads.com/book/title.xml?key=${process.env.REACT_APP_GOOD_READS_KEY}&title=${this.props.book.title.split(' ').join('+')}`)
      .then((data) => {
        let first = data.data.indexOf('description') + 21;
        let second = data.data.indexOf('</description>') - first - 3;
        this.setState({review: striptags(data.data.substr(first, second))})
      })
  }
  readText() {
    $('.text-description').css({
        'height': 'auto'
    });
    $('#more').css({
        'display': 'none'
    });
    $('#less').css({
        'display': 'initial'
    });
  }

  hideText() {
    $('.text-description').css({
        'height': '50px'
    });
    $('#more').css({
        'display': 'initial'
    });
    $('#less').css({
        'display': 'none'
    });
  }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })
  render() {
    this.getReviews();
    return (
      <div className="featured-display">
        <Segment.Group raised >
            <Segment>
              <Image centered src={this.props.book.image} size='small' />
              <br/>
              <Grid centered columns={3}>
                <Grid.Row centered>
                <Header as="h5">{this.props.book.title}</Header>
                <br/>
              </Grid.Row>
              <Grid.Row centered columns={2}>
                <Grid.Column>
                  <p className='text-description'>
                    { this.state.review }
                  </p>
                   { this.state.review.length > 100 ? <a id="more" onClick={this.readText}>more</a> : null }
                   <a id="less" onClick={this.hideText}>less</a>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <center>
                  <Modal open={this.state.modalOpen} trigger={<Button onClick={this.handleOpen.bind(this)}>Reviews</Button>} basic size='small'>
                    <Header icon='comment' content='Review' />
                    <Modal.Content>
                      <p>Reviews coming soon</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button basic color='red' inverted onClick={this.handleClose.bind(this)}>
                         Close
                      </Button>
                      <Button color='green' inverted>
                         Read Now
                      </Button>
                    </Modal.Actions>
                  </Modal>
                  {/* <Button positive>Read Now</Button> */}
                </center>
              </Grid.Row>
            </Grid>
          </Segment>
        </Segment.Group>

        <br/>

      </div>
    )
  }

}


export default FeaturedBook;
