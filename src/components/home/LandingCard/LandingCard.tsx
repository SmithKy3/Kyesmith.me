import React from 'react';

import { Anchor, Badge, Card, Group, Kbd, Stack, Text } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

import { ColorGradientCanvas } from '@/components/common/ColorGradientCanvas/ColorGradientCanvas';

import styles from './LandingCard.module.css';

export const LandingCard: React.FC = () => {
  return (
    <Card className={styles.card}>
      <Card.Section>
        <ColorGradientCanvas className={styles.canvas} />
      </Card.Section>
      <Stack align="center" gap="lg" mt="md">
        <Group gap="xl">
          <Text
            component="h1"
            fw="900"
            gradient={{ from: 'violet', to: 'pink', deg: 90 }}
            size="xl"
            variant="gradient"
          >
            Kye Smith
          </Text>
          <Badge
            color="pink"
            gradient={{ from: 'violet', to: 'pink', deg: 270 }}
            size="sm"
            variant="gradient"
          >
            Frontend Engineer
          </Badge>
        </Group>
        <Group gap="xl" justify="center">
          <Kbd>TypeScript</Kbd> + <Kbd>React</Kbd> + <Kbd>Complex data</Kbd>
          <Kbd>🤌</Kbd>
        </Group>
        <Text>Stick around and have a gander, or find me in these places:</Text>
        <Group gap="xl">
          <Anchor href="https://github.com/SmithKy3" target="_blank">
            <IconBrandGithub />
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/kye-smith-121429165/"
            target="_blank"
          >
            <IconBrandLinkedin />
          </Anchor>
        </Group>
      </Stack>
    </Card>
  );
};
