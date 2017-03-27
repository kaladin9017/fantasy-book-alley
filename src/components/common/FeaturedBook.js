import React from 'react';

import './styles/styles.css';
import { Grid, Image, Button, Header } from 'semantic-ui-react'

const FeaturedBook = () => (
    <div className="featured-display">
      <Grid centered columns={3}>
        <Grid.Column>
          <Image src="http://www.torforgeblog.com/wp-content/uploads/2016/03/wordsofradiance-809x538.jpg" size='big' />
        </Grid.Column>
        <Grid.Row centered>
            <Header as="h5">Words Of Radiance</Header>
            <br/>
        </Grid.Row>
        <Grid.Row centered columns={2}>
          <Grid.Column centered>
            <p>
              “The best part...is the compelling, complex story of Dalinar, Kaladin, and Shallan as they struggle though emotional, physical, and moral challenges. Fans and lovers of epic fantasy...will eagerly await the next volume.” ―Library Journal on The Way of Kings
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <center >
            <Button basic>See Reviews</Button>
            <Button basic>Read Now</Button>
          </center>
        </Grid.Row>
      </Grid>
    </div>
)

export default FeaturedBook;
