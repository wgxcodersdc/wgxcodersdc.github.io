import {Avatar, CoverImage, DateFormatter} from "../";
import { type Author } from "@/interfaces/author";
import { Group, Stack, Title } from "@mantine/core";
import Link from "next/link";
import classnames from "classnames/bind";

import styles from './hero.module.css'
const cx = classnames.bind(styles);

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className={cx('hero-post')}>
      <CoverImage title={title} src={coverImage} slug={slug} />
        <Group grow align="stretch">
          <Stack justify="flex-start" align="flex-start">
            <Title order={3}>
              <Link href={`/posts/${slug}`}>
                {title}
              </Link>
            </Title>
            <DateFormatter dateString={date} />
          </Stack>
          <Stack justify="flex-start" align="flex-start">
            <p>{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
        </Stack>
      </Group>
    </section>
  );
}
