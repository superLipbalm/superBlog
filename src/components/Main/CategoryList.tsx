import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { ReactElement, ReactNode } from 'react';

export interface CategoryListProps {
  selectedCategory: string;
  categoryList: {
    [key: string]: number;
  };
}

type CategoryItemProps = {
  active: boolean;
};

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps;

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 50px auto 10px;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 25px;
  }
`;

const CategoryItem = styled(({ active, to, ...props }: GatsbyLinkProps) => (
  <Link to={to} {...props} />
))`
  margin-right: 25px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '600')};
  cursor: pointer;
  transform: ${({ active }) => (active ? 'scale(1.2)' : 'scale(1)')};
  transition: 0.3s transform, 0.3s font-weight;

  &:last-of-type {
    margin-right: 0;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CategoryList({
  selectedCategory,
  categoryList,
}: CategoryListProps): ReactElement {
  return (
    <CategoryListWrapper>
      {categoryList &&
        Object.entries(categoryList).map(([name, count]) => (
          <CategoryItem
            to={`/?category=${name}`}
            key={name}
            active={name === selectedCategory}
          >
            #{name}({count})
          </CategoryItem>
        ))}
    </CategoryListWrapper>
  );
}

export default CategoryList;
