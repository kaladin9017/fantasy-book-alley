import React from 'react';
import { Grid, Popup, Icon } from 'semantic-ui-react'

const BookTile = ({ book }) => (
  <div className="book">
    <div>
      <img className="tile__img" src={book.image} alt=""  />

      <Grid columns='equal'>
        <Grid.Column>
          <Popup
            trigger={<Icon name='info' circular />}
            content={book.description}
            offset={50}
            position='center'
          />
        </Grid.Column>
        <Grid.Column>
          <Icon name="like" circular />
        </Grid.Column>
      </Grid>
    </div>

  </div>

)
export default BookTile;
