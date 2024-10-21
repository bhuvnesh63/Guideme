import { useRouter } from "expo-router";
import { Alert, Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/inputField";
import { images } from "@/constants";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

const GuidersignUpPer = () => {
    const router = useRouter();

    const { name, email, phoneNumber, password } = router.params || {};

    // Corrected field names to match backend schema
    const [city, setCity] = useState('');
    const [addharNumber, setAddharNumber] = useState(''); // Corrected from aaddhar to addharNumber
    const [file, setFile] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSignUpPress = async () => {
        try {
            setIsSubmitting(true);
    
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phoneNumber", phoneNumber);
            formData.append("password", password);
            formData.append("city", city);
            formData.append("addharNumber", addharNumber); // Ensure spelling matches backend

            if (file) {
                formData.append("profile", {
                    uri: file,
                    name: "profile.jpg",
                    type: "image/jpeg"
                });
            }
    
            const response = await fetch('http://192.168.0.108:4000/api/v1/guide/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });
    
            const responseJson = await response.json();
            console.log("Response:", responseJson);
    
            if (response.ok) {
                Alert.alert("Profile Created", "Your profile has been created successfully.");
            } else {
                Alert.alert("Error", responseJson.message || "Failed to create profile. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            Alert.alert("Error", "An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handlePhotoUpload = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert("Permission to access photo library is required!");
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setFile(result.assets[0].uri);
        }
    };

    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white ">
                <View className="relative w-full h-[250px]">
                    <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Other Details
                    </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label="City"
                        placeholder="Enter City"
                        value={city}
                        onChangeText={(text) => setCity(text)}
                    />

                    <InputField 
                        label="Aadhar Number"
                        placeholder="Enter Aadhar Number"
                        value={addharNumber} // Corrected to match backend field name
                        onChangeText={(text) => setAddharNumber(text)}
                    />

                    <View className="mt-4">
                        <Text className="text-lg">Profile Photo</Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#8fbc8f',
                                padding: 10,
                                borderRadius: 5,
                                alignItems: 'center',
                                marginTop: 10,
                            }}
                            onPress={handlePhotoUpload}
                        >
                            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Choose Photo</Text>
                        </TouchableOpacity>
                        {file && (
                            <Image
                                source={{ uri: file }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    marginTop: 10,
                                    borderRadius: 50,
                                    borderWidth: 2,
                                    borderColor: '#4A90E2', 
                                }}
                            />
                        )}
                    </View>

                    <CustomButton 
                        title={isSubmitting ? "Submitting..." : "Submit"} 
                        onPress={onSignUpPress} 
                        disabled={isSubmitting}
                        className="mt-6" 
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default GuidersignUpPer;
