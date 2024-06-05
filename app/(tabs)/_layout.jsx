import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = (icon, color, name, focused) => {
  return (
    <View>
      <Image 
        source={icon}
        resizeMode='contain'
        style={{ width: 24, height: 24, tintColor: color }}
      />
      <Text style={{ fontWeight: focused ? '600' : '400', fontSize: 10, color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen 
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.home}
              color={color}
              name='Home'
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
    </>
  );
};

export default TabsLayout;
