import React, { useState } from "react"
import Coruja from "../../assets/coruja.png";
import { Container, Image, Subtitle, Title } from "./styles";
import Input from "../../components/Input";

const HomeApp = () => {
    const [search, setSearch] = useState<string>('')
    return (
        <Container>
            <Image source={Coruja} />
            <Title>Dictionary</Title>
            <Subtitle>Find synonyms, antonyms and related worlds</Subtitle>
            <Input value={search} onChangeText={value => setSearch(value)} />
        </Container>
    )
}

export default HomeApp;