// Redirect digunakan untuk mengarahkan pengguna ke halaman atau URL tertentu
import { Redirect } from "expo-router";

// Redirect yang digunakan untuk mengarahkan pengguna ke halaman "/home"
const Root = () => {
    return <Redirect href="/home" />;
};

export default Root;
