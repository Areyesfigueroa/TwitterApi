import profileImg from './assets/images/profile.png';

const dummyData = {
    name: "Aliel Reyes",
    image: profileImg,
    url: "@alielreyes",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    hearts: 10000,
    retweets: 11000,
    date: "09/16/1994",
    time: "3:15PM",
    location: "Bronx, NY"
}

const fetchData = async (count) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let arr = [];
            for (let i = 0; i < count; i++) {
                arr.push({id: i, ...dummyData});
            }
            resolve(arr);
        }, 3000);
    });
}

export { fetchData };