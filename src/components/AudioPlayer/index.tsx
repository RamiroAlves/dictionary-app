import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { Sound } from "./styles";
import theme from "../../theme";
import { AudioPlayerProps } from "./interface";

const AudioPlayer: React.FC<AudioPlayerProps> = ({ voiceUrl }) => {
  const handleClick = async () => {
    await Audio.Sound.createAsync({ uri: voiceUrl }, { shouldPlay: true });
  };

  return (
    <Sound onPress={handleClick}>
      <AntDesign name="sound" size={24} color={theme.COLORS.WHITE} />
    </Sound>
  );
};

export default AudioPlayer;
