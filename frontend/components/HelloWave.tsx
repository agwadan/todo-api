import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { ListView } from "@/components/ListView";
import { ThemedText } from "@/components/AddTodo";

export function HelloWave() {
  return (
    <>
      <View style={styles.container}>
        <ListView />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
