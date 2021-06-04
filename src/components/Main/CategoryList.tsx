import styled from '@emotion/styled';
import React from 'react';

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 760px;
  margin: 100px auto 0;
`;

function CategoryList({ selectedCategory, categoryList }: CategoryListProps) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <div key={name}>
          #{name}({count})
        </div>
      ))}
    </CategoryListWrapper>
  );
}

export default CategoryList;
