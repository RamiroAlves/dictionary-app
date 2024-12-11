import React from "react";
import { Container, styles, Subtitle, Title } from "./styles";
import { IWhiteCard } from "./interface";
import { IDefinitions } from "../../screens/Home/interface";

const WhiteCard: React.FC<IWhiteCard> = ({ title, content }) => {
  return (
    <Container style={styles.shadow}>
      <Title>{title}</Title>
      {Array.isArray(content)
        ? content.map((item: IDefinitions | string, index: number) => (
            <Subtitle key={index}>
              {`${index + 1}. `}
              {typeof item === "string" ? item : item.definition}
            </Subtitle>
          ))
        : null}
    </Container>
  );
};

export default WhiteCard;
