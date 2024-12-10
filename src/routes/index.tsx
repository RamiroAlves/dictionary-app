import React from "react";
import { Stack } from "expo-router";

const Routes = () => {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ title: 'Home' }} />
        </Stack>
    )
}

export default Routes;