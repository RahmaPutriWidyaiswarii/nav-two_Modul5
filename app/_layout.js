// mengimpor beberapa komponen yang dibutuhkan
// digunakan untuk membuat tumpukan (stack) layar dalam aplikasi
import { Stack } from "expo-router";
// menyediakan tema (theme) untuk antarmuka pengguna aplikasi
import { GluestackUIProvider } from "@gluestack-ui/themed";
// konfigurasi tema (theme configuration) yang digunakan oleh GluestackUIProvider
import { config } from "@gluestack-ui/config";

// digunakan untuk mendefinisi konfigurasi yang menghilangkan header (judul) pada layar
// digunakan dalam prop options untuk beberapa layar yang dimasukkan ke dalam stack
const noHead = { headerShown: false };

// <Stack> Ini adalah komponen yang digunakan untuk mengatur tumpukan (stack) dari layar-layar aplikasi
// <Stack.Screen> Ini adalah layar dalam tumpukan (stack)
// semua layar menggunakan opsi { noHead } yang menghilangkan header (judul) dari tampilan layar
const StackLayout = () => {
  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen name="(tabs)" options={noHead} />
        <Stack.Screen name="index" options={noHead} />
        <Stack.Screen name="news-detail" options={noHead} />
      </Stack>
    </GluestackUIProvider>
  );
};

export default StackLayout;
