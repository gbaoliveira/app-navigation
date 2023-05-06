import { Tabs } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons'

export default () => {
    return (
        <Tabs>
            <Tabs.Screen 
            name="home"
            options={{
                tabBarLabel: 'Lista',
                headerTitle: 'Tela inicial',
                headerTitleAlign: 'center',
                tabBarIcon: ({color, size}) => <FontAwesome5 name="list" size={size} color={color} />
            }}
            />
        <Tabs.Screen 
        name="profile"
        options={{
            tabBarLabel: 'Conta',
            headerTitle: 'Minha conta',
            headerTitleAlign: 'center',
            tabBarIcon: ({color, size}) => <FontAwesome5 name="user" size={size} color={color} />
        }}
        />
        </Tabs>
    )
}