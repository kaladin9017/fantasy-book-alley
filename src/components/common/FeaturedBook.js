import React from 'react';

import './styles/styles.css';
import { Grid, Image, Button, Header } from 'semantic-ui-react'

const FeaturedBook = ({book}) => (
    <div className="featured-display">
      <Grid centered columns={3}>
        <Grid.Column>
          <Image src={book.image} size='big' />
        </Grid.Column>
        <Grid.Row centered>
            <Header as="h5">{book.title}</Header>
            <br/>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <p>
              {book.description}
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <center >
            <Button primary>See Reviews</Button>
            <Button positive>Read Now</Button>
          </center>
        </Grid.Row>
      </Grid>
    </div>
)

export default FeaturedBook;
