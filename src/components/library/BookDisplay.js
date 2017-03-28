import React from 'react';
import { Grid, Popup, Icon } from 'semantic-ui-react'

const BookTile = ({ book }) => (
  <div className="book">
      <img className="tile__img" src='http://www.hp-lexicon.org/images/covers/1-ps-covers/ss-front-710px.jpg' alt=""  />

      {/* <Grid columns='equal'>
        <Grid.Column>
          <Popup
            trigger={<Icon inverted name='info' circular />}
            content={book.description}
            offset={50}
            position='right center'
          />
        </Grid.Column>
        <Grid.Column>
          <Icon inverted name="like" circular />
        </Grid.Column>
      </Grid> */}

  </div>

)
export default BookTile;
