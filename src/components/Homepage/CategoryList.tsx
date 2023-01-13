import React from 'react';
import CategoryCard from './categoryCard';

type Category = {
  id: number;
  name: string;
  category_picture: string;
  description: string;
};

type Props = {
  category: Category[];
};

function CategoryList(props: Props) {

  console.log(props);
  
  return (
    <>
      {props.category.map((el) => (
        <CategoryCard key={el.name} title={el.name} img={el.category_picture} />
      ))}
    </>
  );
}

export default CategoryList;
