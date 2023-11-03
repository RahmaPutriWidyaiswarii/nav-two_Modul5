// Mengimpor beberapa komponen dan modul yang dibutuhkan
// digunakan untuk membuat tampilan antarmuka pengguna dengan tab
import { Tabs } from "expo-router/tabs";
//Komponen teks yang digunakan untuk menampilkan teks dalam aplikasi
import { Text } from "@gluestack-ui/themed";
// igunakan untuk menampilkan ikon menggunakan ikon Ionicons
import Ionicons from "@expo/vector-icons/Ionicons";

// menghilangkan header (judul) pada layar. Ini akan digunakan dalam prop options untuk setiap layar di dalam tab
const noHead = { headerShown: false };

const TabsLayout = () => {
    return (
        <Tabs
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
            let iconName;
            switch (route.name) {
                case "home":
                iconName = "home-outline";
                break;
                case "for-you":
                iconName = "document-text-outline";
                break;
                case "video":
                iconName = "videocam-outline";
                break;
                case "profile":
                iconName = "person-circle-outline";
                break;
            }
            return (
                <Ionicons
                name={iconName}
                size={28}
                color={focused ? "black" : color}
                />
            );
            },
            tabBarIconStyle: { marginTop: 5 },
            tabBarStyle: {
            height: 70,
            },
            tabBarLabel: ({ children, color, focused }) => {
            return (
                <Text mb="$2" color={focused ? "$black" : color} fontSize="$sm">
                {children}
                </Text>
            );
            },
        })}
        >
        <Tabs.Screen name="home" options={{ title: "Home", ...noHead }} />
        <Tabs.Screen name="for-you" options={{ title: "For You", ...noHead }} />
        <Tabs.Screen name="video" options={{ title: "Video", ...noHead }} />
        <Tabs.Screen name="profile" options={{ title: "Profile", ...noHead }} />
        </Tabs>
    );
};

export default TabsLayout;

