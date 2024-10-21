// GuiderAuth.tsx
import { View, Text, Image } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import { icons } from '@/constants';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { router } from 'expo-router';

const GuiderAuth = () => {
    const navigation = useNavigation(); // Get the navigation object

    return (
        <View>
            <View className='flex flex-row justify-center items-center mt-4 gap-x-3'>
                <View className='flex-1 h-[1px] bg-general-100' />
                <Text className='text-lg'>or</Text>
                <View className='flex-1 h-[1px] bg-general-100' />
            </View>

            <CustomButton
                title='Join as a Guider'
                className='mt-5 w-full shadow-none'
                IconLeft={() => (
                    <Image
                        source={icons.guider}
                        resizeMode='contain'
                        className='w-10 h-10 mx-5'
                    />
                )}
                bgVariant='outline'
                textVariant='primary'
                onPress={() => router.push('/guidersignUp')}
            />
        </View>
    );
}

export default GuiderAuth;
