import React, { useState } from "react";
import Coruja from "../../assets/coruja.png";
import {
  CloseButton,
  Container,
  Image,
  Row,
  Subtitle,
  TabButton,
  Title,
} from "./styles";
import Input from "../../components/Input";
import { IDefinition, IMeanings } from "./interface";
import { getDefinition } from "../../services/definition";
import { useShowToast } from "../../utils/toastUtil";
import BlueCard from "../../components/BlueCard";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import WhiteCard from "../../components/WhiteCard";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import theme from "../../theme";

const HomeApp = () => {
  const [search, setSearch] = useState<string>("");
  const [definition, setDefinition] = useState<IDefinition[]>([]);
  const [tabActive, setTabActive] = useState<number>(1);
  const showToast = useShowToast();

  const onSubmit = async () => {
    if (validation()) {
      try {
        const result = await getDefinition(search);
        if (result) {
          setDefinition(result);
        }
      } catch (error) {
        setDefinition([]);
        showToast(`${error}`, { type: "danger" });
      }
    }
  };

  const validation = () => {
    if (!search) {
      showToast("Digite uma valor no campo de pesquisa", { type: "danger" });
      return false;
    }
    return true;
  };

  const initialValue = () => {
    setSearch("");
    setDefinition([]);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Container>
          <Image source={Coruja} />
          <Title>Dictionary</Title>
          <Subtitle>Find synonyms, antonyms and related worlds</Subtitle>
          <Input
            value={search}
            onChangeText={(value) => setSearch(value)}
            iconCallback={onSubmit}
          />

          {definition.length > 0 ? (
            <BlueCard
              title={definition[0]?.word}
              voice={definition[0]?.phonetics[0]?.audio}
              text={
                definition[0]?.phonetic || definition[0]?.phonetics[0]?.text
              }
            />
          ) : null}

          {definition.length > 0 ? (
            <Row>
              <TabButton
                active={tabActive === 1}
                onPress={() => setTabActive(1)}
              >
                Definition
              </TabButton>
              <TabButton
                active={tabActive === 2}
                onPress={() => setTabActive(2)}
              >
                Synonym
              </TabButton>
              <TabButton
                active={tabActive === 3}
                onPress={() => setTabActive(3)}
              >
                Antonym
              </TabButton>
            </Row>
          ) : null}

          {definition.length > 0
            ? definition.map((def: IDefinition) =>
                def?.meanings.length > 0
                  ? def.meanings.map((item: IMeanings, index: number) => (
                      <WhiteCard
                        key={index}
                        title={item.partOfSpeech}
                        content={
                          tabActive === 1
                            ? item.definitions
                            : tabActive === 2
                            ? item.synonyms
                            : item.antonyms
                        }
                      />
                    ))
                  : null
              )
            : null}

          {definition.length > 0 ? (
            <CloseButton onPress={initialValue}>
              <FontAwesome name="close" size={24} color={theme.COLORS.WHITE} />
            </CloseButton>
          ) : null}
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeApp;
