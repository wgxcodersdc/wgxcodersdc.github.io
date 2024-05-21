import Link from 'next/link';
import NextImage from 'next/image';
import {Container, Image} from '@mantine/core';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

export const CoverImage = ({title, src, slug}: Props) => {
  const image = (
    <Image
      component={NextImage}
      alt={`Cover Image for ${title}`}
      src={src}
      width={1240}
      height={620}
    />
  );
  return (
    <Container fluid p={0}>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </Container>
  );
};
