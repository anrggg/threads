import { useState } from "react";
import { View, Text, TextInput, Pressable, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function NewPostScreen() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView edges={["bottom"]} className="p-4 flex-1">
      <KeyboardAwareScrollView
        extraScrollHeight={5}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Text className="text-white text-lg font-bold">username</Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="What is on your mind?"
          placeholderTextColor="gray"
          className="text-white text-lg"
          multiline
          numberOfLines={4}
        />

        <View className="mt-auto">
          <Pressable
            onPress={() => console.log("post: ", text)}
            className="bg-white p-3 px-6 self-end rounded-full"
          >
            <Text className="text-black font-bold">Post</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
