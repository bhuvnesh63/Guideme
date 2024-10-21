import { Link, router } from "expo-router";
import { Alert, Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/inputField";
import { images } from "@/constants";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

const GuidersignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');


  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white ">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Guider Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter name"
            value={name}
            onChangeText={(text) =>
              setName(text)}

          />
          <InputField label="Email"
            placeholder="Enter email"
            textContentType="emailAddress"
            value={email}
            onChangeText={(text) =>
              setEmail(text)}
          />

          <InputField label="Password"
            placeholder="Enter password"
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) =>
              setPassword(text)
            }

          />

          <InputField label="Phone Number"
            placeholder="Enter phone number"
            keyboardType='numeric'
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />


<CustomButton 
            title="Next" 
            onPress={() => 
              router.push({
                pathname: '/guidersignUpPer',
                params: { name, email, phoneNumber, password } // Pass data as params
              })} 
            className="mt-6" 
          />
          <Link href="/guiderSignin" className="text-lg text-center text-general-200 mt-10">
            Already have an account?{" "}
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default GuidersignUp;
