import React from "react";
import { Container, Row, styles, Subtitle, Title } from "./styles";
import { IBlueCard } from "./interface";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../theme";
import AudioPlayer from "../AudioPlayer";

const BlueCard: React.FC<IBlueCard> = ({ title, voice, text }) => {

  return (
    <Container>
      <LinearGradient
        colors={[`${theme.COLORS.PURPLE_100}`, `${theme.COLORS.PURPLE_200}`]}
        style={styles.background}
      >
        <Row>
          <Title>{title}</Title>
          {voice ? (
            <AudioPlayer voiceUrl={voice} />
          ) : null}
        </Row>
        <Row>
          <Subtitle>[{text}]</Subtitle>
        </Row>
      </LinearGradient>
    </Container>
  );
};

export default BlueCard;
