import { Avatar as _Avatar, Group, Text } from "@mantine/core";

type Props = {
  name: string;
  picture: string;
};

export const Avatar = ({ name, picture }: Props) => {
  return (
    <Group gap="xs" align="center" justify="center">
      <_Avatar src={picture} radius="xl" size="lg" alt={name}/>
      <Text size="xl" fw={700}>{name}</Text>
    </Group>
  );
};
