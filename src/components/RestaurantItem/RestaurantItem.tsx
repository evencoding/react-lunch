import { Restaurant } from '../../types/restaurant';

import React from 'react';
import { CategoryImage } from '..';
import * as styled from './RestaurantItem.styles';

interface Props {
  restaurant: Restaurant;
}

const RestaurantItem = (props: Props) => {
  const { id, name, category, distance, description } = props.restaurant;

  return (
    <styled.ItemWrapper id={id}>
      <CategoryImage category={category} />
      <styled.RestaurantInfo>
        <h3>{name}</h3>
        <styled.Distance>캠퍼스부터 {distance}분 내</styled.Distance>
        <styled.Description>{description}</styled.Description>
      </styled.RestaurantInfo>
    </styled.ItemWrapper>
  );
};

export default RestaurantItem;
