import { Text, Title } from '@mantine/core';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Title>Hello World</Title>
      <Text>Women and Gender eXpansive Coders DC</Text>
    </main>
  );
}
