import { PostType } from 'components/Main/PostList';
import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  postList: PostType[];
};

function useInfiniteScroll(
  selectedCategory: string,
  posts: PostType[],
): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);
  const [count, setCount] = useState<number>(1);

  const postListByCategory = useMemo<PostType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setCount(count => count + 1);
      observer.disconnect();
    },
  );

  useEffect(() => setCount(1), [selectedCategory]);

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    );
  }, [count, selectedCategory]);

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  };
}

const NUMBER_OF_ITEMS_PER_PAGE = 10;

export default useInfiniteScroll;
