import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ride } from '@/types/type'
import { icons } from '@/constants'
import { formatDate, formatTime } from '@/lib/utils'

const RideCard = ({ ride: {
    destination_address, destination_longitude, destination_latitude, origin_address, created_at, ride_time, driver, payment_status
} }: { ride: Ride }) => {
    return (
        <View className='flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3'>
            <View className='flex flex-col items-center justify-center p-3'>
                <View className="flex flex-row items-center justify-between ">
                    <Image
                        source={{
                            uri: `https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg`
                        }}
                        className='w-[80px] h-[90px] rounded-lg'
                    />
                    <View className='flex flex-col mx-5 gap-y-5 flex-1'>
                        <View className='flex flex-row items-center gap-x-2'>
                            <Image
                                source={icons.to} className='w-5 h-5'

                            />
                            <Text className='text-md font-JakartaMedium' numberOfLines={1}>{origin_address}</Text>
                        </View>

                        {/* 2nd  */}

                        <View className='flex flex-row items-center gap-x-2'>
                            <Image
                                source={icons.point} className='w-5 h-5'

                            />
                            <Text className='text-md font-JakartaMedium' numberOfLines={1}>{destination_address}</Text>
                        </View>
                    </View>
                </View>
                {/* Bottom part UI */}

                <View className='flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center'>
                    <View className='flex flex-row items-center w-full justify-between mb-5 '>
                        <Text className='text-md font-JakartaMedium text-grey-500'>Date & Time</Text>
                        <Text className='text-md font-JakartaMedium text-grey-500'>{formatDate(created_at)}, {formatTime(ride_time)}</Text>
                    </View>
                    {/* 3rd View */}
                    <View className='flex flex-row items-center w-full justify-between mb-5 '>
                        <Text className='text-md font-JakartaMedium text-grey-500'>Driver</Text>
                        <Text className='text-md font-JakartaMedium text-grey-500'>{driver.first_name} {driver.last_name} </Text>
                    </View>
                    {/* 4rd view */}

                    <View className='flex flex-row items-center w-full justify-between mb-5 '>
                        <Text className='text-md font-JakartaMedium text-grey-500'>Car Seats</Text>
                        <Text className='text-md font-JakartaMedium text-grey-500'>{driver.car_seats} </Text>
                    </View>

                    {/* 5th view */}

                    <View className='flex flex-row items-center w-full justify-between mb-5 '>
                        <Text className='text-md font-JakartaMedium text-grey-500'>Payment Status</Text>
                        <Text className={`text-md capitalize font-JakartaBold ${payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
                        >{payment_status} </Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

export default RideCard