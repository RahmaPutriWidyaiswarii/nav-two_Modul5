// import { Heading, Text, Center } from "@gluestack-ui/themed";
// import { Header } from "../components";
// // hook yang digunakan untuk mengakses parameter yang dilewatkan melalui UR
// import { useLocalSearchParams } from "expo-router";

// const NewsDetail = () => {
//     const params = useLocalSearchParams();
//     return (
//         // mengambil parameter yang dilewatkan melalui adalah title
//         <>
//         <Header title={"News"} withBack={true} />
//         <Center flex={1} padding={"$4"}>
//             <Heading>News Detail</Heading>
//             <Text textAlign="center">{params.title}</Text>
//         </Center>
//         </>
//     );
// };

// export default NewsDetail;

// tugas challenge
import { Heading, Text, Image, View, Center } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";

const NewsDetail = () => {
    const params = useLocalSearchParams();
    return (
        <>
            <Header title={"News"} withBack={true} />
            <ScrollView>
                <View>
                    <Image
                        width={"auto"}
                        height={200}
                        source={{ uri: params.image }}
                        alt="Image Data"
                        role="Image"
                        marginBottom={15}
                    />
                    <Text fontSize={"$sm"} paddingHorizontal={15} marginBottom={9}color="black">
                        {params.date}
                    </Text>
                    <Heading lineHeight={"$xl"} fontSize={24} paddingHorizontal={15}>
                        {params.title}
                    </Heading>
                    <View
                    p={7}
                    width={380}
                    marginBottom={10}
                    alignSelf="center"
                    borderBottomColor={"$coolGray300"}
                    paddingHorizontal={15}
                    borderBottomWidth={1}
                    ></View>
                    <Text paddingHorizontal={15} color="black" marginBottom={10}>
                        {params.content}
                    </Text>
                </View>
            </ScrollView>
        </>
    );
};

export default NewsDetail;
